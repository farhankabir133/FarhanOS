---
id: architecture-knowledge-graph
title: Architecture — Knowledge Graph & Relationship Strategy
category: architecture
description: Knowledge graph design, relationship strategy, and retrieval optimization for the RAG system.
summary: Defines the knowledge graph schema, entity relationships, and retrieval optimization strategy enabling relationship-based, metadata-filtered, and hybrid search.
visibility: public
priority: 10
importance: 10
status: active
created: 2025-01-01
updated: 2025-01-01
owner: Farhan Kabir
version: 1.0.0
language: en
reading_time: 3 min read
difficulty: advanced
confidence: 1
tags:
  - architecture
  - knowledge-graph
  - rag
  - relationships
  - retrieval
  - search
  - metadata
  - hybrid-search
  - indexing
keywords:
  - knowledge graph
  - RAG
  - entity relationships
  - retrieval optimization
  - hybrid search
  - metadata filtering
  - semantic search
  - TF-IDF
  - BM25
companies: []
projects: []
related_documents:
  - skills/overview
  - technologies/overview
  - resume/overview
  - faq/technical
related_projects: []
related_skills:
  - NLP
  - Python
  - Research
search_boost: 10
embedding_enabled: true
retrieval_priority: 10
public: true
featured: true
---

# Architecture — Knowledge Graph & Relationship Strategy

## Entity Types
- **Profile** — Personal identity and overview
- **Experience** — Roles, companies, timelines
- **Project** — Products, research systems, experiments
- **Research** — Publications, papers, methodologies
- **Skill** — Technical and soft skills with levels
- **Technology** — Tools, frameworks, and platforms
- **Company** — Employers and organizations
- **Certification** — Professional credentials
- **FAQ** — Question-answer pairs
- **Contact** — Communication channels
- **Resume** — Consolidated career documents
- **Timeline** — Chronological milestones

## Relationships

### Projects → Technologies
Every project document lists its `technologies`. This enables retrieval like "What projects use FastAPI?"

### Skills → Projects
Every skill document lists `projects` where it was used. This enables retrieval like "Show React projects."

### Experience → Projects
Every role document lists `projects` worked on during that period. This enables timeline-based retrieval.

### Research → Projects / Skills
Publications link to projects and skills via `related_projects` and `related_skills`. This enables "What research used BERT?"

### Documents → Related Documents
Every document has `related_documents` for direct relationship retrieval. This enables context expansion.

## Retrieval Strategy

### Hybrid Search
- **Keyword Search:** TF-IDF / BM25 on document content and metadata
- **Semantic Search:** Embedding-based similarity (future-ready)
- **Metadata Filtering:** Category, tags, difficulty, confidence, public/featured
- **Tag Filtering:** Exact match on tags, keywords, skills, technologies
- **Relationship Retrieval:** `getRelated()` traverses the knowledge graph
- **Time-Based Retrieval:** Timeline docs enable yearly queries
- **Priority Retrieval:** Weighted by `search_boost`, `retrieval_priority`, and `confidence`
- **Confidence Scoring:** Documents have explicit confidence scores (0-1)

### Index Structure
```
docs: KnowledgeDoc[] (in-memory)
  - id, title, category, tags, keywords, skills, technologies
  - related_documents[], related_projects[], related_skills[]
  - search_boost, retrieval_priority, confidence
  - content, raw

idf: Record<string, number> (term frequency weights)
```

### Retrieval Flow
1. Query arrives
2. Extract query keywords
3. Filter by metadata (category, tags, public)
4. Score candidates by TF-IDF × metadata weight
5. Return top-K documents with highest confidence and boost
6. Optionally expand with related documents

## Scalability
- In-memory index supports 1000+ documents comfortably
- Metadata-first filtering before scoring reduces latency
- Relationship graph enables multi-hop retrieval without reloading
- Future: swap in-memory index for vector DB (Pinecone/Weaviate) without changing schema
