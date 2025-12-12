# 🛒 MERN E-Commerce Application

A complete, production-ready **MERN Stack E-Commerce Application** built using  
**MongoDB, Express, React, and Node.js**.

This project follows the MERN tutorial series by **Abhishek Singh (6 Pack Programmer)**  
and is designed to be a clean, structured reference for MERN learners and open-source contributors.

---

## ⭐ Features

### 👤 User Features
- User registration & login (JWT Authentication)  
- Update profile / change password  
- Add items to cart  
- Create orders & view order history  
- Forgot password + reset via email  
- Cloud-hosted product images (Cloudinary)

### 🛠️ Admin Features
- Create / edit / delete products  
- Manage all users  
- Manage all orders  
- Admin-only protected routes  
- Dashboard (expandable for analytics)

---

## 🧰 Tech Stack

### **Frontend**
- React  
- Redux Toolkit  
- Axios  
- React Router  

### **Backend**
- Node.js  
- Express  
- MongoDB & Mongoose  
- Cloudinary  
- Stripe (optional)

---

## 📁 Project Structure

```
mernProjectEcommerce/
│── backend/        # Express + Node.js API
│── frontend/       # React UI
│── config/         # Environment configuration
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/dipgarg0011/mernProjectEcommerce.git
cd mernProjectEcommerce
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔑 Environment Variables Setup

Create a file:

```
backend/config/config.env
```

Paste this inside:

```env
# ---------------------------------
# BASIC SERVER CONFIG
# ---------------------------------
PORT=4000
DB_URI=your_mongodb_connection_string


# ---------------------------------
# JWT AUTH CONFIG
# ---------------------------------
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=5d
COOKIE_EXPIRE=5


# ---------------------------------
# STRIPE PAYMENT (OPTIONAL)
# ---------------------------------
STRIPE_API_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key


# ---------------------------------
# SMTP EMAIL CONFIG
# (Used for Forgot Password)
# ---------------------------------
SMPT_SERVICE=gmail
SMPT_MAIL=your_email@gmail.com
SMPT_PASSWORD=your_email_app_password
SMPT_HOST=smtp.gmail.com
SMPT_PORT=465


# ---------------------------------
# CLOUDINARY IMAGE STORAGE
# ---------------------------------
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## ▶️ Run the Project

### Start Backend
```bash
cd backend
npm start
```

### Start Frontend
```bash
cd frontend
npm start
```

---

## 📦 Build for Production

```bash
cd frontend
npm run build
```

---

## 📚 Tutorial Credits (Source)

This project is based on the MERN course by **Abhishek Singh (6 Pack Programmer)**:

- Node.js — https://youtu.be/BSO9C8Z-YV8  
- React — https://youtu.be/99kgUCIMboY  
- Express — https://youtu.be/teipbke8c4A  
- MongoDB — https://youtu.be/AYDP1S5BbTo  
- REST API (optional) — https://youtu.be/AhCSfuG9Jxw  

---

## 🤝 Contributing

Contributions are welcome!  
If you want to contribute:

1. **Fork** the repo  
2. Create a feature branch  
3. Commit your changes  
4. Open a **Pull Request**

---

## 🧑‍💻 Author

Created & maintained by **Dipanshu Garg**  
Feel free to connect for collaboration or suggestions!

---

