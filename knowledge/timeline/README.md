---
id: timeline-readme
title: Timeline — Usage Guide
category: architecture
description: Guide for using and updating the timeline knowledge base.
summary: Explains how the timeline index relates experience, projects, and research milestones chronologically.
visibility: public
priority: 7
importance: 7
status: active
created: 2025-01-01
updated: 2025-01-01
owner: Farhan Kabir
version: 1.0.0
language: en
reading_time: 1 min read
difficulty: beginner
confidence: 1
tags:
  - timeline
  - guide
  - architecture
  - maintenance
keywords:
  - timeline
  - guide
  - how-to
  - update
  - milestones
companies: []
projects: []
related_documents:
  - timeline/overview
  - experience/overview
  - projects/overview
  - research/publications
related_projects: []
related_skills: []
search_boost: 7
embedding_enabled: true
retrieval_priority: 7
public: true
featured: false
---

# Timeline — Usage Guide

## How to Update
When adding a new project or experience:
1. Add the project/experience document with correct `created` and `updated` dates
2. Update `timeline/overview.md` with the new milestone
3. Set `related_documents`, `related_projects`, and `related_skills` on the new document
4. Rebuild the index by restarting the Vercel function (index loads at cold start)

## How to Query
The RAG system does not have explicit time-based retrieval yet. For year-specific queries, the retriever uses keyword matching on timeline docs and related documents.

## Future Improvements
- Add explicit `start_year` and `end_year` metadata fields
- Implement date-based filtering in `searchKnowledge()`
- Add chronological sorting for timeline results
