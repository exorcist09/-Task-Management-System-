# ✅ Task Management System API

### <b>Built with Node.js, Express.js, TypeScript, Zod, Swagger, and SQLite (via Prisma ORM)</b>

A robust, RESTful Task Management API  which allows users to create, read, update, delete, and filter tasks with support for pagination, validation, and OpenAPI (Swagger) documentation 

---

## 🚀 Tech Stack & Libraries

| Technology               | Purpose                              |
| ------------------------ | ------------------------------------ |
| **Node.js + Express.js** | Backend server framework             |
| **TypeScript**           | Strong typing and better tooling     |
| **SQLite**                | Lightweight database for task storage |
| **Prisma ORM**           | Simplified and type-safe DB access   |
| **Zod**                  | Schema validation for request bodies |
| **Swagger UI**           | Interactive API documentation        |
| **uuid**                 | Unique IDs for tasks                 |

---

## 🗂️ Project Structure

```
.
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.ts
│   ├── controllers
│   │   └── task.controller.ts
│   ├── docs
│   │   └── swagger.ts
│   ├── middlewares
│   │   └── validation.ts
│   ├── models
│   │   └── task.model.ts
│   ├── routes
│   │   └── task.routes.ts
│   ├── server.ts
│   └── utils
│       └── store.ts
└── tsconfig.json
```


---

## ⚙️ Setup & Run Instructions

###  1. Clone the repository

```bash
git clone https://github.com/exorcist09/task-manager-api
cd task-manager-api
```


###  2. Install dependencies
```
npm install
```

### 3. Setup Environment
```
Create a .env file in the root with:
DATABASE_URL="mysql://username:password@localhost:3306/taskdb"
```

### 4. Initialize Prisma and Database
```
npx prisma migrate dev --name init
npx prisma generate
```

This will create the required tasks table in your MySQL database.

### 5. Run the app

```
npm run dev
Server will start on http://localhost:3000
```

### 6. View Swagger API Docs

```
Visit:
http://localhost:3000/api-docs
```


## ⚙️ API Endpoints

All routes are prefixed under `/api`.

| Endpoint         | Method | Description                             |
| ---------------- | ------ | --------------------------------------- |
| `/tasks`     | POST   | Create a new task                       |
| `/tasks`     | GET    | Get all tasks (with pagination, filter) |
| `/tasks/:id` | GET    | Get a task by ID                        |
| `/tasks/:id` | PUT    | Update a task                           |
| `/tasks/:id` | DELETE | Delete a task                           |
| `/tasks?page=1&limit=5&status=IN_PROGRESS` | GET | Pagination | 


---

## ⚙️ Features Implemented

- ✅ **CRUD operations** for task management
- ✅ **MySQL database** (via Prisma)
- ✅ **Pagination & Filtering** on GET `/tasks`
- ✅ **Input validation** using **Zod**
- ✅ **Swagger/OpenAPI** interactive docs
- ✅ **Proper folder structure** and clean code
- ✅ **ESLint + Prettier** for code quality

---

## ⚙️ Task Object Structure

```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "status": "PENDING | IN_PROGRESS | COMPLETED",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## ⚙️ Query Parameters for `/tasks`

| Param    | Type   | Description                        |
| -------- | ------ | ---------------------------------- |
| `page`   | number | Page number (default: 1)           |
| `limit`  | number | Items per page (default: 10)       |
| `status` | string | Filter by task status              |
| `title`  | string | Search by title (case insensitive) |

---

## ⚙️ Example API Usage

### Create Task:

```
http
POST /api/tasks
Content-Type: application/json

{
  "title": "Write README",
  "description": "Complete the documentation",
  "status": "PENDING"
}
```


## Get Tasks (Pagination + Filter):
```
 GET /api/tasks?page=1&limit=5&status=IN_PROGRESS
```


## 📦 Prisma Schema (Reference)
```
model Task {
  id          String   @id @default(uuid())
  title       String
  description String
  status      Status
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum Status {
  PENDING
  IN_PROGRESS
  COMPLETED
}
```

## ⚙️ Troubleshooting

```
    ❗ Error: Can't connect to database
    Make sure MySQL is running and credentials are correct in .env

    ❗ Swagger page not loading?
    Check if server is running on localhost:3000
```
