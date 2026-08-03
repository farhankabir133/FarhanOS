---
id: farhanos
title: FarhanOS — Interactive Portfolio OS
category: projects
description: Interactive portfolio OS with terminal boot loader and floating AI assistant.
summary: FarhanOS is an immersive personal portfolio that mimics a desktop operating system, featuring a terminal boot loader, floating AI assistant, and interactive 3D environment.
visibility: public
priority: 10
importance: 10
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
  - portfolio
  - terminal
  - 3d
  - threejs
  - ai-assistant
  - interactive
  - os
  - creative
keywords:
  - FarhanOS
  - portfolio OS
  - terminal boot
  - floating AI
  - Three.js
  - interactive portfolio
  - OS metaphor
companies: []
projects:
  - the-ink-home
related_documents:
  - projects/overview
  - timeline/overview
related_projects:
  - the-ink-home
  - rankflow-ai
  - buddy-script
related_skills:
  - React
  - Three.js
  - AI Integration
  - Frontend
  - Creative Coding
search_boost: 10
embedding_enabled: true
retrieval_priority: 10
public: true
featured: true
---

# FarhanOS — Interactive Portfolio OS

## Overview
FarhanOS is an immersive personal portfolio that mimics a desktop operating system, featuring a terminal boot loader, floating AI assistant, and interactive 3D environment.

## Problem Solved
Traditional portfolios are static and forgettable. FarhanOS transforms a portfolio into an interactive, memorable experience that demonstrates engineering and design capability.

## Solution
A web-based OS experience:
- Terminal boot loader with CRT effects
- Floating, contextual AI assistant (Groq API)
- 3D environment with Three.js
- Interactive apps and widgets

## Architecture
- React SPA with component-based app architecture
- Custom terminal boot sequence with state machine
- Three.js scene with wormhole and WebGL effects
- Framer Motion for UI transitions
- Express API for Medium RSS, GitHub repos, and AI chat

## Tech Stack
React · TailwindCSS v4 · Framer Motion · Three.js · Express · Groq API

## Features
- Boot loader with typing animation and CRT effects
- Floating AI assistant with RAG knowledge base
- 3D scenes (wormhole, particles)
- Desktop icons and app windows
- GitHub and Medium feeds

## Engineering Decisions
- Custom boot sequence instead of animation library for maximum control
- Floating assistant as persistent overlay to simulate OS assistant
- Three.js for immersive 3D background without page reloads

## Challenges
- Managing z-index and pointer events across desktop, windows, and assistant
- Boot performance (LCP optimization)
- State management across OS metaphor

## Trade-offs
- Rich OS metaphor trades off with some accessibility comprehensibility
- 3D effects trade off with performance on low-end devices

## Lessons Learned
- Boot loaders are great for building anticipation, not just aesthetics
- Floating assistants are more useful when they can see UI context
- Custom state machines beat libraries for complex sequenced animations

## Future Improvements
- More desktop apps (terminal, file explorer, settings)
- App store for Farhan-created tools
- Multiplayer desktop sharing
