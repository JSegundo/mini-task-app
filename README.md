# mini-task-app

A simple task management application built with React (frontend) and Express/TypeScript (backend).

## Features

- ✅ Add new tasks
- ✅ View list of tasks
- ✅ Delete tasks
- ✅ Real-time updates

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## Project Structure

```
mini-task-app/
├── backend/            # Node.js/Express/TypeScript server
│   ├── controller/    # Task controller logic
│   ├── data/          # In-memory storage
│   └── server.ts      # Express server
├── frontend/          # React + Vite app
│   └── src/
│       ├── services/  # API service layer
│       └── App.tsx    # Main component
└── README.md
```

## Setup Instructions

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## Running the Application

### Backend Server (Port 3500)

From the `backend` directory:

```bash
# Development mode (with auto-reload)
npm run dev
```

The backend will be available at `http://localhost:3500`

### Frontend Server (Port 3000)

From the `frontend` directory:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## API Endpoints

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task (body: `{ "title": "Task title" }`)
- `DELETE /tasks/:id` - Delete a task by ID

## Usage

1. Start both servers (backend and frontend)
2. Open `http://localhost:3000` in your browser
3. Enter a task title in the input field
4. Click "Add task" to create a new task
5. Click "Delete" on any task to remove it
