---
id: buddy-script
title: Buddy-Script — AI Coding Companion in Browser
category: projects
description: AI coding companion in browser with Monaco Editor and WebSocket, achieving 89.4% suggestion accuracy.
summary: Buddy-Script is an in-browser AI coding companion integrating Monaco Editor with Groq AI via WebSocket, delivering intelligent suggestions with 89.4% accuracy.
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
  - developer-tools
  - ai-coding
  - monaco
  - groq
  - websocket
  - react
  - nodejs
keywords:
  - Buddy-Script
  - AI coding companion
  - Monaco Editor
  - WebSocket
  - code suggestions
  - browser IDE
companies: []
projects: []
related_documents:
  - projects/overview
  - timeline/overview
related_projects:
  - autospark
  - farhanos
related_skills:
  - React
  - Node.js
  - WebSocket
  - AI Integration
  - Developer Tools
search_boost: 7
embedding_enabled: true
retrieval_priority: 7
public: true
featured: true
---

# Buddy-Script — AI Coding Companion in Browser

## Overview
Buddy-Script is an AI coding companion running entirely in the browser, featuring Monaco Editor with real-time Groq AI suggestions via WebSocket.

## Problem Solved
Developers switching between IDE and browser lose context. Buddy-Script brings AI-assisted coding directly to the browser without server-side code execution.

## Solution
A browser-based code editor using Monaco Editor, paired with a Node.js WebSocket server that streams Groq AI suggestions in real time.

## Architecture
- Monaco Editor for syntax-highlighted editing
- React for layout and state
- Node.js WebSocket server for streaming
- Groq API for low-latency LLM inference

## Tech Stack
React · Groq API · Monaco Editor · WebSocket · Node.js

## Features
- Real-time AI code suggestions
- Syntax highlighting for multiple languages
- Streaming response via WebSocket
- Dark/light theme

## Engineering Decisions
- Monaco Editor for advanced editing features
- WebSocket streaming for perceived low latency
- Groq AI for its fast inference on code generation

## Challenges
- Maintaining connection reliability over unreliable networks
- Debouncing suggestions without breaking flow
- Parsing partial code structures for context

## Trade-offs
- Streaming trades off with latency guarantees
- In-browser editor trades off with plugin ecosystem

## Lessons Learned
- Streaming suggestions feel faster even when token counts are similar
- Monaco Editor is heavy; lazy-load carefully
