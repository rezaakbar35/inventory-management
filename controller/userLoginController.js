const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function createUserLogin(req, res) {
  const {
    username,
    password,
  } = req.body;

  try {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, "inikodesangatsangatrahasia");
    res.setHeader("Set-Cookie", `token=${ token }; httpOnly; path=/`);
    res.json({ user });

  }
  catch (err) {
    console.log(err);
    res.status(400).json({ message: "Invalid credentials" });
  }
};



module.exports = {
  createUserLogin,
};
