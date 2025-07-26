# ✅ Task Management System API

### <b>Built with Node.js, Express.js, TypeScript, Zod, Swagger, and in-memory data store (Array of Tasks) </b>

A robust, RESTful Task Management API  which allows users to create, read, update, delete, and filter tasks with support for pagination, validation, and Swagger documentation 

---

## 🚀 Tech Stack & Libraries

| Technology               | Purpose                              |
| ------------------------ | ------------------------------------ |
| **Node.js + Express.js** | Backend server framework             |
| **TypeScript**           | Strong typing and better tooling     |
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

## ⚙️ Setup & Run Locally Instructions

✅ Prerequisites

    Node.js ≥ 18.x

    npm ≥ 9.x

###  1. Clone the repository

```bash
git clone https://github.com/exorcist09/task-management-system.git
cd task-manager-system
```

###  2. Install dependencies
```
npm install
```

### 3. Run the app

```
npm run dev
Server will start on http://localhost:3000
```
<b>Note:</b> This port can change in vscode according to your setting or if it is busy, refer to the port which is shown in terminal when the above command in executed

### 4. View Swagger API Docs
```
Visit:
http://localhost:3000/docs
```


## ⚙️ API Endpoints and Example Request/Responses


| Endpoint         | Method | Description                             |
| ---------------- | ------ | --------------------------------------- |
| `/tasks`     | POST   | Create a new task                       |
| `/tasks`     | GET    | Get all tasks (with pagination, filter) |
| `/tasks/:id` | GET    | Get a task by ID                        |
| `/tasks/:id` | PUT    | Update a task                           |
| `/tasks/:id` | DELETE | Delete a task                           |
| `/tasks?page=1&limit=5&status=IN_PROGRESS` | GET | Pagination | 
---
<b>Preferrable use POSTMAN or THUNDERCLIENT for this Api Testing </b>
---
### 1. Create Task 

<b><i>POST /tasks </i></b>

Request body

```
{
  "title": "Write something",
  "description": "Complete the section",
  "status": "PENDING"
}

```

Response :
```
{
  "id": "uuid",
  "title": "Write something",
  "description": "Complete the section",
  "status": "PENDING",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

```

### 2. Get Tasks (Pagination + Filter)

```
 GET /tasks?page=1&limit=5&status=IN_PROGRESS
```

### 3. Get all Tasks

<b><i>GET /tasks?page=1&limit=5&status=IN_PROGRESS&title=read </i></b>

Response
```
{
  "page": 1,
  "limit": 5,
  "total": 1,
  "tasks": [
    {
      "id": "uuid",
      "title": "Read a book",
      "description": "Finish reading notes",
      "status": "IN_PROGRESS",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  ]
}

```

### 4. Get task By ID

<b><i>Get /tasks/:id</i></b>

Response
```
{
  "id": "uuid",
  "title": "Read a book",
  "description": "Finish reading notes",
  "status": "IN_PROGRESS",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

```

### 5.  Update task

<b><i>PUT /tasks/:id
Request body</i></b>
```
{
  "title": "Read a book",
  "description": "Read a novel",
  "status": "COMPLETED"
}

```

Response
```
{
  "id": "uuid",
  "title": "Read a book",
  "description": "Read a novel",
  "status": "COMPLETED",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

```

### Delete Task

<b><i> DELETE /tasks/:id</i></b>

Response
```
{
  "message": "Task deleted successfully"
}
```

---



### ⚙️ Query Parameters for `/tasks`

| Param    | Type   | Description                        |
| -------- | ------ | ---------------------------------- |
| `page`   | number | Page number (default: 1)           |
| `limit`  | number | Items per page (default: 10)       |
| `status` | string | Filter by task status              |
| `title`  | string | Search by title (case insensitive) |

---

## ⚙️ Code Formating
```
npx prettier --write .
npx eslint . --fix
```

<b>Note:</b>  you need to use run this prettier command if you have a Prettier Extention in your VSCode you can just use Shortcut(ctrl+Shift+I) or just click on Prettier icon on the Status Bar



## ⚙️ Features Implemented

- ✅ **CRUD operations** for task management
- ✅ **Pagination & Filtering** on GET `/tasks`
- ✅ **In-Memory data Storage** of tasks
- ✅ **Input validation** using **Zod**
- ✅ **Swagger** interactive docs
- ✅ **Proper folder structure** and clean code
- ✅ **ESLint + Prettier** for code quality


