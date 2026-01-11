# 🎓 Excellency Academy Dumka – Educational Portal

A premium, high-performance web interface designed for **Excellency Academy, Dumka**. This project serves as a comprehensive digital campus, bridging the gap between traditional learning and modern digital accessibility for students and faculty.

> 🔒 **Confidentiality Notice:** This is a **Client-Side Interface**. Backend modules, proprietary student databases, and internal school management scripts are excluded to comply with data privacy standards.

---

## ✨ Features

### 🎯 Core Capabilities

* **Academic Hub**: Organized access to curriculum details, class schedules, and faculty profiles.
* **Dynamic Notice Board**: Real-time updates for school announcements, exam dates, and merit lists.
* **Admission Funnel**: Streamlined interface for new student inquiries and registration.
* **Digital Resource Center**: Dedicated sections for downloading study materials and viewing academic calendars.

### 📱 User Interface Sections

* **🏢 Campus Dashboard (Home)**: Hero section showcasing the academy’s mission and infrastructure.
* **👨‍🏫 Faculty Directory**: Profile cards for educators with subject specializations.
* **📜 Academic Programs**: Detailed breakdown of secondary and higher-secondary streams (Science, Commerce, Arts).
* **🖼️ Media Gallery**: Visual showcase of campus life, labs, and extracurricular events.
* **📊 Result Portal**: Frontend layout for displaying student performance and rankers.
* **📍 Reach Us (Contact)**: Integrated inquiry form with Google Maps location for the Dumka campus.

---

## 🛠️ Technology Stack

* **HTML5 & CSS3**: Semantic structure and custom-designed stylesheets.
* **JavaScript (ES6+)**: Interactive components, smooth scrolling, and form validation.
* **Responsive Framework**: Custom media queries ensuring 100% compatibility with mobile and desktop.
* **PHP Hook (Frontend)**: Prepared for `submit_inquiry.php` (Backend logic not included).

---

## 📁 Project Structure

```bash
Excellency-Academy-Dumka-Project/
├── index.html           # Campus Home Interface
├── faculty.html         # Educator & Staff Directory
├── curriculum.html      # Syllabus & Stream Information
├── gallery.html         # School Life & Infrastructure Photos
├── notice.html          # Dynamic Announcement Center
├── contact.html         # Student/Parent Inquiry Portal
├── assets/
│   ├── css/
│   │   └── main.css     # Unified Design System
│   ├── js/
│   │   └── app.js       # Navigation & UI Logic
│   └── images/          # Campus & Academic Branding Assets
└── README.md            # Project Documentation

```

---

## 🚀 Deployment Guide

### 1. Local Setup

Clone this repository to your workstation:

```bash
git clone https://github.com/paricharm/Excellency-Academy-dumka-Client-Project.git

```

### 2. Live Preview

* **Direct Execution:** Launch `index.html` in any modern web browser.
* **Dev Environment:** Use **VS Code Live Server** for the best experience with relative paths and asset loading.

---

## 📊 User Interaction Logic

### Lead Capture Workflow

The inquiry system is optimized for high-volume student intake during admission cycles:

| Interaction | Client-Side Action | Expected Result |
| --- | --- | --- |
| **Admission Form** | Client-side validation | Prevents empty/incorrect data submission |
| **Notice Search** | Dynamic Filtering | Finds relevant circulars instantly |
| **Gallery View** | Lightbox Integration | Immersive view of school facilities |

---

## ⚙️ Customization & Scaling

### Visual Identity

To change the academy's branding (Colors/Fonts), modify the variables in `assets/css/main.css`:

```css
:root {
  --academy-blue: #003366; /* Standard Education Blue */
  --accent-gold: #ffd700;  /* Excellence/Award Gold */
}

```

### Data Integration

The `notice.html` is structured to easily integrate with a JSON feed or a CMS database to allow staff to post updates without editing code.

---

## 📈 Future Enhancements

* [ ] **LMS Integration**: Connection to a Learning Management System for online assignments.
* [ ] **Parent Portal**: Secure login area for tracking student attendance and fees.
* [ ] **Event Calendar**: Full-screen interactive calendar for school holidays and events.
* [ ] **Multilingual Support**: Hindi/English toggle for better local community reach.

---

## 📄 Terms of Use

* **Purpose**: Portfolio showcase and educational reference.
* **Privacy**: No actual student data is contained in this repository.
* **Permission**: Commercial deployment requires agreement from Excellency Academy, Dumka.

