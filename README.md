🚀 MERN Ecommerce Project

A full-stack MERN (MongoDB, Express, React, Node.js) ecommerce application built for learning, scalability, and real-world contribution practice.

📌 Table of Contents
About Project
Features
Tech Stack
Project Structure
Prerequisites
Installation
Environment Setup
Backend Setup
Frontend Setup
Running Project
API Overview
Contribution Guide
Coding Standards
Troubleshooting
Future Improvements
License
Support
📖 About Project

This project is a full-stack ecommerce application designed to demonstrate modern web development practices using the MERN stack. It includes authentication, product management, cart system, and admin functionality.

The goal is to help beginners understand real-world project architecture and contribute to open-source development.

✨ Features
User Authentication (Login/Register)
JWT-based secure authentication
Product listing & filtering
Shopping cart system
Admin dashboard
RESTful APIs
MongoDB database integration
Responsive UI
Protected routes
Scalable folder structure
🛠 Tech Stack
Frontend
React
HTML5
CSS3
JavaScript
Backend
Node.js
Express.js
Database
MongoDB
Tools
Git
Postman
VS Code
📁 Project Structure
mernProjectEcommerce/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.js
│   │   ├── index.js
│
├── README.md
🔧 Prerequisites

Make sure you have installed:

Node.js (LTS recommended)
Git
MongoDB
📦 Installation Guide
Step 1: Clone Repository
git clone https://github.com/your-username/your-repo.git
cd your-repo
🖥 Backend Setup
Step 1: Move to backend
cd backend
Step 2: Install dependencies
npm install
Step 3: Create environment file

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Step 4: Start server
npm run dev
🎨 Frontend Setup
Step 1: Move to frontend
cd ../frontend
Step 2: Install dependencies
npm install
Step 3: Start frontend
npm start
🌐 Application URLs
Frontend: http://localhost:3000
Backend: http://localhost:5000
🔌 API Overview
Auth APIs
POST /api/auth/register
POST /api/auth/login
Product APIs
GET /api/products
POST /api/products (admin)
Cart APIs
POST /api/cart
GET /api/cart
🔐 Environment Variables
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secret_key
🤝 Contribution Guide

We welcome contributions from everyone.

Steps to contribute:
1. Fork repo

Click "Fork" on GitHub.

2. Create branch
git checkout -b feature/your-feature
3. Commit changes
git commit -m "feat: add new feature"
4. Push branch
git push origin feature/your-feature
5. Open Pull Request

Go to GitHub → Open PR → Describe changes clearly.

📌 Coding Standards
Use meaningful variable names
Follow modular architecture
Avoid duplicate code
Keep commits small
Follow REST API standards
Never push .env file
🧪 Testing

You can test APIs using:

Postman
Thunder Client
⚠️ Common Issues
Error: ERR_OSSL_EVP_UNSUPPORTED

Fix:

set NODE_OPTIONS=--openssl-legacy-provider
Port already in use
npx kill-port 3000
🚀 Future Improvements
Payment gateway integration
Product reviews system
Wishlist feature
Order tracking
Admin analytics dashboard
Docker support
Deployment (Vercel / Render)