# 🧠 DevAI | Realtime AI Developer Assistant

## 🚀 Overview
**DevAI** is a **realtime AI-powered developer assistant** that integrates with **Google Gemini AI** to allow users to **generate and collaborate on code** through natural language prompts.

This project empowers developers to:
- Generate and edit code with the help of AI.
- Collaborate in realtime with other authenticated users.
- Manage user roles securely with JWT authentication.
- Enjoy a smooth, responsive, and interactive experience built with **React** and **Socket.IO**.

---

## 🌟 Key Features

| Feature | Description |
|----------|-------------|
| 💬 **AI Chat Integration** | Integrated with **Google Gemini AI** to generate, debug, or refactor code using natural language. |
| 👥 **Multi-User Collaboration** | Multiple users can join the same session, chat, and co-edit or view AI-generated responses in realtime. |
| 🔐 **JWT Authentication** | Secure user login and registration system with JWT-based authentication and **role-based access control**. |
| ⚡ **Realtime Communication** | Uses **Socket.IO** for instant messaging and realtime updates between users. |
| 💾 **Persistent Storage** | AI-generated code and user sessions are saved in the backend for later access. |
| 🧑‍💻 **Modern UI** | Responsive React frontend designed for a clean and developer-friendly experience. |

---

## 🧩 Tech Stack

| Layer | Technologies Used |
|-------|--------------------|
| **Frontend** | React.js, Fetch, TailwindCSS, Socket.IO Client |
| **Backend** | Node.js, Express.js, Socket.IO, Google Gemini API |
| **Authentication** | JWT (JSON Web Token), bcrypt |
| **Database** | MongoDB / PostgreSQL (as per implementation) |
| **Realtime Communication** | Socket.IO |
| **AI Integration** | Google Gemini API (Generative AI) |

---

## 🗂️ Project Structure

```bash
DevAI/
│
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── chatController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Message.js
│   │   └── CodeFile.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── chatRoutes.js
│   └── utils/
│       └── verifyJWT.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBox.jsx
│   │   │   ├── CodeEditor.jsx
│   │   │   ├── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── ChatRoom.jsx
│   │   ├── App.js
│   │   └── index.js
│
├── .env
├── package.json
└── README.md

./assets/room.png
./assets/room.png

