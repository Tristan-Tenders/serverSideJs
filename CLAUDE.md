# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash

npm install       # install deps
npm run dev       # start with nodemon (hot reload) on http://localhost:3000
node index.js     # run without nodemon

```

No test runner configured.

## Architecture

Express REST API, CommonJS, in-memory data (loaded from `students.json` at startup — changes do NOT persist across restarts).

Request flow: `index.js` → `routes/students.js` → `controllers/studentsController.js` → `services/studentsService.js`

- **routes**: wire HTTP verbs/paths to controller functions
- **controllers**: parse req, validate input, send res
- **services**: mutate the in-memory `students` array; all business logic lives here
- **middleware/**: currently empty — add middleware here and register in `index.js`

Student schema: `{ id: number, name, email, major, gpa }`

IDs are assigned as `students.length + 1` — no gap handling, no persistence.