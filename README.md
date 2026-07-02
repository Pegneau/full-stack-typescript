## Fullstack TypeScript Application & Labs

A hands-on repository focused on advanced TypeScript, runtime data validation with Zod, and fullstack architecture. Built as part of my practical implementation of the Fullstack TypeScript, v2 course from Frontend Masters.

## Tech Stack & Concepts

TypeScript: Generics, type inference, and static typing.

Zod: Runtime validation schemas and z.infer type sync.

Architecture: Monorepo structure with a clear client/server separation.

## Structure

client/: Frontend SPA (TypeScript).

server/: Backend REST API (Node.js + TypeScript).

exercises/zod/: Practical data validation labs.

## Getting Started

1. Installation
   Bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   npm install
2. Run Zod Validation Labs
   Bash
   cd exercises/zod
   npm test zod-exercises.test
3. Run the Full Application
   You can run the VS Code Start task from the Command Palette, or run both apps in separate terminals:

Bash

# Terminal 1: Client Client

cd client
npm run dev

# Terminal 2: Server Server

cd server
npm run dev
