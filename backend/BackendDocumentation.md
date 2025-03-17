# Backend Documentation

## Overview

The backend is built using Node.js and Express and Sanity CMS Integration. It provides a RESTful API for the frontend to interact with

### Server Configuration (`server.ts`)

The main server configuration file that sets up the Express application with necessary middleware and routes.

#### Port Configuration
- Server runs on port 5005

#### Middleware Setup
- Express JSON parser enabled for parsing request bodies
- CORS enabled with origin set to `https://localhost:5173` 
- Morgan logger configured in "dev" mode for request logging

#### Routes
- **GET /** - Basic health check endpoint that returns "Hello, Express with TypeScript!"
- **/ (Root Router)** - Mounted with homeRouter for handling home-related routes
- **`/posts`** - Mounted with postRouter for handling post-related operations

#### Server Initialization
The server starts listening on the configured port and logs a startup message with the server URL.

### Route Handlers

#### Post Router (`post.ts`)
The post router handles all article-related routes and operations:

- **GET /posts** - Fetches all articles using the `getArticles` handler from the CMS integration
- **GET /posts/:id** - Retrieves a specific article by ID using the `getArticle` handler
- All post routes are mounted under the `/posts` base path

#### Home Router (`index.ts`) 
The home router manages home page related routes:

- **GET /pages/home** - Retrieves home page content using the `getHomePage` handler from the CMS integration
- All home routes are mounted at the root level

### CMS Integration

The CMS integration is handled through several files that manage data fetching from Sanity CMS:

#### CMS Index (`cms/index.ts`)
Central export file that consolidates and re-exports all CMS-related handlers:
- Exports `getHomePage` from home.ts
- Exports `getArticle` and `getArticles` from article.ts
- Provides a clean interface for importing CMS handlers

#### CMS Handlers (`cms/home.ts` & `cms/article.ts`)
The CMS handlers manage data fetching from Sanity CMS:

- **Home Page Handler**
  - Fetches and returns structured home page content including hero section, carousel, articles, and popular content
  - Handles all necessary image and reference resolutions

- **Article Handlers** 
  - `getArticles`: Retrieves list of all articles
  - `getArticle`: Fetches single article by ID with full details

#### Sanity Client Configuration (`sanity/index.ts`)
Configures and exports the Sanity client instance:

- **Client Configuration**
  - Creates Sanity client using @sanity/client package
  - Loads environment variables via dotenv
  - Sets up client with:
    - Project ID from environment variables
    - Production dataset
    - CDN disabled for real-time data
    - API version specified for stability
  - Exports configured client for use across CMS handlers
  - Provides centralized Sanity connection management
