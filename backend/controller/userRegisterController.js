const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");


async function createUserRegister(req, res) {
    
    const { first_name, 
            last_name, 
            username, 
            email, 
            password, 
            user_address,
            user_role
           } 
            = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const { password: passwordDB, ...user } = await prisma.user.create({
      data: {
        first_name,
        last_name,
        username,
        email,
        password: hashedPassword,
        user_address,
        user_role,
      },
    });
    res.json({ user });
  }
  catch (err) {
    res.status(400).json({ message: "User already exists" });
  }
};




module.exports = {
  createUserRegister,
};
