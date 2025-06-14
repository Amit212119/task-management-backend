# 🧠 Task Management App - Backend

This is the **backend** of a full-stack Task Management application built with **Node.js**, **Express.js**, and **MongoDB**.  
It provides RESTful API endpoints for user authentication and task management, using **JWT** for secure authentication via **HTTP-only cookies**.

---

## 🚀 Live Demo

- 🌐 **Backend API**: [https://task-management-backend-production-7e2b.up.railway.app](https://task-management-backend-production-7e2b.up.railway.app)

---

## 🔧 Features

- ✅ User Registration
- ✅ User Login (JWT Auth with Cookies)
- ✅ Logout
- ✅ Get Authenticated User Profile
- ✅ Create, Update, Delete Tasks
- ✅ Input Validation and Error Handling
- ✅ MongoDB with Mongoose ODM

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- Cookie-parser
- Dotenv
- CORS

---

## 📁 Folder Structure

```
task-management-backend/
├── controllers/       # Request handlers
├── middlewares/       # Auth middleware, error handlers
├── models/            # Mongoose schemas for User and Task
├── routes/            # Route definitions
├── config/            # DB connection
├── .env               # Environment variables
├── app.js             # Express app setup
├── server.js          # Entry point
├── package.json
└── README.md
```

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-management-backend.git
cd task-management-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### 4. Start the server

```bash
npm run dev
```

API will run on: [http://localhost:4000](http://localhost:4000)

---

## 🔐 Authentication Overview

- JWT token is sent in **HTTP-only cookies**
- Middleware checks for token in cookies and validates user
- Protected routes like `/api/users/profile` require authentication

---

## 📦 API Endpoints

### 🔑 Auth Routes

- `POST /api/users/register` - Register new user  
- `POST /api/users/login` - Login user  
- `GET /api/users/profile` - Get logged-in user  
- `POST /api/users/logout` - Logout user  

### ✅ Task Routes

- `GET /api/tasks` - Get all tasks  
- `POST /api/tasks` - Create a task  
- `PUT /api/tasks/:id` - Update task  
- `DELETE /api/tasks/:id` - Delete task  

---

## ⚙️ Deployment

Deployed using **Railway**  
To deploy manually:

```bash
npm run build
```

Configure `.env` in Railway dashboard with your secrets.

---

## 📃 License

MIT — use it for learning or your own projects.

---

## 🙋‍♂️ Author

Built by **Amit Kumar**  
GitHub: [@Amit212119](https://github.com/Amit212119)