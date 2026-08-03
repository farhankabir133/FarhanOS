---
id: architecture-maintenance
title: Architecture — Knowledge Base Maintenance Guide
category: architecture
description: Maintenance guidelines for adding, updating, and re-indexing knowledge base documents.
summary: Step-by-step guidelines for adding new projects, updating experience, updating skills, re-indexing knowledge, and maintaining metadata consistency across the RAG knowledge base.
visibility: public
priority: 8
importance: 8
status: active
created: 2025-01-01
updated: 2025-01-01
owner: Farhan Kabir
version: 1.0.0
language: en
reading_time: 3 min read
difficulty: intermediate
confidence: 1
tags:
  - architecture
  - maintenance
  - guide
  - how-to
  - indexing
  - rag
  - knowledge-base
keywords:
  - maintenance
  - how-to
  - update
  - add project
  - add experience
  - re-index
  - knowledge base
  - RAG
companies: []
projects: []
related_documents:
  - architecture/knowledge-graph
  - metadata/schema
  - skills/overview
related_projects: []
related_skills: []
search_boost: 8
embedding_enabled: true
retrieval_priority: 8
public: true
featured: false
---

# Architecture — Knowledge Base Maintenance Guide

## How to Add a New Project
1. Create `knowledge/projects/<slug>.md`
2. Include all required YAML frontmatter fields
3. Fill out every section: Overview, Problem, Solution, Architecture, Tech Stack, Features, Engineering Decisions, Challenges, Trade-offs, Lessons Learned, Future Improvements, GitHub, Live Demo
4. Add `related_projects` and `related_skills`
5. Update `resume/projects.md` and `timeline/overview.md`
6. Rebuild and redeploy to Vercel (triggers cold-start index reload)

## How to Update Experience
1. Edit or create `knowledge/experience/roles/<role-slug>.md`
2. Update responsibilities, achievements, and technologies
3. Link to `related_projects` and `related_skills`
4. Update `resume/experience.md` and `timeline/overview.md`

## How to Add Research
1. Create `knowledge/research/papers/<slug>.md`
2. Include Objective, Methods, Dataset, Pipeline, Key Results, Publication Details, Citation
3. Link from `research/publications.md`
4. Add `related_projects` showing which products were influenced

## How to Update Skills
1. Edit individual skill files in `knowledge/skills/`
2. Update the table of skills, levels, and project mappings
3. Keep `related_projects` current
4. Update `skills/overview.md` if a new domain is added

## How to Re-index Knowledge
- The RAG index loads at Vercel cold start
- Any change to markdown files requires a new Vercel deployment to rebuild
- For local testing, restart the dev server

## How to Maintain Metadata
- Every document must have valid YAML frontmatter
- Required fields: id, title, category, summary, visibility, priority, tags, keywords, skills, technologies, related_documents, related_projects, related_skills, confidence, public, featured
- Dates must be ISO 8601 (`YYYY-MM-DD`)
- Boosts and priorities must be positive numbers

## How to Update Relationships
- When two projects share a technology, update both `related_projects` fields
- When a skill is used in a new project, update the skill doc `related_projects` and the project doc `related_skills`
- Keep the relationship graph consistent to ensure quality retrieval
