---
id: multimodal-emotion-recognizer
title: Multimodal Emotion Recognizer — Spectrogram Bimodal Fusion
category: projects
description: Spectrogram bimodal fusion system aligning pitch with BERT embeddings for emotion recognition.
summary: Multimodal emotion recognition fusing acoustic pitch features with BERT text embeddings to achieve 92.3% accuracy across five emotional states.
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
  - emotion-detection
  - bert
  - wav2vec
  - multimodal
  - python
  - fastapi
  - react
keywords:
  - Multimodal Emotion Recognizer
  - spectrogram
  - bimodal fusion
  - BERT embeddings
  - pitch features
  - emotion detection
  - Wav2Vec
  - 92.3% accuracy
companies:
  - Mental Health Tech
projects: []
related_documents:
  - projects/overview
  - research/publications
  - research/papers/emotion-detection
related_projects:
  - codelab-ai-genkit-rag
  - exam-survival
related_skills:
  - NLP
  - Python
  - PyTorch
  - BERT
  - Computer Vision
  - Research
search_boost: 9
embedding_enabled: true
retrieval_priority: 9
public: true
featured: true
---

# Multimodal Emotion Recognizer — Spectrogram Bimodal Fusion

## Overview
A spectrogram-based bimodal fusion system aligning pitch with BERT embeddings to recognize emotions from text and speech.

## Problem Solved
Unimodal emotion detection is brittle. Real emotion is expressed through text AND vocal signals. This system fuses both modalities for clinically calibrated emotion recognition.

## Solution
Acoustic features are extracted as pitch spectrograms and fused with BERT text embeddings using custom attention layers. The multimodal classifier maps inputs to five clinical emotional states.

## Architecture
- Python preprocessing pipeline (librosa for spectrograms)
- BERT + Wav2Vec 2.0 feature extraction
- Custom bimodal fusion layer
- FastAPI serving layer
- React frontend for inference UI

## Tech Stack
Python · BERT · Wav2Vec 2.0 · React · FastAPI · librosa · PyTorch

## Features
- 92.3% accuracy on 5-class emotion recognition
- Real-time inference via FastAPI
- Frontend recording and visualization
- Clinical calibration for NLP applications

## Engineering Decisions
- BERT chosen for text due to strong contextual representations
- Wav2Vec 2.0 for speech embeddings without manual feature engineering
- Custom attention layer for cross-modal alignment
- FastAPI for async inference and automatic docs

## Challenges
- Aligning modalities with different temporal granularities
- Class imbalance in emotional datasets
- Real-time inference latency with large transformer models

## Trade-offs
- Model accuracy trades off with inference speed
- Multimodal setup trades off with architectural simplicity

## Lessons Learned
- Bimodal fusion with attention beats late fusion for most emotion datasets
- Spectrogram visualization helps clinicians trust the model
