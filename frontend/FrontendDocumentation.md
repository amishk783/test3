# Frontend Documentation

This documentation outlines the structure of the frontend codebase, explaining the role of each file and directory, as well as the flow of the application.

---

## Overview

The application is built using modern web technologies (React, TypeScript, Vite) and is containerized using Docker. The following sections break down key directories and configuration files and describe how they tie into the overall code flow.

---

## Root-Level Files and Configuration

- **Dockerfile**  
    Contains instructions to build a Docker image for deployment.

- **eslint.config.js**  
    Configures linting rules to enforce code quality and style.

- **index.html**  
    The main HTML document that bootstraps the application. It includes the root DOM element where React mounts the app.

- **nginx.conf**  
    Configuration for serving the application using Nginx, likely for production builds.

- **vite.config.ts**  
    Configuration file for Vite, dictating how code is bundled, optimized, and served during development and production.

---

## Public Directory

- **Public**  
    Contains static assets that are directly served. For example:
    - **logo.png**: Likely used across the application as a brand logo.

---

## Source Directory (src/)

The `src` directory is where the majority of the application’s logic resides.

- **main.tsx**  
    The entry point for the React application. It renders `<App />` into the DOM and typically integrates with routing and state management setups. Here it is declared that, the Signup and Login are separates routes and all other routes comes under one single Layout.

- **Layout.tsx**  
    Provides layout components shared across pages, such as headers, footers, and navigation.

- **App.tsx & App.css**  
    The main application component and its styling. `App.tsx` likely acts as a container for the primary application logic. 

- **constant.ts**  
    Defines application wide constants used across different modules. (Redundant soon)

---

## Additional Directories Under src/

- **assets/**  
    Contains images and other static resources (e.g., avatars, icons, and overlay graphics) that the application uses.

- **components/**  
    Houses reusable UI components. These are the building blocks for pages and layouts (e.g., buttons, form controls).  The folder contains well-structured and modular pieces that can be easily imported into different parts of the application like : Article Cards, the entire Carousal, Layout components like Header and Footer, Transaction Table, Subscription Popup, Payment Method Poup.

- **hooks/**  
    Contains custom React hooks to encapsulate reusable stateful logic that can be shared across components. It contains `useFetch` custom hook, which is a parent level hook for all the API request we are doing over the platform.

- **lib/**  
    Utility functions (from Axios and Tailwind) or libraries that support business logic, API calls, or other shared functionalities.

- **pages/**  
    Contains page-specific components, representing distinct views in the application (for example, home, about, contact pages). All the pages are stored here.

- **type/**  
    Contains TypeScript type definitions to enforce strong typing across the application.

---

## Code Flow Overview

1. **Entry Point & Initialization**  
     - The application starts in `src/main.tsx`, which mounts the `<App />` component into the DOM.
     - Global styles and type definitions are loaded at startup.

2. **Core Application Structure**  
     - `<App />` in `App.tsx` orchestrates the main flow of the application. This component might include layout components (`Layout.tsx`) and integrates with any routing libraries to navigate between pages.

3. **Component Reusability**  
     - Reusable components in the `components/` folder are used throughout various pages to maintain a consistent UI.
     - Custom hooks in `hooks/` are leveraged to abstract complex stateful logic or API interactions.

4. **Page-Level Logic**  
     - Files in the `pages/` directory represent full-page views. Their composition with layout components determines the final rendered view for users.

5. **Utilizing External Libraries**  
     - All external dependencies and project configuration are defined in configuration files like `package.json`, `vite.config.ts`, and `tsconfig.json`.

6. **Static Asset Management**  
     - Assets like images or icons within the `assets/` folder are referenced in components to enrich the UI.

7. **Component Development and Testing**  
     - Storybook configuration in `.storybook/` and related files in `stories/` assist in developing, previewing, and testing individual components in isolation.

---

## Summary

This documentation provides a detailed overview of the frontend codebase structure and the intended purpose behind each major file and directory. It maps out the logical flow of the application from the entry point to component rendering, ensuring that the team can easily locate and understand each part of the code.
