---
id: paper-depression-detection
title: Depression Detection from Social Media Textual Data — IEEE ICCIT 2023
category: research
description: RoBERTa models mapping negative pronouns and vocabulary shifts for depression detection with F1: 0.914.
summary: Proposes a RoBERTa-based depression detection model trained on clinical Reddit data, achieving F1: 0.914, Sensitivity: 0.893, and Specificity: 0.942.
visibility: public
priority: 10
importance: 10
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
  - depression
  - mental-health
  - social-media
  - roberta
  - ieee-iccit
  - clinical-nlp
keywords:
  - depression detection
  - social media
  - RoBERTa
  - Reddit
  - clinical NLP
  - F1 0.914
  - Sensitivity 0.893
  - Specificity 0.942
companies:
  - Mental Health Tech
projects:
  - Multimodal Emotion Recognizer
related_documents:
  - research/publications
  - projects/multimodal-emotion-recognizer
related_projects:
  - multimodal-emotion-recognizer
  - exam-survival
related_skills:
  - NLP
  - Research
  - PyTorch
  - BERT
  - Python
search_boost: 10
embedding_enabled: true
retrieval_priority: 10
public: true
featured: true
---

# Depression Detection from Social Media Textual Data — IEEE ICCIT 2023

## Objective
Detect depression from social media text using transformer models to support early mental health screening.

## Methods / Innovation
- RoBERTa fine-tuned on clinical Reddit depression datasets
- Negative pronoun and vocabulary shift analysis
- Comparison with traditional ML baselines

## Dataset
- Curated clinical Reddit depression and control datasets
- Labeled posts from depression-focused subreddits

## Pipeline
1. Reddit post collection and cleaning
2. RoBERTa fine-tuning with class balancing
3. Evaluation with precision, recall, F1
4. Generalization testing on held-out communities

## Key Results
- **F1:** 0.914
- **Sensitivity:** 0.893
- **Specificity:** 0.942
- Outperforms traditional baselines and general-purpose LLMs

## Publication Details
- **Title:** Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques
- **Year:** 2023
- **Venue:** IEEE ICCIT
- **Authors:** Farhan Kabir et al.

## Citation
Farhan Kabir, et al. (2023). "Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques." IEEE ICCIT.
