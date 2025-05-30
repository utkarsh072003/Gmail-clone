# 📧 Gmail Clone App

A full-stack Gmail Clone application that mimics the core functionality of Gmail. Users can register, log in, send emails, and view their inbox — all securely within a browser. Built using the **MERN stack** and deployed on **Vercel** (frontend) and **Render** (backend).

---

### 🔗 Live Demo

🌐 [View Gmail Clone App](https://gmail-clone-wine-alpha.vercel.app)

---

### 🚀 Features

- ✅ User Authentication (Register / Login / Logout)
- ✅ JWT-based Session Management
- ✅ Compose and Send Emails (stored in DB)
- ✅ View All Received Emails (Inbox)
- ✅ Secure Routes with Middleware
- ✅ Cookie-based Authentication

> 📝 Note: This is a full-stack **simulation** of Gmail and does not send or receive real emails.

---

### 🛠️ Tech Stack

| Tech           | Description                   |
|----------------|-------------------------------|
| **Frontend**   | React, Redux Toolkit, Axios   |
| **Backend**    | Node.js, Express              |
| **Database**   | MongoDB (via Mongoose)        |
| **Auth**       | JWT, Cookies                  |
| **Deployment** | Vercel (frontend), Render (backend) |

---

### 📁 Folder Structure

```bash
gmail-clone/
├── client/               # React frontend
│   └── src/
│       └── redux/        # Redux slices
│       └── components/   # Reusable components
├── server/               # Express backend
│   └── models/           # MongoDB schemas
│   └── routes/           # API endpoints
│   └── middleware/       # JWT auth middleware
│   └── controllers/      # Logic handlers
