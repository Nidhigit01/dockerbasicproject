# User Management Application

A full-stack User Management application built using:
- Spring Boot (Backend)
- React (Frontend)
- MySQL (Database)
- Docker & Docker Compose

The application is containerized and can be run locally using Docker or deployed using Docker Hub images.

---

## Architecture

Frontend (React + Nginx)
Backend (Spring Boot REST API)
MySQL Database (Docker volume persistence)

---

## Tech Stack

- Backend: Java 17, Spring Boot, JPA, Hibernate
- Frontend: React, Node.js, Nginx
- Database: MySQL 8
- Containerization: Docker, Docker Compose
- CI/CD: GitHub Actions (if applicable)

---

## Project Structure
backend/userapp → Spring Boot backend
frontend → React frontend
docker-compose.yml → Multi-container setup


---

## How to Run the Project (Using Docker)

### Prerequisites
- Docker
- Docker Compose

---

### Step 1: Clone the repository

git clone https://github.com/Nidhigit01/dockerbasicproject.git
cd user-management-app

### Step 2: Run

docker compose up --build

### Step 3: Access the application

Frontend: http://localhost:3000

Backend API: http://localhost:8080

MySQL: localhost:3306

---

Images are Available on Docker Hub:

Backend: docker.io/nidhidocker01/user-backend

Frontend: docker.io/nidhidocker01/user-frontend




