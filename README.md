# MERN E-commerce Store

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-ISC-blue)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![MongoDB](https://img.shields.io/badge/database-MongoDB-brightgreen)

## Project Description

A full-stack MERN e-commerce application built for shopping, admin management, order tracking, and secure checkout. The project combines:

- Node.js + Express backend API
- MongoDB data persistence with Mongoose
- JWT authentication with cookie support
- Stripe payment processing
- Cloudinary image uploads
- React + Redux frontend with an admin panel

This application supports product browsing, user accounts, cart management, shipping, order placement, review posting, and admin controls.

---

## Features

- Product listing with search, filters, and pagination
- Product details page with ratings and review management
- User registration, login, profile update, and password reset
- Cart, shipping, order summary, and Stripe checkout
- Admin product CRUD and review moderation
- Admin order status updates and user management
- Cloudinary image upload for product images and user avatars
- Email-based password reset via Nodemailer
- Responsive UI built with Material-UI

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Redux, React Router, Material-UI |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Auth | JWT, HttpOnly Cookies |
| Payments | Stripe |
| Images | Cloudinary |
| Email | Nodemailer |

---

## Folder Structure

```text
.
├── backend
│   ├── app.js
│   ├── server.js
│   ├── config
│   │   ├── config.env
│   │   └── database.js
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── utils
├── frontend
│   ├── public
│   ├── src
│   │   ├── actions
│   │   ├── component
│   │   ├── constants
│   │   ├── reducers
│   │   ├── App.js
│   │   └── store.js
├── package.json
└── README.md
```

### Important folders

- `backend/` — backend API, routes, controllers, models, and utilities
- `backend/config/` — environment configuration and MongoDB connection
- `backend/controllers/` — product, user, order, and payment logic
- `backend/routes/` — REST API endpoints
- `backend/models/` — MongoDB schemas for User, Product, Order
- `frontend/` — React application source code
- `frontend/src/actions/` — Redux actions
- `frontend/src/reducers/` — Redux reducers
- `frontend/src/component/` — UI components and authenticated flows

---

## Prerequisites

- Node.js v14 or higher
- npm
- MongoDB (local or Atlas)
- Stripe account for payment keys
- Cloudinary account for image uploads
- SMTP email credentials for password reset

---

## Installation Guide

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

---

## Backend Setup

Create environment variables in `backend/config/config.env`:

```env
PORT=4000
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_API_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
SMPT_HOST=smtp.example.com
SMPT_PORT=587
SMPT_SERVICE=Gmail
SMPT_MAIL=your_email@example.com
SMPT_PASSWORD=your_email_password
```

> Note: The backend loads `backend/config/config.env` in development mode.

Start the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm start
```

The frontend runs at `http://localhost:3000` by default.

> The frontend proxy in `frontend/package.json` forwards API calls to the backend.

---

## Environment Variables

Use this example for `backend/config/config.env`:

```env
PORT=4000
DB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_API_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
SMPT_HOST=smtp.example.com
SMPT_PORT=587
SMPT_SERVICE=Gmail
SMPT_MAIL=your_email@example.com
SMPT_PASSWORD=your_email_password
```

---

## Database Setup

This application uses MongoDB through Mongoose. Collections are created automatically when users, products, and orders are added.

Example local connection string:

```env
DB_URI=mongodb://localhost:27017/ecommerce
```

Example Atlas connection string:

```env
DB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/ecommerce?retryWrites=true&w=majority
```

---

## Available Scripts

### Root package

```bash
npm run dev
npm start
```

- `npm run dev` — start backend with `nodemon`
- `npm start` — start production backend server
- `npm test` — placeholder script
- `heroku-postbuild` — build the React frontend during Heroku deploy

### Frontend package

```bash
cd frontend
npm start
npm run build
npm test
npm eject
```

- `npm start` — run the frontend development server
- `npm run build` — build production-ready React assets

---

## API Endpoints Overview

### Product Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/products` | Fetch all products with search/filter support |
| GET | `/api/v1/product/:id` | Get product details |
| PUT | `/api/v1/review` | Add or update a product review (auth) |
| GET | `/api/v1/reviews?id=:id` | Get all reviews for a product |
| DELETE | `/api/v1/reviews?id=:id&productId=:productId` | Delete a review (auth) |

### Authentication Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/register` | Register a new user |
| POST | `/api/v1/login` | Login user |
| GET | `/api/v1/logout` | Logout user |
| GET | `/api/v1/me` | Get current user profile |
| PUT | `/api/v1/password/update` | Change password |
| PUT | `/api/v1/me/update` | Update user profile |
| POST | `/api/v1/password/forgot` | Request password reset email |
| PUT | `/api/v1/password/reset/:token` | Reset password |

### Order Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/order/new` | Create a new order |
| GET | `/api/v1/order/:id` | Get order details |
| GET | `/api/v1/orders/me` | Get current user orders |
| GET | `/api/v1/admin/orders` | Get all orders (admin) |
| PUT | `/api/v1/admin/order/:id` | Update order status (admin) |
| DELETE | `/api/v1/admin/order/:id` | Delete an order (admin) |

### Payment Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/payment/process` | Process Stripe payment |
| GET | `/api/v1/stripeapikey` | Fetch Stripe publishable key |

### Admin Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/admin/products` | List all products |
| POST | `/api/v1/admin/product/new` | Create a product |
| PUT | `/api/v1/admin/product/:id` | Update a product |
| DELETE | `/api/v1/admin/product/:id` | Delete a product |
| GET | `/api/v1/admin/users` | List all users |
| GET | `/api/v1/admin/user/:id` | Get one user |
| PUT | `/api/v1/admin/user/:id` | Update user role |
| DELETE | `/api/v1/admin/user/:id` | Delete user |

---

## Authentication Flow

- User registers via `/api/v1/register`
- User logs in via `/api/v1/login`
- Backend issues a JWT and stores it in an HttpOnly cookie
- Protected routes verify the cookie token before granting access
- Admin routes require `role: admin`
- Password reset sends a token via email and uses `/api/v1/password/reset/:token`

---

## Usage Instructions

1. Register a new account or login
2. Browse product catalog
3. Add items to cart
4. Enter shipping details
5. Place order and complete payment through Stripe
6. View order history under account
7. Admin users can manage products, orders, reviews, and users

---

## Production Deployment

Build the frontend and run the backend:

```bash
cd frontend
npm run build
cd ..
npm start
```

The Express server serves `frontend/build` as static files.

> On Heroku, `heroku-postbuild` automatically builds the React app.

---

## Common Errors & Fixes

### `ERR_OSSL_EVP_UNSUPPORTED`

If the build fails on newer Node versions:

```bash
set NODE_OPTIONS=--openssl-legacy-provider && npm start
```

### Missing environment variables

- Confirm `backend/config/config.env` exists
- Verify all required keys are present
- Restart the backend after edits

### MongoDB connection fails

- Ensure MongoDB is running
- Check Atlas credentials and whitelist
- Confirm `DB_URI` is valid

### Stripe payment errors

- Verify your Stripe keys
- Use the correct test or live keys consistently

### Cloudinary upload issues

- Verify `CLOUDINARY_*` values
- Confirm uploaded image data is valid

---

## Troubleshooting

- If API calls fail, update `frontend/package.json` proxy to the backend address
- If reset emails do not send, verify SMTP configuration
- If static files do not load, rebuild the frontend

---

## Contributing Guide

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes
4. Commit with a descriptive message
5. Push to your fork
6. Open a pull request

---

## Git Workflow

- `main` for production code
- feature branches for new work
- keep PRs focused and small
- rebase or merge latest `main` before PRs

---

## Coding Standards

- Use clear, meaningful names
- Keep controllers and components small and maintainable
- Avoid committing `.env` or secrets
- Use centralized error handling in backend
- Keep frontend state logic in Redux where appropriate

---

## Security Notes

- Do not commit API keys or secrets
- Use HTTPS in production
- Keep `JWT_SECRET` strong
- Use HttpOnly cookies for authentication

---

## Performance Notes

- Backend pagination limits product query size
- Cloudinary stores images externally
- Production build serves optimized React assets

---

## Future Improvements

- Add automated unit and integration tests
- Improve mobile responsiveness and accessibility
- Add wishlist / favorites functionality
- Add advanced filtering and categories
- Add caching for product queries

---

## FAQ

**Q: Where do I store environment variables?**  
A: In `backend/config/config.env` for local development.

**Q: How do I run the full app locally?**  
A: Run `npm run dev` from project root for backend, then `cd frontend && npm start`.

**Q: How is production served?**  
A: The backend serves the built React app from `frontend/build`.

---

## License

ISC

---

## Author

Project maintained by the repository owner.
