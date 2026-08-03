---
id: metadata-schema
title: Metadata — Schema Standards
category: metadata
description: YAML frontmatter schema standards for all knowledge base documents.
summary: Defines the YAML frontmatter schema, required fields, field types, validation rules, and consistency standards for every knowledge document.
visibility: public
priority: 10
importance: 10
status: active
created: 2025-01-01
updated: 2025-01-01
owner: Farhan Kabir
version: 1.0.0
language: en
reading_time: 2 min read
difficulty: intermediate
confidence: 1
tags:
  - metadata
  - schema
  - yaml
  - frontmatter
  - standards
  - validation
  - indexing
keywords:
  - metadata
  - schema
  - YAML
  - frontmatter
  - standards
  - validation
  - indexing
companies: []
projects: []
related_documents:
  - architecture/knowledge-graph
  - architecture/MAINTENANCE
  - skills/overview
related_projects: []
related_skills: []
search_boost: 10
embedding_enabled: true
retrieval_priority: 10
public: true
featured: false
---

# Metadata — Schema Standards

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique slug identifier |
| title | string | Human-readable document title |
| category | string | Top-level category (e.g. projects, skills) |
| description | string | Short description for rich-text cards |
| summary | string | One-sentence summary for retrieval |
| visibility | string | `public` or `private` |
| priority | number | Integer priority (higher = more important) |
| importance | number | Integer importance rating |
| status | string | `active`, `draft`, or `archived` |
| created | string | ISO 8601 date |
| updated | string | ISO 8601 date |
| owner | string | `Farhan Kabir` |
| version | string | Semantic version |
| language | string | ISO language code |
| reading_time | string | e.g. `2 min read` |
| difficulty | string | `beginner`, `intermediate`, `advanced` |
| confidence | number | 0-1 confidence in accuracy |
| tags | array | Topical tags |
| keywords | array | Search keywords and aliases |
| skills | array | Related skills |
| technologies | array | Related technologies |
| companies | array | Related companies |
| projects | array | Related project slugs |
| related_documents | array | Related document IDs |
| related_projects | array | Related project IDs |
| related_skills | array | Related skill IDs |
| search_boost | number | Multiplier for retrieval ranking |
| embedding_enabled | boolean | Whether this doc uses embeddings |
| retrieval_priority | number | Priority weight during retrieval |
| public | boolean | Visible to outside queries |
| featured | boolean | Highlighted in results |

## Validation Rules
- `confidence` must be between 0 and 1
- `public` must be explicitly `true` or `false`
- Dates must be ISO 8601 (`YYYY-MM-DD` or full ISO datetime)
- All arrays must be clean (no empty strings)
- `id` must be unique across all files
- `tags` and `keywords` must be lowercase
