---
id: exam-survival
title: Exam-Survival — Adaptive Exam Prep Platform
category: projects
description: Adaptive exam prep platform with spaced repetition and Groq AI, improving scores by +23%.
summary: Exam-Survival uses spaced repetition algorithms and Groq AI tutoring to provide adaptive exam preparation, delivering an average score improvement of 23%.
visibility: public
priority: 7
importance: 7
status: active
created: '2025-01-01'
updated: '2025-01-01'
owner: Farhan Kabir
version: 1.0.0
language: en
reading_time: 2 min read
difficulty: intermediate
confidence: 1
tags:
  - education
  - spaced-repetition
  - supabase
  - groq
  - pwa
  - react
  - typescript
keywords:
  - Exam-Survival
  - adaptive learning
  - spaced repetition
  - exam prep
  - AI tutoring
  - Groq AI
  - PWA
companies: []
projects: []
related_documents:
  - projects/overview
  - timeline/overview
related_projects:
  - buildsafe
  - rankflow-ai
related_skills:
  - React
  - TypeScript
  - Supabase
  - AI Integration
  - PWA
search_boost: 7
embedding_enabled: true
retrieval_priority: 7
public: true
featured: true
---

# Exam-Survival — Adaptive Exam Prep Platform

## Overview
Exam-Survival is an adaptive exam preparation platform using spaced repetition and Groq AI to improve learning outcomes.

## Problem Solved
Students rely on static notes and brute-force memorization. Exam-Survival adapts to individual knowledge gaps and provides AI-driven explanations when needed.

## Solution
A PWA that schedules flashcards using SM-2 spaced repetition, tracks mastery, and calls Groq AI to generate contextual explanations for weak topics.

## Architecture
- React + TypeScript SPA with PWA manifest
- Supabase backend for auth, storage, and subscriptions
- SM-2 algorithm for spaced repetition scheduling
- Groq API for AI-generated explanations

## Tech Stack
React · TypeScript · Supabase · Groq AI · PWA

## Features
- Spaced repetition flashcard scheduling
- AI-generated explanations for weak topics
- Progress tracking and mastery analytics
- Offline-first PWA

## Engineering Decisions
- SM-2 chosen for reliability and research backing
- Groq AI used for low-latency response generation
- PWA for offline study access

## Challenges
- Scheduling algorithm tuning for different content types
- Minimizing AI hallucination in educational content
- Offline sync consistency

## Trade-offs
- Accuracy trades off with latency in AI explanations
- Offline-first trades off with real-time sync

## Lessons Learned
- Spaced repetition is powerful but needs careful interval calibration
- AI explanations must be grounded in curriculum, not general knowledge

## Future Improvements
- Multi-subject curriculum expansion
- Collaborative study groups
- Analytics for tutors
