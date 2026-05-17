# E-Commerce Frontend

A full-featured e-commerce frontend application built with React and Redux, designed to work with a MERN stack backend. This is a complete shopping platform with user authentication, product browsing, cart management, checkout, order processing, and admin functionality.

## 🚀 Features

### User Management
- **Authentication:** Login/Register with email and password
- **Profile Management:** View and update user profile
- **Password Management:** Forgot password, reset password, update password
- **Avatar Upload:** User profile pictures during registration
- **Session Management:** Auto-load user on app start

### Product Browsing & Search
- Browse all products on home page
- **Advanced Search:** Filter by keyword, price range, category, and ratings
- **Pagination:** Display products in pages
- **Product Details:** Comprehensive product view with images, specifications, and reviews
- **Product Categories:** Laptop, Footwear, Bottom, Tops, Attire, Camera, SmartPhones
- **Rating & Reviews:** View and submit product reviews with ratings

### Shopping Cart
- Add/remove items from cart
- Adjust product quantities
- Real-time stock validation
- Persistent cart storage (localStorage)
- Calculate subtotals

### Checkout & Order Process
- **Multi-step checkout:** Shipping → Confirm Order → Payment
- **Shipping Details:** Address, city, state, country, pin code, phone number
- **Order Confirmation:** Review items, prices, taxes, and shipping charges
- **Payment Integration:** Stripe payment gateway
- **Order Success:** Confirmation page with order details

### Order Management
- **My Orders:** View personal order history with status tracking
- **Order Details:** View complete order information, items, and delivery status
- **Order Tracking:** Real-time status updates (Processing, Shipped, Delivered)

### Admin Panel
- **Dashboard:** Overview with charts showing total revenue and inventory status
- **Product Management:** View, create, update, and delete products
- **Order Management:** View all orders, update order status, delete orders
- **User Management:** View all users, update user details, delete users
- **Product Reviews:** Manage and delete product reviews
- **Analytics:** Doughnut chart for stock status, Line chart for revenue

### Navigation & Layout
- **Header:** Logo, navbar with Home/Products/Contact/About links
- **Footer:** Standard footer layout
- **Sidebar:** Admin navigation panel
- **Responsive:** Overlay navbar for mobile navigation

## 🛠️ Technology Stack

**Core:**
- React 17.0.2 with React Router DOM 5.2.0
- Redux 4.1.1 with Redux Thunk middleware
- Axios for API calls
- Material-UI components and icons

**Key Libraries:**
- **Payment:** Stripe integration (@stripe/react-stripe-js)
- **UI Components:** Material-UI DataGrid, Carousel, Pagination, Slider
- **Charting:** Chart.js with react-chartjs-2
- **Location:** country-state-city library for shipping
- **Notifications:** react-alert for user feedback
- **Utilities:** Helmet for meta tags, WebFont loader

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mernProjectEcommerce/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   REACT_APP_API_URL=http://localhost:4000/api/v1
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🚀 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   ├── store.js
│   ├── actions/
│   │   ├── cartAction.js
│   │   ├── orderAction.js
│   │   ├── productAction.js
│   │   └── userAction.js
│   ├── component/
│   │   ├── Admin/
│   │   │   ├── Dashboard.js
│   │   │   ├── NewProduct.js
│   │   │   ├── OrderList.js
│   │   │   ├── ProcessOrder.js
│   │   │   ├── ProductList.js
│   │   │   ├── ProductReviews.js
│   │   │   ├── Sidebar.js
│   │   │   ├── UpdateProduct.js
│   │   │   ├── UpdateUser.js
│   │   │   └── UsersList.js
│   │   ├── Cart/
│   │   │   ├── Cart.js
│   │   │   ├── CartItemCard.js
│   │   │   ├── CheckoutSteps.js
│   │   │   ├── ConfirmOrder.js
│   │   │   ├── OrderSuccess.js
│   │   │   ├── Payment.js
│   │   │   └── Shipping.js
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── ProductCard.js
│   │   ├── layout/
│   │   │   ├── MetaData.js
│   │   │   ├── About/
│   │   │   │   └── About.js
│   │   │   ├── Contact/
│   │   │   │   └── Contact.js
│   │   │   ├── Footer/
│   │   │   │   └── Footer.js
│   │   │   ├── Header/
│   │   │   │   ├── Header.js
│   │   │   │   └── UserOptions.js
│   │   │   ├── Loader/
│   │   │   │   └── Loader.js
│   │   │   └── Not Found/
│   │   │       └── NotFound.js
│   │   ├── Order/
│   │   │   ├── MyOrders.js
│   │   │   └── OrderDetails.js
│   │   ├── Product/
│   │   │   ├── ProductDetails.js
│   │   │   ├── Products.js
│   │   │   ├── ReviewCard.js
│   │   │   └── Search.js
│   │   ├── Route/
│   │   │   └── ProtectedRoute.js
│   │   └── User/
│   │       ├── ForgotPassword.js
│   │       ├── LoginSignUp.js
│   │       ├── Profile.js
│   │       ├── ResetPassword.js
│   │       ├── UpdatePassword.js
│   │       └── UpdateProfile.js
│   ├── constants/
│   │   ├── cartConstants.js
│   │   ├── orderConstants.js
│   │   ├── productConstants.js
│   │   └── userConstants.js
│   ├── images/
│   │   └── cover.jfif
│   └── reducers/
│       ├── cartReducer.js
│       ├── orderReducer.js
│       ├── productReducer.js
│       └── userReducer.js
├── package.json
└── README.md
```

## 🔗 API Endpoints

**User:** `/api/v1/login`, `/api/v1/register`, `/api/v1/me`, `/api/v1/logout`, `/api/v1/me/update`, etc.

**Products:** `/api/v1/products`, `/api/v1/product/:id`, `/api/v1/admin/product/new`, `/api/v1/admin/products`, etc.

**Orders:** `/api/v1/order/new`, `/api/v1/orders/me`, `/api/v1/admin/orders`, `/api/v1/payment/process`, etc.

**Payment:** `/api/v1/stripeapikey`

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API server running (MERN stack backend)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email [your-email@example.com] or join our Slack channel.

## 🙏 Acknowledgments

- React documentation
- Material-UI documentation
- Stripe documentation
- All contributors and maintainers

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
