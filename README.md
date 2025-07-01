# 🔗 URL Shortener

A simple and powerful Node.js-based URL Shortener web app that lets users convert long URLs into short, shareable links — with click tracking and clipboard copy functionality.

---

## 🚀 Features

- ✂️ Shorten long URLs into clean, unique short links
- 📈 Track how many times each short link has been clicked
- 📋 Copy short URLs directly with a "Copy to Clipboard" button
- 🎯 Shows only the most recently created link (no history clutter)
- 💾 Built using MongoDB, Mongoose, Express, EJS, and Bootstrap
- 🔒 Secure secret/session handling with .env and express-session

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, EJS, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (via Mongoose)
- **Session Management:** express-session

---

## 🧑‍💻 How to Run the Project

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Create a .env File
Inside the root of the project, create a .env file and add your MongoDB URI:
```bash
MONGO_URI=your_mongodb_connection_string
```
Replace with your actual MongoDB Atlas URI

---

### 4. Start the Server
```bash
npm start
```
Then open your browser and visit:
```http://localhost:5000
```
---

### 🧾 Folder Structure
```pgsql
url-shortener/
├── models/
│   └── shortUrl.js
├── views/
│   └── index.ejs
├── .env
├── .gitignore
├── server.js
└── package.json
```

---


## 📦 Future Improvements
🧑‍💼 Add user authentication (login/signup)

📊 Click analytics dashboard (charts, filters)

🌐 Deploy online (Render, Vercel, etc.)

⏳ Link expiry or deletion options

---

### 🌍 Live Demo
Coming soon... (Let me know if you want help deploying to Render!)

---

### 🧑‍🎓 Author
Poojitha Velamala
Passionate full-stack developer | Clean code enthusiast

---

### 🛡️ License

This project is licensed under the [MIT License](LICENSE). 
You are free to use, modify, and share it with proper attribution.  


