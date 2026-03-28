# serverSideJs

Node.js REST API using Express. Serves student data — built as a lab project to practice CRUD, middleware, and structuring a backend properly.

## Setup

```bash
npm install
npm run dev
```

Runs on http://localhost:3000

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/students | all students |
| GET | /api/students/:id | one student |
| POST | /api/students | create a student |
| PUT | /api/students/:id | update a student |
| DELETE | /api/students/:id | delete a student |

## Structure

```
├── index.js
├── students.json
├── routes/students.js
├── controllers/studentsController.js
└── services/studentsService.js
```

Uses CommonJS, cors, express.json(), and splits logic into routes, controllers, and services.
