import { describe, it, expect, beforeAll } from 'vitest';
import { searchKnowledge } from './knowledge-loader.js';

beforeAll(() => {
  // Loader lazily indexes ./knowledge relative to cwd (repo root in vitest).
  expect(searchKnowledge('Farhan Kabir', { topK: 1 }).length).toBeGreaterThan(0);
});

describe('searchKnowledge retrieval quality', () => {
  it('ranks the exact role doc first for an employer query', () => {
    const [top] = searchKnowledge('What did Farhan do at Synthetix Solutions?', { topK: 6 });
    expect(top.id).toBe('synthetix-solutions-2024');
  });

  it('ranks the exact project doc first for a project query', () => {
    const [top] = searchKnowledge('Tell me about the multimodal emotion recognizer project', { topK: 6 });
    expect(top.id).toBe('multimodal-emotion-recognizer');
  });

  it('ranks publications first for a research query', () => {
    const [top] = searchKnowledge('What research papers has Farhan published?', { topK: 6 });
    expect(top.id).toBe('research-publications');
  });

  it('returns DIFFERENT doc sets for different questions (query-blind regression)', () => {
    const a = searchKnowledge('What did Farhan do at Synthetix Solutions?', { topK: 6 }).map((d) => d.id);
    const b = searchKnowledge('What research papers has Farhan published?', { topK: 6 }).map((d) => d.id);
    expect(a[0]).not.toBe(b[0]);
    // More than half of both sets differ — rankings are genuinely query-dependent.
    const overlap = a.filter((id) => b.includes(id)).length;
    expect(overlap).toBeLessThanOrEqual(3);
  });

  it('returns no docs for greetings/gibberish so the inline prompt is used alone', () => {
    expect(searchKnowledge('hi there', { topK: 6 })).toHaveLength(0);
    expect(searchKnowledge('zzqqxx blorptastic frobnicate', { topK: 6 })).toHaveLength(0);
  });

  it('keeps short high-signal tokens like ai/ml searchable', () => {
    const docs = searchKnowledge('AI and machine learning experience', { topK: 6 });
    expect(docs.length).toBeGreaterThan(0);
    const ids = docs.map((d) => d.id).join(' ');
    expect(ids).toMatch(/experience|career|skills|profile/);
  });

  it('surfaces certification docs for certification questions', () => {
    const ids = searchKnowledge('What certifications does Farhan hold?', { topK: 6 }).map((d) => d.id);
    expect(ids).toContain('certifications-overview');
  });

  it('respects topK', () => {
    expect(searchKnowledge('project project project skills work experience', { topK: 2 })).toHaveLength(2);
  });
});
