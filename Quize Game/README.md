
# 🧠 Quiz Game - MERN Stack Application

An interactive **Quiz Game** built using the **MERN Stack (MongoDB, Express, React, Node.js)**. This application allows users to register/login, take quizzes on various topics, and view results. It includes dynamic question loading, scoring, role-based features, and a responsive UI.

---

## 🚀 Features

- 🔐 User Authentication with JWT (Login & Signup)
- ❓ Multiple-choice Questions with instant score
- 🧠 Score Tracking with result summary
- 🕒 Optional Timer per quiz (customizable)
- 📋 Quiz Category Support
- 📈 Result Feedback at end of each quiz
- 🎯 Role-based access (user/admin for future extensions)

---

## 📁 Project Structure

```
Quiz-Game/
│
├── server/                        # Backend (Node.js + Express)
│   ├── models/                   # Mongoose schemas (User, Quiz, Question)
│   ├── routes/                   # Express routes (userRoutes, quizRoutes, questionRoutes)
│   ├── controllers/              # Route handlers
│   ├── server.js                 # Backend entry point
│   └── .env                      # Environment variables
│
├── client/quiz-game-frontend/    # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/                # Home, QuizList, Auth, StartQuiz
│   │   ├── components/           # Reusable UI elements
│   │   ├── services/             # API services with Axios
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md                     # Project Documentation
```

---

## 🛠️ Tech Stack

### ✅ Frontend

- ⚛️ React (Vite)
- 💡 React Router DOM
- 🎨 CSS Modules / Custom styling
- 🔐 JWT Auth with localStorage

### ✅ Backend

- 🟢 Node.js + Express
- 🗃️ MongoDB with Mongoose
- 🔐 JWT-based Authentication
- 🌐 RESTful APIs

## 🗄️ Database Schema (MongoDB Collections)

### 1. Users  
Stores user data and authentication info.

| Field        | Type      | Description                   |
|--------------|-----------|-------------------------------|
| `_id`        | ObjectId  | Unique identifier              |
| `username`   | String    | User's display name            |
| `email`      | String    | User's email (unique)          |
| `password`   | String    | Hashed password                |
| `role`       | String    | Role of user (e.g. user/admin)|
| `createdAt`  | Date      | Account creation timestamp     |

---

### 2. Quizzes  
Contains metadata about each quiz.

| Field        | Type      | Description                   |
|--------------|-----------|-------------------------------|
| `_id`        | ObjectId  | Unique quiz identifier         |
| `title`      | String    | Quiz title                    |
| `category`   | String    | Quiz category (e.g. Java, HTML)|
| `description`| String    | Short description of the quiz |
| `timeLimit`  | Number    | Optional timer in seconds     |
| `createdBy`  | ObjectId  | Reference to user/admin who created quiz |
| `createdAt`  | Date      | Creation date                 |

---

### 3. Questions  
Contains all questions linked to quizzes.

| Field         | Type       | Description                    |
|---------------|------------|--------------------------------|
| `_id`         | ObjectId   | Unique question identifier     |
| `quizId`      | ObjectId   | Reference to the associated quiz|
| `questionText`| String     | The question being asked       |
| `options`     | Array      | List of answer options (text + isCorrect flag) |
| `explanation` | String     | Optional explanation for answer|

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/quiz-game.git
cd quiz-game
```

### 2. Setup Backend (server)

```bash
cd server
npm install
```

Create a `.env` file in the `server/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Then start the backend server:

```bash
npm run dev
```

### 3. Setup Frontend (client)

```bash
cd client/quiz-game-frontend
npm install
npm run dev
```

Open your browser at: [http://localhost:5173](http://localhost:5173)

---

## 🌐 API Endpoints

### 📌 Users
- `POST /api/users/register` – Register a new user
- `POST /api/users/login` – Login and get token

### 📌 Quizzes
- `GET /api/quizzes` – Fetch all quizzes
- `GET /api/quizzes/:id` – Fetch a single quiz

### 📌 Questions
- `GET /api/questions/:quizId` – Fetch quiz questions


---

## 🙋‍♀️ Author

**Modi Sireesha**

---

