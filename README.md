# 🛠️ Indian Tools Shopping Website

A full-stack e-commerce web application for browsing, managing, and purchasing tools and hardware products.

> 🚧 **Project Status:** This project is currently under development.

The project is being developed using the **MERN stack** to gain practical experience in full-stack web development, including frontend development, backend APIs, database management, authentication, authorization, CRUD operations, and real-time communication.

---

## 📌 Project Overview

**Indian Tools Shopping Website** is an e-commerce application designed for selling tools and hardware products online.

The application provides separate functionalities for **users and administrators**.

Users can register, log in, browse products, add products to their shopping cart, and place orders.

Administrators can manage products, categories, users, and orders through an admin interface.

The main goal of this project is to build a practical full-stack application while learning and implementing real-world **MERN stack development concepts**.

---

## ✨ Features

### 👤 User Features

* User registration and login
* User authentication and authorization
* Browse available products
* View product information
* Add products to shopping cart
* Place orders
* View order information
* Protected user routes
* Real-time notifications

### 👨‍💼 Admin Features

* Admin authentication
* Admin dashboard
* Add products
* Delete products
* Manage product categories
* Manage users
* Manage orders
* Protected admin routes
* Real-time product notifications

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite
* React Router
* Axios

### Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication
* WebSocket

### Database

* MongoDB
* Mongoose

### Tools

* Git
* GitHub
* VS Code
* npm

---

## 📂 Project Structure

```text
Indian-Tools-Shopping-website/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── socket.js
│
├── public/
│   └── product images
│
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── utils/
│
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AfifaTaj0404/Indian-Tools-Shopping-website.git
```

### 2. Navigate to the Project

```bash
cd Indian-Tools-Shopping-website
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Install Backend Dependencies

```bash
cd Backend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the `Backend` folder.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

> ⚠️ Do not add your actual database credentials, passwords, JWT secrets, or other sensitive information to GitHub.

### 6. Start the Backend

Inside the `Backend` folder:

```bash
npm run dev
```

### 7. Start the Frontend

Open another terminal and navigate to the project root:

```bash
cd Indian-Tools-Shopping-website
npm run dev
```

The frontend will run using the Vite development server.

---

## 📸 Screenshots

Screenshots of the application will be added here as the project develops.

### Home Page

![Home Page](screenshots/home.png)

### Products Page

![Products Page](screenshots/products.png)

### Login Page

![Login Page](screenshots/login.png)

### Shopping Cart

![Shopping Cart](screenshots/cart.png)

### Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

---

## 🔮 Future Improvements

* [ ] Product search
* [ ] Product filtering and sorting
* [ ] Product details page improvements
* [ ] Product reviews and ratings
* [ ] Wishlist functionality
* [ ] Product image upload
* [ ] Shopping cart improvements
* [ ] Order tracking
* [ ] Payment gateway integration
* [ ] Email notifications
* [ ] Improved admin dashboard
* [ ] Responsive UI improvements
* [ ] Better error handling and validation
* [ ] Application testing
* [ ] Frontend and backend deployment

---

## 🎯 Learning Objectives

Through this project, I am gaining practical experience in:

* Building React applications
* Creating REST APIs using Node.js and Express.js
* Working with MongoDB and Mongoose
* Implementing authentication and authorization
* Using JWT for secure authentication
* Connecting frontend and backend applications
* Implementing CRUD operations
* Managing application state in React
* Working with protected routes
* Implementing real-time notifications using WebSocket
* Using Git and GitHub for version control
* Understanding full-stack application architecture

---

## 📚 What I Learned

While developing this project, I learned how different components of a MERN application work together.

I gained practical experience in connecting a React frontend with an Express.js and Node.js backend, storing application data in MongoDB, implementing authentication and authorization, creating protected routes, handling CRUD operations, and implementing real-time notifications using WebSocket.

This project is helping me strengthen my understanding of full-stack development through practical implementation and continuous feature development.

---

## 🚧 Project Status

The project is currently under active development.

New features, improvements, testing, and deployment will be added progressively.

---

## 👩‍💻 Author

**Afifa Taj**

BE Computer Science Engineering

GitHub: [AfifaTaj0404](https://github.com/AfifaTaj0404)

---

## 📄 License

This project is developed for learning and portfolio purposes.
