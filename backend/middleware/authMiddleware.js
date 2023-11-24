const jwt = require("jsonwebtoken");
require('dotenv').config();
const { PrismaClient } = require("@prisma/client");
const cookieParser = require('cookie-parser'); // Add cookie-parser
const prisma = new PrismaClient();

function authenticateRole(role) {
  return async (req, res, next) => {
    try {
      // Use req.cookies.token instead of Cookies.get('token')
      const token = req.cookies.token;

      if (token == null) return res.sendStatus(401);

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      if (!decodedToken || !decodedToken.userId) {
        return res.sendStatus(401);
      }

      req.user_id = decodedToken.userId;
      const user = await prisma.user.findUnique({
        where: { user_id: req.user_id },
      });

      if (user && user.user_role === role) {
        next();
      } else {
        res.sendStatus(403); // Forbidden
      }
    } catch (error) {
      console.error("Authentication error:", error);
      res.sendStatus(500); // Internal Server Error
    }
  };
}

// Use cookieParser middleware
const authenticateUser = authenticateRole("user");
const authenticateAdmin = authenticateRole("admin");
const authenticateWarehouse = authenticateRole("warehouse");

module.exports = { authenticateUser, authenticateAdmin, authenticateWarehouse };
