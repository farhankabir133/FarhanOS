---
id: faq-architecture
title: FAQ — Architecture & System Design
category: faq
description: Frequently asked questions about Farhan Kabir's architecture decisions, system design, and engineering practices.
summary: Architecture and system design FAQs covering RAG, LLM observability, async queues, frontend architecture, and infrastructure choices.
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
  - faq
  - architecture
  - system-design
  - rag
  - llm-observability
  - backend
  - frontend
  - infrastructure
keywords:
  - architecture
  - system design
  - RAG
  - LLM observability
  - async queues
  - microservices
  - FastAPI
  - React
  - Docker
  - Vercel
companies: []
projects: []
related_documents:
  - technologies/overview
  - architecture/knowledge-graph
  - projects/overview
related_projects: []
related_skills:
  - NLP
  - React
  - Node.js
  - Python
  - FastAPI
search_boost: 8
embedding_enabled: true
retrieval_priority: 8
public: true
featured: true
---

# FAQ — Architecture & System Design

## Q: What architecture patterns does he prefer?
A: Component-based React architecture, async job queues (BullMQ/Redis), FastAPI microservices, and RAG pipelines with clear separation between ingestion, indexing, and retrieval.

## Q: How does he design RAG systems?
A: Hybrid retrieval combining BM25 keyword search with semantic vector search. He prioritizes chunking quality over model complexity and adds metadata filtering for precision.

## Q: What is his approach to API design?
A: REST where simplicity suffices, GraphQL where clients need flexible data fetching, and WebSocket for real-time streaming (Buddy-Script).

## Q: How does he handle frontend architecture?
A: Feature-based folder structure, shared component libraries, and composition over inheritance. He avoids heavy frameworks unless the app demands them.

## Q: What is his experience with microservices?
A: He builds bounded services (e.g., FastAPI for ML, Express for web, Go for telemetry) and keeps them deployable via Docker. He avoids unnecessary service sprawl.

## Q: How does he approach database design?
A: Relational schemas for structured data, vector stores for RAG, and caching layers for performance. He values clear indexing and query optimization.

## Q: What is his approach to scalability?
A: Design for horizontal scaling from the start: stateless services, async queues, and externalized state (Redis/Postgres). He avoids premature optimization.

## Q: How does he handle state management?
A: Built-in React state and Context for most apps. Custom state machines for complex sequenced animations like the FarhanOS boot loader.

## Q: What is his approach to security?
A: Standard web security practices: input validation, authentication via Supabase/Firebase, HTTPS, and least-privilege deployments. He is not a security specialist but follows best practices.

## Q: How does he approach testing?
A: Unit and integration testing with Jest/Vitest for frontend, pytest for Python, and manual testing via API contracts and observability dashboards for ML components.

## Q: What is his CI/CD strategy?
A: GitHub Actions + Vercel for frontends, Docker for backend services, and automated builds on merge. He values fast feedback loops.

## Q: How does he handle monitoring?
A: Prometheus + Grafana for metrics, custom dashboards for ML quality, and error tracking through logs. Observability is designed alongside the system, not retrofitted.

## Q: What is his approach to error handling?
A: Graceful degradation, clear error messages for users, and structured logging for developers. He avoids silent failures.

## Q: Does he use feature flags?
A: Not formally documented. He prefers branching and deployment-time toggles for large features.

## Q: How does he approach API versioning?
A: URL versioning (e.g., /v1/) for breaking changes and header-based versioning for minor iterations.

## Q: What is his approach to caching?
A: Redis for API response caching, in-memory caches for hot data, and CDN-level caching through Vercel for static assets.

## Q: How does he handle file uploads?
A: Supabase Storage for web apps, Firebase Storage for games, and Express multer for multipart forms. He validates size, type, and content before persisting.

## Q: What is his approach to authentication?
A: Supabase Auth for rapid development, Firebase Auth for games, and JWT for custom APIs. He avoids building auth from scratch unless necessary.

## Q: How does he approach internationalization?
A: Not a primary focus. He builds interfaces with i18n-ready string architecture but does not ship multi-language support by default.

## Q: What is his approach to accessibility?
A: Semantic HTML, ARIA labels, keyboard navigation, and color contrast checks. He considers it part of professional quality.
