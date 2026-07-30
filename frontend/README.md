# 🏥 MediQueue - Frontend Application

## Overview

MediQueue is a web-based healthcare appointment and queue management system developed using React.js. It allows patients to browse doctors, book appointments, manage their profiles, and view appointment history. The application communicates with a Node.js backend using REST APIs.

> **Note:** This project was originally developed as a React.js web application. The assessment requested a React Native application. Due to time constraints, this submission contains the React.js implementation.

---

# 🚀 Technology Stack

## Core Technologies

- React ^19.1.1
- Vite ^7.1.5
- JavaScript (ES6+)

## State Management

- React Context API
- React Hooks (useState, useEffect, useContext)

## Routing

- React Router DOM ^7.8.2

## Styling

- Tailwind CSS ^3.4.17
- PostCSS
- Autoprefixer
- Lucide React
- React Icons

## API & Notifications

- Axios
- React Hot Toast

## Development Tools

- ESLint
- Vite React Plugin

---

# 📂 Project Structure

```
frontend/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
└── README.md
```

---

# 🎯 Features

## Patient Features

- User Authentication
- Browse Doctors
- Search Doctors
- Doctor Details
- Book Appointment
- View My Appointments
- Profile Management

## Admin Features

- Admin Login
- Add Doctors
- Manage Doctors
- View Patients
- View Appointments

## Technical Features

- JWT Authentication
- REST API Integration
- Protected Routes
- Responsive Design
- Form Validation
- Error Handling
- Toast Notifications

---

# 🛠 Project Setup

## Prerequisites

- Node.js (v18 or above)
- npm
- Git

---

## Installation

Clone the repository

```bash
git clone https://github.com/Sheikh-ASif/MediQueue.git
```

Move into frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

# 🔐 Environment Variables

The frontend communicates with the backend API.

Update the backend API URL if required.

Example:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

# 🗄 Database

This project currently uses **MongoDB** through the backend.

Database schema is available inside:

```
backend/models/
```

- userModel.js
- doctorModel.js
- appointmentModel.js

---

# 🌱 Sample Data

No automated seed script is included.

Sample doctor records are available in:

```
frontend/src/assets/assets.js
```

This file contains predefined doctor data used during development.

---

# 🔑 Login Credentials

## Admin

Email

```
admin@mediqueue.com
```

Password

```
Admin@123
```

## Patient

Create a new patient account using the registration page.

---

# 📄 API Documentation

A Postman Collection is included with the project.

Import the exported JSON collection into Postman to test all available APIs.

---

# 📱 Android APK

This project is implemented as a React.js web application.

No Android APK is included in this submission.

---

# 📌 Notes

This submission represents the current implementation of MediQueue.

The original assessment requested:

- React Native
- MySQL
- Seeder Scripts
- Android APK

The current implementation uses:

- React.js
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

# 👨‍💻 Author

**Md Asif Sheikh**

GitHub:
https://github.com/Sheikh-ASif





<!-- 🏥 MediQueue - Frontend Application

# Overview

MediQueue is a web-based platform designed to streamline clinic and hospital patient management. The frontend provides an intuitive interface for patients to join or view clinic queues, while staff can manage patient flow in real-time. Built with React, Tailwind CSS, and Vite, MediQueue ensures a fast, responsive, and user-friendly experience.

# 🚀 Technology Stack
# Core Technologies
- React ^19.1.1 — Modern UI library with hooks and components
- Vite ^7.1.5 — Lightning-fast build tool and development server
- JavaScript (ES6+) — Modular, modern JavaScript

# State Management
- React Hooks – useState, useEffect, useContext (for component state)

# Routing & Navigation
- React Router DOM ^7.8.2 – Declarative routing for React

# Styling & UI
- Tailwind CSS ^3.4.17 – Utility-first CSS framework
- PostCSS ^8.5.6 – CSS post-processor
- Autoprefixer ^10.4.21-Vendor prefixing
- Lucide React ^0.544.0–Consistent icons
- React Icons ^5.5.0–Popular icon libraries
  

# HTTP Client & Notifications
- Axios ^1.11.0 – Promise-based HTTP client
- React Hot Toast ^2.6.0–Notification system

# Development Tools
- ESLint ^9.33.0 – Code linting and quality
- Vite React Plugin ^5.0.0 – React support for Vite

# Project Structure

frontend/
├── public/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── Banner.jsx
│ │ ├── DashboardLayout.jsx
│ │ ├── Header.jsx
│ │ ├── LanguageSwitcher.jsx
│ │ ├── RelatedDoctors.jsx
│ │ ├── SpecialtyMenu.jsx
│ │ └── Doctors.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Queue.jsx
│ │ ├── Dashboard.jsx
│ │ ├── About.jsx
│ │ ├── Appointment.jsx
│ │ ├── Contact.jsx
│ │ ├── Doctors.jsx
│ │ ├── Login.jsx
│ │ ├── MyAppointments.jsx
│ │ └── MyProfile.jsx
│ ├── context/
│ │ └── AppContext.jsx
│ ├── hooks/
│ ├── lib/
│ ├── assets/
│ ├── App.jsx
│ └── main.jsx
├── .gitignore
├── index.html
├── index.css
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── tailwind.config.js
└── README.md

# 🎯 Key Features
# Landing Page Components
- Hero Section – Dynamic hero section introducing MediQueue
- SpecialtyMenu – List of medical specialties or departments
- Banner – Highlight promotions or important announcements
- TopClinics – Showcase of partner clinics/hospitals
- HowItWorks – Step-by-step explanation of queue process
- Services – Overview of patient services
- PatientTestimonials – Real patient success stories
- FAQSection – Frequently asked questions
  

# User Features
- Authentication System – JWT-based secure login/signup
- Patient Dashboard – Track queue status, appointments, and history
- Profile Management – Complete patient profile system
- Appointment Submission – Schedule or request appointments
- Queue Management – View current queue and estimated waiting time


# Staff/Admin Features
- DashboardLayout – Real-time patient queue monitoring
- Add/Remove Patients – Manage patient queue dynamically
- Notifications – Real-time updates using toast notifications

# Technical Features
- Responsive Design – Mobile-first approach
- State Persistence – Managed via React Context & Hooks
- Protected Routes – Role-based access control
- Form Validation – Comprehensive input validation for forms
- Error Handling – Graceful error messages and fallbacks

# 🛠 Development Setup
# Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Git

# Tailwind CSS Configuration
- The project uses Tailwind CSS with custom configurations:
- Custom Colors – Brand-specific color palette for MediQueue
- Typography – Consistent font scales and weights
- Spacing – Standardized spacing system
- Responsive Breakpoints – Mobile-first responsive design
- Components – Reusable component classes for buttons, cards, and forms -->
