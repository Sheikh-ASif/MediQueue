🏥 MediQueue - Frontend Application
# Overview
MediQueue is a web-based platform designed to streamline clinic and hospital patient management. The frontend provides an intuitive interface for patients to join or view clinic queues, while staff can manage patient flow in real-time. Built with React, Tailwind CSS, and Vite, MediQueue ensures a fast, responsive, and user-friendly experience.

# 🚀 Technology Stack
# Core Technologies
React ^19.1.1 – Modern UI library with hooks and component-based architecture
Vite ^7.1.5 – Fast build tool and development server
JavaScript (ES6+) – Modern JavaScript with modules
# State Management
React Hooks – useState, useEffect, useContext (for component state)

# Routing & Navigation

React Router DOM ^7.8.2 – Declarative routing for React

# Styling & UI
/*
- Tailwind CSS ^3.4.17 – Utility-first CSS framework

- PostCSS ^8.5.6 – CSS post-processor

- Autoprefixer ^10.4.21-Vendor prefixing

- Lucide React ^0.544.0–Consistent icons

- React Icons ^5.5.0–Popular icon libraries
 */

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
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Banner.jsx
│   │   ├── DashboardLayout.jsx
│   │   ├── Header.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── RelatedDoctors.jsx
│   │   ├── SpecialtyMenu.jsx
│   │   └── Doctors.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Queue.jsx
│   │   ├── Dashboard.jsx
│   │   ├── About.jsx
│   │   ├── Appointment.jsx
│   │   ├── Contact.jsx
│   │   ├── Doctors.jsx
│   │   ├── Login.jsx
│   │   ├── MyAppointments.jsx
│   │   └── MyProfile.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── hooks/
│   ├── lib/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
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
/*
- Hero Section – Dynamic hero section introducing MediQueue

- SpecialtyMenu – List of medical specialties or departments

- Banner – Highlight promotions or important announcements

- TopClinics – Showcase of partner clinics/hospitals

- HowItWorks – Step-by-step explanation of queue process

- Services – Overview of patient services

- PatientTestimonials – Real patient success stories

- FAQSection – Frequently asked questions
*/

# User Features
/*
- Authentication System – JWT-based secure login/signup

- Patient Dashboard – Track queue status, appointments, and history

- Profile Management – Complete patient profile system

- Appointment Submission – Schedule or request appointments

- Queue Management – View current queue and estimated waiting time
*/

# Staff/Admin Features

/*
- DashboardLayout – Real-time patient queue monitoring

- Add/Remove Patients – Manage patient queue dynamically

- Notifications – Real-time updates using toast notifications
*/

# Technical Features

/*
- Responsive Design – Mobile-first approach

- State Persistence – Managed via React Context & Hooks

- Protected Routes – Role-based access control

- Form Validation – Comprehensive input validation for forms

- Error Handling – Graceful error messages and fallbacks
*/

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

- Components – Reusable component classes for buttons, cards, and forms