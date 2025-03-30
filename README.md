# 🚀 **Expensify Backend**

**Expensify Backend** is a production-grade RESTful API built with **Node.js**, **Express.js**, and **MongoDB** to manage expenses efficiently. It offers robust user authentication, transaction management, and secure data handling. This backend is designed for scalability, performance, and reliability, making it suitable for real-world deployment.

---

## ✅ **Key Features**

- 🔐 **User Authentication:** Secure registration and login functionality with hashed passwords and JWT-based authentication.  
- 💰 **Expense Management:** Add, edit, delete, and retrieve expenses with advanced filtering and sorting.  
- 🗄️ **Database Integration:** MongoDB with Mongoose ODM for efficient and scalable data storage.  
- ⚙️ **Middleware:** CORS handling, logging, and JSON parsing for smooth API interactions.  
- 🛠️ **Error Handling:** Centralized error management with detailed status codes and messages.  
- 🌐 **Environment Configuration:** `.env` support for secure configuration.  
- 🚀 **Production Ready:** PM2 and Docker support for production-grade deployment.  

---

## 🛠️ **Tech Stack**

| Layer          | Technology           |
|----------------|-----------------------|
| **Backend**    | Node.js, Express.js  |
| **Database**   | MongoDB, Mongoose ODM |
| **Utilities**  | Moment.js (date handling), Colors.js (logging) |
| **Environment**| dotenv (configuration management) |
| **Dev Tools**  | Nodemon, Morgan, Concurrently |
| **Deployment** | PM2, Docker, CI/CD Ready |

---

## ⚙️ **Installation & Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/expensify-backend.git
cd expensify-backend
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root directory and add the following:
```
PORT=8080
MONGO_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
NODE_ENV=development
```

### **4. Start the Server**
- **Development Mode:**  
```bash
npm run dev
```
- **Production Mode (PM2)**:  
```bash
pm2 start server.js --name "expensify-backend"
```

---

## 🔥 **API Endpoints**

### **User Routes**
| Method   | Endpoint                  | Description               |
|---------|----------------------------|---------------------------|
| POST    | `/api/v1/users/register`    | Register a new user       |
| POST    | `/api/v1/users/login`       | Login a user              |
| GET     | `/api/v1/users/profile`     | Get user profile          |

### **Transaction Routes**
| Method   | Endpoint                        | Description                  |
|---------|----------------------------------|------------------------------|
| POST    | `/api/v1/transactions/add`       | Add a new transaction        |
| PUT     | `/api/v1/transactions/edit/:id`  | Edit an existing transaction |
| DELETE  | `/api/v1/transactions/:id`       | Delete a transaction         |
| GET     | `/api/v1/transactions`           | Retrieve filtered expenses   |

---

## 🗃️ **Folder Structure**
```
/config           -> MongoDB connection and env config
/controllers      -> API controllers (business logic)
/middleware       -> Auth and error handling middleware
/models           -> MongoDB models (Mongoose schemas)
/routes           -> Route handlers
/utils            -> Utility functions
.env              -> Environment variables
server.js         -> Main entry point
package.json      -> Project dependencies
```

---

## 🚀 **Deployment**

### **1. Docker Deployment**
To containerize the app, create a `Dockerfile`:
```dockerfile
# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Expose the port and run server
EXPOSE 8080
CMD ["node", "server.js"]
```
- **Build and run the container:**
```bash
docker build -t expensify-backend .
docker run -p 8080:8080 expensify-backend
```

### **2. PM2 for Production**
Use PM2 for process management:
```bash
pm2 start server.js --name "expensify-backend"
pm2 save
pm2 status
```

### **3. CI/CD Pipeline (Optional)**
Integrate CI/CD pipelines with GitHub Actions or GitLab CI to automate testing and deployment.

---

## ⚡ **Security & Best Practices**
- 🔑 Use HTTPS for secure communication in production.  
- 🔥 Store sensitive information (e.g., MongoDB URI, JWT secret) in `.env` files.  
- 🚀 Use **helmet.js** to secure HTTP headers.  
- ⏱️ Implement rate limiting to prevent brute-force attacks.  
- ✅ Validate user input to prevent NoSQL injection.  

---


## 📩 **Contact**

For any inquiries or support, reach out to:  
📧 **Email:** [shashikrpatwa36@gmail.com](mailto:shashikrpatwa36@gmail.com)  
🌐 **GitHub:** [Shashi Kumar](https://github.com/Shashikr36)  

---

