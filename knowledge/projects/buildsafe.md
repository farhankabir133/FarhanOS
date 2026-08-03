---
id: buildsafe
title: BuildSafe — Construction Safety Compliance Platform
category: projects
description: Construction safety compliance platform processing 1.2k+ safety reports with PostGIS geospatial analysis.
summary: BuildSafe is a React + Supabase platform for construction safety compliance, processing over 1,200 safety reports with PostGIS geospatial mapping.
visibility: public
priority: 6
importance: 6
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
  - enterprise
  - safety
  - supabase
  - postgis
  - react
  - geospatial
keywords:
  - BuildSafe
  - construction safety
  - safety compliance
  - PostGIS
  - Supabase
  - safety reports
  - geospatial
companies: []
projects: []
related_documents:
  - projects/overview
  - timeline/overview
related_projects:
  - safeside-predictor
  - exam-survival
related_skills:
  - React
  - PostgreSQL
  - Supabase
  - Full Stack
  - GIS
search_boost: 6
embedding_enabled: true
retrieval_priority: 6
public: true
featured: false
---

# BuildSafe — Construction Safety Compliance Platform

## Overview
BuildSafe is a construction safety compliance platform that digitizes, tracks, and maps safety incidents using PostGIS geospatial analysis.

## Problem Solved
Construction companies still use paper-based or disconnected tools for safety reporting, leading to slow response times and poor incident visibility.

## Solution
A web application where workers submit safety reports with geolocation. The platform maps incidents, tracks resolution, and surfaces safety trends by site and time.

## Architecture
- React frontend for reporting and dashboards
- Supabase for auth and database
- PostGIS for geospatial queries
- Express backend for business logic

## Tech Stack
React · Supabase · TailwindCSS · Express · PostGIS

## Features
- Safety report intake with geolocation
- PostGIS incident mapping
- Compliance trackers
- Export and audit trails

## Engineering Decisions
- Supabase for rapid auth + DB + storage
- PostGIS for spatial queries without external GIS services
- React for rich form inputs and map interactions

## Challenges
- Geofence precision and offline GPS
- Large dataset performance for incident filtering
- User adoption in field conditions

## Trade-offs
- Map-heavy UI trades off with quick incident entry speed
- Real-time updates trade off with field connectivity

## Lessons Learned
- Geospatial UX is non-trivial — zoom levels, markers, basemaps all matter
- Safety data needs clear lineage and auditability
