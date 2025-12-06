# 🧭 Nexus Task Suite
### *A Full-Stack, Multi-Page Productivity Ecosystem with Advanced UI/UX, Role-Based Access, Media Management, Automation Tools & Developer APIs*

Nexus Task Suite is a premium productivity platform engineered with a rich front-end UI, modular components, a Node.js backend, and MySQL database.  
It includes 17+ fully interactive pages, real-time UI elements, drag-and-drop workflows, and a modern neon–glass design inspired by macOS + futuristic dashboards.

This project is designed for scalability, flexibility, and enterprise-level multi-role access (Admin, User, Developer).

---

## 🚀 Core Features

### Frontend
- 17 fully designed, animated, modular pages  
- Neon-glass UI + fluid transitions  
- Drag-and-drop Kanban workflow  
- Dynamic Calendar with events  
- Analytics Dashboard (Chart.js)  
- Autosaving Notes module  
- Media Uploader + Preview  
- Stripe Payments (subscriptions + one-time)  
- Admin Panel with full user control  
- Developer Portal (API keys, webhook tester)  
- Offline-mode support  
- Global toast system (premium UI)  
- LocalStorage theme system (Light/Dark/System)

### Backend
- Node.js + Express API  
- MySQL database (schema included)  
- JWT authentication  
- Role-based authorization  
- Multer-powered media uploads  
- Stripe Checkout integration  
- Nodemailer email system  
- Rate limit middleware  
- Modular MVC architecture  

---

## 📁 Project Structure

```
nexus-task-suite/
├── client/
│   ├── pages/                # 17 production pages
│   ├── components/           # header, footer, sidebar, modal, toast
│   ├── shared/               # css, js utilities, libs
│   ├── assets/               # images, icons, fonts, videos
│   └── index.html
│
├── server/
│   ├── routes/               # API routing layer
│   ├── controllers/          # request handling logic
│   ├── models/               # DB models
│   ├── middleware/           # auth, roles, rate limit
│   ├── services/             # storage, payments, notifications
│   ├── db/                   # schema + database connector
│   ├── config/               # environment config
│   └── index.js              # server entry point
│
├── docs/                     # API spec & design guidelines
├── scripts/                  # build/deploy scripts
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🛠 Tech Stack

### Frontend
- HTML5, CSS3  
- Vanilla JavaScript  
- Chart.js  
- Drag & Drop API  
- LocalStorage state  

### Backend
- Node.js + Express  
- MySQL  
- Multer (uploads)  
- Stripe SDK  
- Nodemailer  
- JWT authentication  

---

## 🔐 Authentication & Roles

| Role | Access Level |
|------|--------------|
| **User** | Dashboard, tasks, notes, calendar, media |
| **Admin** | Everything + Admin Panel |
| **Developer** | Developer Portal (API keys, webhooks) |

---

## 🎨 UI/UX Systems

- Neon gradient + glassmorphism design  
- Animated header + dropdown profile menu  
- Responsive sidebar with permission-aware items  
- Modal system (glass-themed)  
- Toast notification system  
- Smooth fade/slide transitions across pages  

---

## 🧩 Functional Modules Overview

### ✔ Tasks (Kanban)
- Create/update/delete tasks  
- Drag & drop with real backend sync  
- Statuses: `todo`, `progress`, `done.`  

### ✔ Notes
- Autosave every 3.5 seconds  
- Save, edit, delete  
- Powered by Tasks API  

### ✔ Calendar
- Dynamic month switching  
- Click-to-add events  
- Delete events  

### ✔ Media Center
- Supports image/video upload  
- Multipart form upload  
- List & delete media  

### ✔ Payments
- Stripe subscription  
- Stripe one-time purchase  
- Stub fallback in dev mode  

### ✔ Admin Panel
- List all users  
- Change user role  
- Delete user accounts  
- Create new users  

### ✔ Developer Portal
- API key regeneration  
- Webhook tester (optional backend endpoint)  

---

## ⚙️ Environment Setup

### 1. Install backend dependencies
```
cd server
npm install
```

### 2. Configure environment variables
Create `.env` in `/server`:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=nexus_db
JWT_SECRET=your_secret
MAIL_USER=your@gmail.com
MAIL_PASS=your_smtp_password
STRIPE_KEY=sk_test_xxx
```

### 3. Import database schema
Using phpMyAdmin or MySQL CLI:

```
SOURCE server/db/schema.sql;
```

### 4. Run backend server
```
npm run server:dev
```

### 5. Serve frontend via XAMPP
Access:
```
http://localhost/nexus-task-suite/client/pages/01-home/home.html
```

---

## 💾 Build & Deployment

### Build assets
```
bash scripts/build-assets.sh
```

### Push to GitHub
```
git add -A
git commit -m "Deploy."
git push origin main
```

---

## 🧪 Testing Checklist

- Login works (JWT stored)  
- Drag/drop in Kanban updates DB  
- Calendar creates & deletes events  
- Notes autosave  
- Media upload preview works  
- Stripe session redirects correctly  
- Admin panel loads user list  
- Developer portal shows regenerated key  
- UI animations behave smoothly on scroll/mobile  

---

## 👑 Author
**Shahriyar**  
Full-stack developer building futuristic productivity tools.

---

## 🚀 Future Enhancements
- Real-time WebSockets sync  
- PWA offline full mode  
- AI-powered task recommendations  
- Team collaboration features  
- Theme marketplace (neon, aurora, midnight)  

---

