# 🏪 Mini Local Business Dashboard

This is a simple **Mini Local Business Dashboard** that simulates how small businesses might view their SEO content and Google Business data — inspired by one of GrowthProAI’s core use cases.

Built with:
- ⚛️ **React** + **Tailwind CSS** (frontend)
- 🟢 **Node.js** + **Express** (backend)

---

## ✨ Features

✅ Input form for **Business Name** and **Location**  
✅ Simulated **Google Rating** and **Number of Reviews**  
✅ AI-style **SEO Headline** for the business  
✅ “Regenerate SEO Headline” button for fresh content  
✅ Fully **responsive** and **mobile-friendly**  
✅ Polished UI with Tailwind CSS + Heroicons

---

## 🚀 Tech Stack

| Tech         | Description                          |
| ------------ | ------------------------------------ |
| React        | Frontend framework                   |
| Tailwind CSS | Utility-first CSS for styling        |
| Heroicons    | Crisp icons for a modern look        |
| Node.js      | Backend runtime environment          |
| Express      | Minimal REST API framework           |
| OpenAI API   | (Optional) Generate real SEO headlines |

---

## 🗂️ Project Structure

mini-local-business-dashboard/
├── backend/
│ ├── server.js
│ ├── package.json
│ ├── .env (for your OpenAI API key)
│
└── frontend/
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
├── tailwind.config.js
├── package.json


---

## ⚙️ Getting Started

### ✅ Prerequisites

- **Node.js** & **npm** installed
- **Create frontend and backend **

- npm create vite@latest frontend -- --template react
cd frontend
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p



### 📦 Install & Run Backend

npm init -y

cd backend
npm install
npm start

🎨 Install & Run Frontend
cd frontend
npm install
npm run dev
Your frontend runs on http://localhost:5173 (default Vite port).
Your backend runs on http://localhost:5000.

📌 Example API Endpoints
POST /business-data

json
Copy
Edit
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
Returns:

json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
GET /regenerate-headline?name=Cake+%26+Co&location=Mumbai
Returns:

json
{
  "headline": "Discover Why Cake & Co is Mumbai's Top Bakery"
}


💡 Credits
Inspired by GrowthProAI’s local SEO tools.

Built with ❤️ using React, Tailwind

