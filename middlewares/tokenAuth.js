const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenAuth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({
      errors: [{ msg: "Sin token 😲" }],
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.jwtSecret);
    req.uid = uid;
    next();
  } catch (error) {
    return res.status(401).json({
      errors: [{ msg: "Token no válido 🤬" }],
    });
  }
};

module.exports = tokenAuth;
