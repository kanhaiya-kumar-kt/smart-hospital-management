# Smart Hospital Management System

A scalable full-stack Hospital Management System built using **Java, Spring Boot, Spring Security, PostgreSQL, JPA, and React.js**. The application streamlines hospital operations by efficiently managing doctors, patients, and appointments while ensuring security, maintainability, and high performance.

## 🚀 Features

* Doctor Management

  * Add, update, view, and delete doctor records.
  * Manage doctor specializations and availability.

* Patient Management

  * Register and maintain patient information.
  * Access patient records securely.

* Appointment Management

  * Schedule, update, and cancel appointments.
  * Track appointment history and status.

* Authentication & Authorization

  * Secure user authentication using Spring Security.
  * Role-Based Access Control (RBAC) for Admin, Doctor, and Patient roles.

* RESTful APIs

  * Well-structured REST APIs for seamless frontend-backend communication.

* Data Validation & Exception Handling

  * Centralized exception handling.
  * Request validation to ensure data integrity.

* Responsive User Interface

  * Modern frontend built with React.js.
  * User-friendly dashboards and forms.

---

## 🛠️ Tech Stack

### Backend

* Java
* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Database

* PostgreSQL

### Tools & Technologies

* Git & GitHub
* Maven
* REST APIs

---

## 🏗️ Project Architecture

The application follows a layered MVC architecture for better scalability and maintainability:

```text
Controller Layer
      ↓
Service Layer
      ↓
Repository Layer
      ↓
PostgreSQL Database
```

### Components

* Controller Layer – Handles incoming HTTP requests.
* Service Layer – Contains business logic.
* Repository Layer – Manages database interactions.
* DTO Layer – Transfers data between layers.
* Entity Layer – Represents database tables.

---

## 🔒 Security Implementation

* Spring Security-based authentication.
* Role-based authorization.
* Protected API endpoints.
* Secure password storage using encryption.
* Authentication and access control for different user roles.

---

## ⚡ Performance Optimizations

* Optimized database queries using Spring Data JPA.
* Efficient entity relationships and fetching strategies.
* Reduced unnecessary database calls.
* Improved response times through structured service-layer design.

---

## 📂 Project Structure

```text
hospital-management-system
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── dto
│   ├── entity
│   ├── security
│   ├── exception
│   └── config
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
└── database
```

---

## ⚙️ Installation & Setup

### Prerequisites

* Java 17+
* Node.js & npm
* PostgreSQL
* Maven
* Git

### Backend Setup

```bash
# Clone repository
git clone https://github.com/your-username/hospital-management-system.git

# Navigate to backend
cd backend

# Build project
mvn clean install

# Run application
mvn spring-boot:run
```

### Database Configuration

Update the `application.properties` file:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/hospital_db
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start React application
npm start
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/login
POST /api/auth/register
```

### Doctors

```http
GET    /api/doctors
GET    /api/doctors/{id}
POST   /api/doctors
PUT    /api/doctors/{id}
DELETE /api/doctors/{id}
```

### Patients

```http
GET    /api/patients
GET    /api/patients/{id}
POST   /api/patients
PUT    /api/patients/{id}
DELETE /api/patients/{id}
```

### Appointments

```http
GET    /api/appointments
POST   /api/appointments
PUT    /api/appointments/{id}
DELETE /api/appointments/{id}
```

---

## 📈 Key Highlights

* Full-stack application using Spring Boot and React.js.
* Layered MVC architecture for clean code organization.
* Secure REST APIs with Spring Security.
* PostgreSQL integration with Spring Data JPA.
* Robust validation and exception handling.
* Version control using Git and GitHub.
* Scalable and maintainable design suitable for real-world healthcare systems.

---

## 👨‍💻 Author

**Your Name**

* GitHub: https://github.com/kanhaiya-kumar-kt
* LinkedIn:https://www.linkedin.com/in/kanhaiya-kumark/
