const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const tokenAuth = require("../middlewares/tokenAuth");

const User = require("../models/User");

router.get("/validar", tokenAuth, (req, res) => {
  res.json({
    errors: false,
    msg: "Todo perfecto!",
  });
});

// Ruta: api/user/signup
// Acceso: Público
// Descripción: Permite crear cuentas de usuario
router.post(
  "/signup",
  [
    body("name", "Ingrese un nombre").trim().notEmpty(),
    body("email", "Ingrese un email válido").isEmail(),
    body("password", "Contraseña de 6 o más carácteres").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const { name, email, password } = req.body;
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Usuario ya existe en db" }] });
      }
      user = new User(req.body);

      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(password, salt);

      await user.save();

      const payload = {
        uid: user.id,
        name: user.name,
        email: user.email,
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: "20 days" },
        (err, token) => {
          if (err) throw err;
          res.json({
            errors: false,
            token: token,
          });
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        errors: [{ msg: "Error de Servidor 🤦‍♂️" }],
      });
    }
  }
);

// Ruta: api/user/login
// Acceso: Público
// Descripción: Permite accedera a usuarios
router.post(
  "/login",
  [
    body("email", "Ingrese un email válido").isEmail(),
    body("password", "Contraseña de 6 o más carácteres").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: "No existe correo" }],
        });
      }

      const passwordOK = bcrypt.compareSync(password, user.password);
      if (!passwordOK) {
        return res.status(400).json({
          errors: [{ msg: "Contraseña incorrecta" }],
        });
      }

      const payload = {
        uid: user.id,
        name: user.name,
        email: user.email,
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: "20 days" },
        (err, token) => {
          if (err) throw err;
          res.json({
            errors: false,
            token: token,
          });
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        errors: [{ msg: "Error de Servidor 🤦‍♂️" }],
      });
    }
  }
);

module.exports = router;
