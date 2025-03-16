# MediaPay Architecture Overview

This document provides a high-level overview of how the Frontend, Backend, and CMS components work together in the Transitly platform.

## System Components

### 1. Frontend (React + TypeScript)
- Single page application built with React and TypeScript
- Handles user interface and interactions
- Makes API calls to backend for data

### 2. Backend (Node.js + Express)
- REST API server built with Node.js and Express
- Acts as middleware between Frontend and CMS
- Handles:
  - API routing and controllers
  - Data transformation and validation
  - Integration with Sanity CMS

### 3. Sanity CMS
- Headless CMS for content management
- Provides structured content schemas for:
  - Blog posts and articles
  - Homepage sections (Hero, Carousel, etc.)
  - Categories and tags
- Real-time content updates
- Asset management for media

## Data Flow

1. Content Creation:
   - Editors create/update content in Sanity Studio
   - Content is stored in Sanity's database
   
2. Content Delivery:
   - Frontend requests data via Backend API
   - Backend fetches content from Sanity using queries
   - Backend transforms and sends data to Frontend
   - Frontend renders content for users

## Integration Points

- Backend ↔ Sanity: Via Sanity client SDK
- Frontend ↔ Backend: Via REST API endpoints
- Real-time updates through Sanity's CDN

This architecture provides a scalable, maintainable system with clear separation of concerns between content management, business logic, and presentation layers.
