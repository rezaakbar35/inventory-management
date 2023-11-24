const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require('cors');
const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser())

const productShippingRoutes = require("./routes/productShippingRoutes");
const userLoginRoutes = require("./routes/userLoginRoutes")
const userRegisterRoutes = require("./routes/userRegisterRoutes")
const warehouseRoutes = require("./routes/warehouseRoutes")
const warehouseCategoryRoutes = require("./routes/warehouseCategoryRoutes")
const productCategoryRoutes = require("./routes/productCategoryRoutes")
const { authenticateUser, authenticateAdmin, authenticateWarehouse } = require("./middleware/authMiddleware");


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  optionsSuccessStatus: 200
}));


//register 
app.use("/", userRegisterRoutes);

//Login 
app.use("/", userLoginRoutes);

// Warehouse
app.use("/warehouse", warehouseRoutes);

// Warehouse Category
app.use("/warehouse-category", warehouseCategoryRoutes)

// Product Shipping
app.use("/product-shipping", productShippingRoutes);

// Product Category
app.use("/product-category", authenticateUser, productCategoryRoutes)

// Middleware untuk penanganan kesalahan jika rute tidak ditemukan
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// Start the server
if(process.env.NODE_ENV != "test") {
  app.listen(8000, () => {
    console.log('Server started on port 8000');
  });
}

module.exports = app
