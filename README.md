# ✦ Taskflow — Smart Todo App

A modern, full-stack Todo application built with **React**, **Express**, and **MongoDB**. Features a stunning dark glassmorphism UI with smooth micro-animations.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)

---

## ✨ Features

- ➕ **Add Tasks** — Quick input with Enter key support
- ✅ **Toggle Complete** — Click checkbox to mark tasks done with pop animation
- 🗑️ **Delete Tasks** — Hover to reveal delete button
- 📊 **Progress Tracker** — Visual progress bar with glowing indicator
- 🎨 **Glassmorphism UI** — Frosted glass cards with animated floating orbs
- 📱 **Fully Responsive** — Works beautifully on mobile and desktop
- ⚡ **Real-time Updates** — Instant UI refresh after every action

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, Vite 8, Axios |
| **Backend** | Express 5, Node.js |
| **Database** | MongoDB with Mongoose |
| **Styling** | Vanilla CSS (Glassmorphism + Animations) |
| **Font** | Inter (Google Fonts) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running on localhost:27017)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Arjundhanush/chatapp.git
cd chatapp/todo
```

**2. Install frontend dependencies**

```bash
npm install
```

**3. Install backend dependencies**

```bash
cd backend
npm install
```

### Running the App

**1. Start MongoDB** (if not already running)

```bash
mongod
```

**2. Start the backend server**

```bash
cd backend
node index.js
```

> Server runs on `http://localhost:3001`

**3. Start the frontend dev server**

```bash
npm run dev
```

> App opens at `http://localhost:5173`

---

## 📁 Project Structure

```
todo/
├── backend/
│   ├── models/
│   │   └── todo.js          # Mongoose schema (task, done, timestamps)
│   ├── index.js              # Express server & API routes
│   └── package.json
├── src/
│   ├── App.jsx               # App shell with animated background
│   ├── App.css               # Premium glassmorphism styling
│   ├── home.jsx              # Main todo list with toggle/delete
│   ├── create.jsx            # Task input form component
│   └── main.jsx              # React entry point
├── index.html                # HTML with Google Fonts & SEO meta
├── vite.config.js
└── package.json
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/get` | Fetch all todos (newest first) |
| `POST` | `/add` | Add a new todo (`{ task: "..." }`) |
| `PUT` | `/update/:id` | Toggle done status |
| `DELETE` | `/delete/:id` | Delete a todo |

---

## 🎨 Design Highlights

- **Dark Theme** — Deep navy background (`#0a0a1a`) with purple/blue/pink accent gradients
- **Floating Orbs** — Three animated blurred orbs create a dynamic, living background
- **Frosted Glass** — Card uses `backdrop-filter: blur(40px)` for a premium glass effect
- **Micro-Animations** — Slide-in tasks, checkbox pop, shimmer button hover, bouncing empty state
- **Progress Bar** — Gradient fill with a glowing pink dot at the tip
- **Custom Scrollbar** — Thin, translucent scrollbar matching the dark theme

---

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

---

Built with ❤️ by [Arjun Dhanush](https://github.com/Arjundhanush)
