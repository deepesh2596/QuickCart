QuickCart - E-commerce Platform

## Overview
QuickCart is a full-stack e-commerce web application that provides a seamless shopping experience. This project is built using Next.js, Express.js, and MongoDB, incorporating modern authentication, event management, and efficient database handling.

---

🔥 Features
- User Authentication: Secure authentication using Clerk for seamless login and session management.
- Product Management: Browse, search, and view product details with an optimized user experience.
- Cart Functionality: Add, update, and remove items from the cart with real-time updates.
- Order Processing: Secure order placement and tracking.
- Seller Dashboard: Sellers can list and manage products easily.
- Event-Driven Architecture: Powered by Inngest to handle asynchronous tasks efficiently.
- Batch Processing: Optimized database operations for scalability and performance.
- Responsive Design: Fully responsive and mobile-friendly UI.

### 🛠️ Tech Stack
- Frontend: Next.js (v15.1.6), react.js, Tailwind CSS
- Backend: Node.js & Express.js, MongoDB & Mongoose, Clerk (User Authentication), Inngest (Event Handling & Background Jobs), Axios (API Requests), Cloudinary (Media Uploads)

---

### 🔧 Installation & Setup

## 🔹 Before You Start, Ensure You Have the Following Installed:
- **Node.js** (Latest LTS Version)
- **MongoDB Atlas** (or a local MongoDB instance)
- **Git** (for cloning the repository)
- **A Package Manager** (`npm` or `yarn`)
- **Cloudinary Account** (for media storage)
- **Any Code Editor** (VS Code recommended)

  ### Steps
  1. Clone this repository:
   ```bash
   git clone https://github.com/deepesh2596/QuickCart.git
   cd QuickCart
   ```
 2. Install dependencies:
   ```bash
   npm install
   ```
 3. Set Up Environment Variables
- Create a .env.local file in the root directory and configure the following:

 **Public Environment Variables:**
   ```bash
   NEXT_PUBLIC_CURRENCY=your_currency
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```
 **Private Environment Variables:**
   ```bash
   CLERK_SECRET_KEY=your_clerk_secret_key
   MONGODB_URI=your_mongodb_connection_string
   INNGEST_SIGNING_KEY=your_inngest_signing_key
   INNGEST_EVENT_KEY=your_inngest_event_key

# Cloudinary
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
   
  4. Run the Application
     ```bash
     npm run dev
     ```
  5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the project.

---

### 🚀 Deployment
This project is deployed on Vercel for the frontend and MongoDB Atlas for the database.

### 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork this repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request

---

### 📧 Contact
If you have any questions or suggestions, feel free to reach out:

Email: deepesh2596@gmail.com 🚀
GitHub: deepesh2596




     









 
