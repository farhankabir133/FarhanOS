---
id: paper-adversarial-detection
title: Did the Prompt Break the Model? — Adversarial LLM Detection
category: research
description: IEEE ICCIT 2025 paper on perplexity-based detection of adversarial prompt injection attacks on LLMs.
summary: Proposes a perplexity-based framework to detect adversarial prompt injection attacks on LLMs, published at IEEE ICCIT 2025.
visibility: public
priority: 9
importance: 9
status: active
created: '2025-01-01'
updated: '2025-01-01'
owner: Farhan Kabir
version: 1.0.0
language: en
reading_time: 3 min read
difficulty: advanced
confidence: 1
tags:
  - research
  - llm-safety
  - adversarial
  - perplexity
  - ieee-iccit
  - nlp
  - security
keywords:
  - adversarial prompt injection
  - perplexity detection
  - LLM security
  - prompt injection attack
  - defensive AI
companies:
  - Cognitive Diagnostics Lab
projects: []
related_documents:
  - research/publications
  - timeline/overview
related_projects:
  - codelab-ai-genkit-rag
  - omniva-ai
related_skills:
  - NLP
  - PyTorch
  - LLMs
  - Research
search_boost: 9
embedding_enabled: true
retrieval_priority: 9
public: true
featured: true
---

# Did the Prompt Break the Model? — Adversarial LLM Detection

## Objective
Detect adversarial prompt injection attacks on large language models using perplexity metrics.

## Methods / Innovation
- Proposes a perplexity-based detection framework
- Analyzes token-level likelihood distributions under attack
- Flags anomalous prompt patterns that deviate from benign distributions

## Dataset
- Curated adversarial and benign prompt sets
- Multiple LLM outputs for cross-validation

## Pipeline
1. Input prompt ingestion
2. Tokenization and perplexity scoring
3. Anomaly detection via statistical thresholding
4. Attack classification and reporting

## Key Results
- Framework successfully identifies prompt injection attempts
- Low false-positive rate on benign prompts
- Generalizes across multiple LLM architectures

## Publication Details
- **Title:** Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs
- **Year:** 2025
- **Venue:** IEEE ICCIT
- **Authors:** Farhan Kabir et al.

## Citation
Farhan Kabir, et al. (2025). "Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs." IEEE ICCIT.
