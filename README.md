# Expense & Income Tracker

A full-stack web app to track income and expenses, with a dashboard, charts, and export to Excel. This is my **first full-stack project**, built to learn React, Node.js, and end-to-end application development.

---

## What it does

- **Auth:** Sign up, login, JWT-based sessions, optional profile photo upload
- **Dashboard:** Total balance, income, and expenses; recent transactions; pie, bar, and line charts (last 30/60 days)
- **Income:** Add, list, and delete income entries with source and amount; export to Excel
- **Expense:** Add, list, and delete expenses with category, amount, and date; export to Excel
- **UI:** Responsive layout, Indian currency (₹) and number formatting, toasts for feedback

---

## Tech stack

| Part       | Technologies |
| ---------- | ------------ |
| **Frontend** | React 19, Vite, React Router, Axios, Recharts, Tailwind CSS, React Context |
| **Backend**  | Node.js, Express, JWT, bcrypt, Multer, Mongoose |
| **Database** | MongoDB |

The backend lives in a separate folder (sibling `backend/` in the repo). This README is for the **frontend** app.

---

## Prerequisites

- **Node.js** (v18+ recommended)
- **MongoDB** running locally or a connection string
- Backend running so the frontend can call the API

---

## Getting started

### 1. Run the backend

From the project root (or the `backend` folder):

```bash
cd backend
npm install
# Add a .env with MONGO_URI and JWT_SECRET (and PORT if not 8005)
npm run dev
```

Backend runs at `http://localhost:8005` by default.

### 2. Run the frontend

From this folder (`frontend/expense-tracker`):

```bash
npm install
npm run dev
```

Frontend runs at `http://localhost:5173` (or the port Vite shows).  
If your backend uses a different URL/port, update `BASE_URL` in `src/utils/apiPaths.js`.

### 3. Build for production

```bash
npm run build
npm run preview   # optional: preview the production build
```

---

## Project structure (frontend)

```
src/
├── components/     # Reusable UI (Cards, Charts, Layouts, Inputs, etc.)
├── context/       # UserContext for auth state
├── hooks/         # e.g. useUserAuth
├── pages/         # Auth (Login, SignUp), Dashboard (Home, Income, Expense)
├── utils/         # API paths, axios instance, helpers (formatting, chart data)
├── App.jsx
└── main.jsx
```

---

## Notes

- Built as a learning project to practice **full-stack flow**: REST APIs, auth, state management, and UI with real data.
- Backend handles auth, CRUD for income/expense, dashboard aggregation, file upload (profile image), and Excel export (XLSX).

---

## License

ISC
