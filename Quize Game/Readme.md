# MERN Quiz Application

A full-stack quiz management web application built with the **MERN** stack (MongoDB, Express, React, Node.js).  
This app allows admins to create quizzes and add multiple-choice questions with explanations. Users can browse quizzes and take them interactively.

---

## Table of Contents

- [MERN Quiz Application](#mern-quiz-application)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Folder Structure](#folder-structure)
  - [Setup \& Installation](#setup--installation)
    - [Backend Setup](#backend-setup)

---

## Project Overview

This project is a **quiz management system** built using the MERN stack.  
It consists of:

- A **backend REST API** using Express and Node.js connected to a MongoDB database to manage quizzes and questions.
- A **frontend React application** for interacting with quizzes, adding questions, and taking quizzes.

Users can create quizzes, add/edit/delete questions, and attempt quizzes with immediate feedback.

---

## Features

- **CRUD operations** for quizzes and questions
- Multiple-choice questions with multiple options and correct answers
- Explanation text for questions to provide learning feedback
- Interactive quiz-taking experience
- Responsive UI for desktop and mobile
- Input validation and error handling on backend APIs

---

## Tech Stack

| Layer       | Technology               |
|-------------|--------------------------|
| Backend     | Node.js, Express, Mongoose, MongoDB |
| Frontend    | React, React Router, Axios |
| Database    | MongoDB                  |

---

## Folder Structure

/server
├── models
│ ├── Quiz.js
│ └── Question.js
| └── User.js
├── routes
│ ├── quizRoutes.js
│ └── questionRoutes.js
| └── userRoutes.js
├── server.js
├── package.json
/client/quiz-game-frontend
├── src
│ ├── pages
│ │ ├── Home.jsx
│ │ ├── QuizList.jsx
│ │ ├── Auth.jsx
│ │ └── StartQuiz.jsx
│ ├── App.jsx
│ └── index.js
├── package.json


---

## Setup & Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd server


---

If you want, I can help generate a **detailed environment setup guide**, or **frontend component usage**, or even provide a **Postman collection** for your APIs.

Would you like that?
