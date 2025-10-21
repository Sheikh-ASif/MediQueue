# 🏥 MediQueue - Admin Panel Frontend
# Overview
MediQueue is a web-based platform for clinics and hospitals focusing on real-time queue and appointment management. The admin panel offers staff an intuitive dashboard to manage doctors, patients, and appointments, ensuring smooth patient flow and improved efficiency. Built with React, Vite, and Tailwind CSS, MediQueue delivers a fast, modern, and responsive user experience.

# ✨ Highlights
- 🔒 Authentication for multiple roles: Admin, Doctor, User

- ⏱ Efficient patient queue and appointment management

- 📊 Structured models for doctors, users, and appointments

- 🚀 Built for integration with the React/Vite frontend

# 🚀 Technology Stack
# Core Technologies
- React ^19.1.1 – Modern UI library with components and hooks
- Vite ^7.1.2 – Fast build tool and dev server
- JavaScript (ES6+) – Latest features and syntax

# State Management
- React Hooks (useState, useEffect, useContext)
- Custom context files: AdminContext.jsx, DoctorContext.jsx, AppContext.jsx

# Routing & Navigation
- React Router DOM ^7.9.1 – SPA routing for admin and doctor views (Login.jsx, Dashboard.jsx,  DoctorsList.jsx, DoctorDashboard.jsx, etc.)

# Styling & UI
- Tailwind CSS ^3.4.17 – Utility-first CSS framework
- PostCSS ^8.5.6 & Autoprefixer ^10.4.21 – CSS post-processing
- Lucide React & React Icons – Icon libraries

# Charting & Data Visualization
- Recharts ^3.2.1 – For interactive and animated charts, powering the dashboard’s statistics, queue analytics, and doctor performance visualizations

# HTTP Client & Notifications
- Axios ^1.12.2 – For API calls
- React Hot Toast ^2.6.0 & React Toastify ^11.0.5 – For notifications and alerts

# Development Tools
- ESLint ^9.33.0 – Code linting
- Vite React Plugin ^5.0.0 – React fast refresh & integration

# Project Structure
admin/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   ├── context/
│   │   ├── AdminContext.jsx
│   │   ├── AppContext.jsx
│   │   ├── DoctorContext.jsx
│   ├── pages/
│   │   ├── Admin/
│   │   │   ├── AddDoctor.jsx
│   │   │   ├── AllAppointments.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── DoctorsList.jsx
│   │   ├── Doctor/
│   │   │   ├── DoctorAppointments.jsx
│   │   │   ├── DoctorDashboard.jsx
│   │   │   ├── DoctorProfile.jsx
│   │   ├── Login.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── eslint.config.js
└── README.md


# 🎯 Key Features ---

# Admin Features
- Unique ID and password assignment for each doctor
- Add, edit, and remove doctor profiles and appointments
- Dashboard for monitoring real-time patient queues and visual analytics (powered by Recharts)
- Bulk appointment and doctor management

# Technical Features
- JWT-based secure authentication
- Responsive design for desktop and mobile
- Context-based state management for multiple roles
- Form validations and user-friendly error handling
- Protected routes for admin and doctor role separation
- Interactive charts for stats and performance reports using Recharts

# 🛠 Development Setup
# Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
-  Git

# Tailwind CSS Configuration
- Custom colors, typography, spacing, and responsive breakpoints configured for MediQueue branding within tailwind.config.js and index.css.



