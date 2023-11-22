const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require('cors');
const path = require('path');
const express = require('express');
const jwt = require("jsonwebtoken");
const app = express();
const productShippingRoutes = require("./routes/productShippingRoutes");
const userLoginRoutes = require("./routes/userLoginRoutes")
const userRegisterRoutes = require("./routes/userRegisterRoutes")

function authenticateTokenMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  const user = jwt.verify(token, "inikodesangatsangatrahasia");
  req.userId = user.userId;
  next();
}

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  optionsSuccessStatus: 200
}));

app.use("", productShippingRoutes);

//register 
app.use("",userRegisterRoutes);

//Login 
app.use("",userLoginRoutes);

// Middleware untuk penanganan kesalahan jika rute tidak ditemukan
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// Start the server
app.listen(8000, () => {
  console.log('Server started on port 8000');
});