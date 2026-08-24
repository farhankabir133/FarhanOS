import fs from 'node:fs';
import path from 'node:path';

export interface KnowledgeDoc {
  id: string;
  title: string;
  category: string;
  description: string;
  summary: string;
  visibility: string;
  priority: number;
  importance: number;
  status: string;
  created: string;
  updated: string;
  owner: string;
  version: string;
  language: string;
  reading_time: string;
  difficulty: string;
  confidence: number;
  tags: string[];
  keywords: string[];
  skills: string[];
  technologies: string[];
  companies: string[];
  projects: string[];
  related_documents: string[];
  related_projects: string[];
  related_skills: string[];
  search_boost: number;
  embedding_enabled: boolean;
  retrieval_priority: number;
  public: boolean;
  featured: boolean;
  content: string;
  raw: string;
}

const KNOWLEDGE_DIR = path.join(process.cwd(), 'knowledge');

let docs: KnowledgeDoc[] = [];
let indexReady = false;
let loadError: string | null = null;

function coerceScalar(value: string): unknown {
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (!isNaN(Number(value)) && value !== '') return Number(value);
  // Unwrap single or double quoted strings
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function parseInlineArray(value: string): unknown[] {
  const inner = value.slice(1, -1).trim();
  if (!inner) return [];
  return inner.split(',').map((s) => coerceScalar(s.trim())).filter((v) => v !== '' && v != null);
}

export function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const fmRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = raw.match(fmRegex);
  if (!match) {
    return { data: {}, content: raw.trim() };
  }
  const fmBlock = match[1];
  const content = match[2].trim();
  const data: Record<string, unknown> = {};
  const lines = fmBlock.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1 || /^\s/.test(line)) continue;
    const key = line.slice(0, colonIdx).trim();
    const rawValue = line.slice(colonIdx + 1).trim();

    if (rawValue === '') {
      // Multi-line block: either "- item" list or nested/empty value
      const items: unknown[] = [];
      let j = i + 1;
      while (j < lines.length && /^\s+-\s?/.test(lines[j])) {
        const itemText = lines[j].replace(/^\s+-\s?/, '').trim();
        if (itemText) items.push(coerceScalar(itemText));
        j++;
      }
      if (items.length > 0) {
        data[key] = items;
        i = j - 1;
      } else {
        data[key] = '';
      }
    } else if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
      data[key] = parseInlineArray(rawValue);
    } else {
      data[key] = coerceScalar(rawValue);
    }
  }
  return { data, content };
}

function tokenize(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((w) => w.length > 2);
}

function computeTf(tokens: string[]): Record<string, number> {
  const tf: Record<string, number> = {};
  for (const t of tokens) {
    tf[t] = (tf[t] || 0) + 1;
  }
  const len = tokens.length || 1;
  for (const k in tf) {
    tf[k] /= len;
  }
  return tf;
}

let idf: Record<string, number> = {};

function computeIdf() {
  const N = docs.length;
  const df: Record<string, number> = {};
  for (const doc of docs) {
    const tokens = new Set(tokenize(doc.raw));
    for (const t of tokens) {
      df[t] = (df[t] || 0) + 1;
    }
  }
  idf = {};
  for (const k in df) {
    idf[k] = Math.log((N + 1) / (df[k] + 1)) + 1;
  }
}

function scoreQuery(query: string, doc: KnowledgeDoc): number {
  const text = `${doc.title} ${doc.summary} ${doc.content} ${(doc.keywords || []).join(' ')} ${(doc.tags || []).join(' ')} ${(doc.technologies || []).join(' ')} ${(doc.skills || []).join(' ')}`;
  const queryTokens = tokenize(query + ' ' + text);
  const contentTokens = tokenize(doc.raw);
  const contentTf = computeTf(contentTokens);
  const queryTf = computeTf(queryTokens);

  let score = 0;
  for (const t in queryTf) {
    const tf = contentTf[t] || 0;
    const idfVal = idf[t] || 1;
    score += tf * idfVal * (queryTf[t] || 1);
  }

  score *= (doc.search_boost || 1);
  score *= (doc.retrieval_priority || 1);
  if (doc.featured) score *= 1.5;
  score *= (doc.confidence || 1);
  return score;
}

export function searchKnowledge(query: string, options: { category?: string; tags?: string[]; topK?: number; featuredOnly?: boolean } = {}): KnowledgeDoc[] {
  if (!indexReady && !loadError) {
    try {
      loadKnowledgeBase();
    } catch (err) {
      loadError = err instanceof Error ? err.message : String(err);
      console.error('[knowledge] load failed:', loadError);
    }
  }
  const { category, tags, topK = 5, featuredOnly = false } = options;

  let candidates = docs.filter((d) => d.public);

  if (category) {
    candidates = candidates.filter((d) => d.category === category || d.category?.includes(category));
  }
  if (tags && tags.length > 0) {
    candidates = candidates.filter((d) => tags.some((t) => d.tags?.includes(t) || d.keywords?.includes(t)));
  }
  if (featuredOnly) {
    candidates = candidates.filter((d) => d.featured);
  }

  const scored = candidates
    .map((doc) => ({ doc, score: scoreQuery(query, doc) }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, topK).map((s) => s.doc);
}

export function getRelated(docId: string, limit = 3): KnowledgeDoc[] {
  if (!indexReady && !loadError) {
    try {
      loadKnowledgeBase();
    } catch (err) {
      loadError = err instanceof Error ? err.message : String(err);
      console.error('[knowledge] load failed:', loadError);
    }
  }
  const doc = docs.find((d) => d.id === docId);
  if (!doc) return [];
  const related = docs
    .filter((d) => d.id !== docId && (doc.related_documents?.includes(d.id) || doc.related_projects?.some((p) => d.projects?.includes(p)) || doc.related_skills?.some((s) => d.skills?.includes(s))))
    .slice(0, limit);
  return related;
}

export function getAllDocs(): KnowledgeDoc[] {
  if (!indexReady && !loadError) {
    try {
      loadKnowledgeBase();
    } catch (err) {
      loadError = err instanceof Error ? err.message : String(err);
      console.error('[knowledge] load failed:', loadError);
    }
  }
  return docs.filter((d) => d.public);
}

export function getKnowledgeCount(): number {
  if (!indexReady && !loadError) {
    try {
      loadKnowledgeBase();
    } catch (err) {
      loadError = err instanceof Error ? err.message : String(err);
      console.error('[knowledge] load failed:', loadError);
    }
  }
  return docs.filter((d) => d.public).length;
}

export function listCategories(): string[] {
  if (!indexReady && !loadError) {
    try {
      loadKnowledgeBase();
    } catch (err) {
      loadError = err instanceof Error ? err.message : String(err);
      console.error('[knowledge] load failed:', loadError);
    }
  }
  return Array.from(new Set(docs.filter((d) => d.public).map((d) => d.category).filter(Boolean))) as string[];
}

export function loadKnowledgeBase() {
  if (indexReady || loadError) return;
  const files: string[] = [];
  if (!fs.existsSync(KNOWLEDGE_DIR)) {
    indexReady = true;
    loadError = 'knowledge directory missing';
    return;
  }
  const walk = (dir: string) => {
    let entries: fs.Dirent[] = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (err) {
      console.error('[knowledge] readdir failed:', dir, err);
      return;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.md')) {
        files.push(full);
      }
    }
  };
  try {
    walk(KNOWLEDGE_DIR);
  } catch (err) {
    loadError = err instanceof Error ? err.message : String(err);
    console.error('[knowledge] walk failed:', loadError);
    indexReady = true;
    return;
  }

  docs = [];
  for (const file of files) {
    try {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data, content } = parseFrontmatter(raw);
      const relative = path.relative(KNOWLEDGE_DIR, file);
      const id = data.id || relative.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '');
      docs.push({
        id: String(id),
        title: String(data.title || id),
        category: String(data.category || 'uncategorized'),
        description: String(data.description || ''),
        summary: String(data.summary || ''),
        visibility: String(data.visibility || 'public'),
        priority: Number(data.priority || 1),
        importance: Number(data.importance || 1),
        status: String(data.status || 'active'),
        created: String(data.created || new Date().toISOString()),
        updated: String(data.updated || new Date().toISOString()),
        owner: String(data.owner || 'Farhan Kabir'),
        version: String(data.version || '1.0.0'),
        language: String(data.language || 'en'),
        reading_time: String(data.reading_time || '1 min read'),
        difficulty: String(data.difficulty || 'intermediate'),
        confidence: Number(data.confidence || 1),
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
        keywords: Array.isArray(data.keywords) ? (data.keywords as string[]) : [],
        skills: Array.isArray(data.skills) ? (data.skills as string[]) : [],
        technologies: Array.isArray(data.technologies) ? (data.technologies as string[]) : [],
        companies: Array.isArray(data.companies) ? (data.companies as string[]) : [],
        projects: Array.isArray(data.projects) ? (data.projects as string[]) : [],
        related_documents: Array.isArray(data.related_documents) ? (data.related_documents as string[]) : [],
        related_projects: Array.isArray(data.related_projects) ? (data.related_projects as string[]) : [],
        related_skills: Array.isArray(data.related_skills) ? (data.related_skills as string[]) : [],
        search_boost: Number(data.search_boost || 1),
        embedding_enabled: Boolean(data.embedding_enabled),
        retrieval_priority: Number(data.retrieval_priority || 1),
        public: Boolean(data.public),
        featured: Boolean(data.featured),
        content,
        raw,
      });
    } catch (err) {
      console.error('[knowledge] parse failed:', file, err);
    }
  }

  try {
    computeIdf();
  } catch (err) {
    console.error('[knowledge] idf compute failed:', err);
  }
  indexReady = true;
}
