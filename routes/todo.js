const router = require("express").Router();
const tokenAuth = require("../middlewares/tokenAuth");
const { body, validationResult } = require("express-validator");

const Todo = require("../models/Todo");

router.get("/id/:id", tokenAuth, async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    if (!todo) {
      return res.status(404).json({
        errors: [{ msg: "No existe el todo 🤷" }],
      });
    }

    if (todo.uid.toString() !== req.uid) {
      return res.status(401).json({
        errors: [{ msg: "Cuidado no es tu todo 🤬" }],
      });
    }

    res.json({
      errors: false,
      todo,
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        errors: [{ msg: "No existe el todo 🤷" }],
      });
    }
    return res.status(500).json({
      errors: [{ msg: "Error de Servidor 🤦‍♂️" }],
    });
  }
});

router.put(
  "/:id",
  [
    tokenAuth,
    body("text", "Ingrese un texto").trim().notEmpty(),
    body("done", "Ingrese un estado").trim().notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    try {
      const todo = await Todo.findOne({ _id: req.params.id });
      if (!todo) {
        return res.status(404).json({
          errors: [{ msg: "No existe el todo 🤷" }],
        });
      }

      if (todo.uid.toString() !== req.uid) {
        return res.status(401).json({
          errors: [{ msg: "Cuidado no es tu todo 🤬" }],
        });
      }

      const { done, text } = req.body;

      const todoUpdate = await Todo.findByIdAndUpdate(
        req.params.id,
        { done, text },
        { new: true }
      );

      res.json({
        errors: false,
        todoUpdate,
      });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(400).json({
          errors: [{ msg: "No existe el todo 🤷" }],
        });
      }
      if (error.kind === "Boolean") {
        return res.status(400).json({
          errors: [{ msg: "Formato done incorrecto 🤷" }],
        });
      }
      return res.status(500).json({
        errors: [{ msg: "Error de Servidor 🤦‍♂️" }],
      });
    }
  }
);

router.delete("/:id", tokenAuth, async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    if (!todo) {
      return res.status(404).json({
        errors: [{ msg: "No existe el todo 🤷" }],
      });
    }

    if (todo.uid.toString() !== req.uid) {
      return res.status(401).json({
        errors: [{ msg: "Cuidado no es tu todo 🤬" }],
      });
    }

    await Todo.findByIdAndDelete(req.params.id);

    res.json({
      errors: false,
      msg: "Todo eliminado!",
    });
  } catch (error) {
    // console.log(error);
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        errors: [{ msg: "No existe el todo 🤷" }],
      });
    }
    return res.status(500).json({
      errors: [{ msg: "Error de Servidor 🤦‍♂️" }],
    });
  }
});

router.get("/", tokenAuth, async (req, res) => {
  try {
    const todos = await Todo.find({ uid: req.uid });

    res.json({
      errors: false,
      todos: todos,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errors: [{ msg: "Error de Servidor 🤦‍♂️" }],
    });
  }
});

router.post(
  "/",
  [tokenAuth, body("text", "Ingrese un texto").trim().notEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const objetoTodo = new Todo(req.body);
    objetoTodo.uid = req.uid;

    try {
      const todo = await objetoTodo.save();
      res.json({
        errors: false,
        todo: todo,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        errors: [{ msg: "Error de Servidor 🤦‍♂️" }],
      });
    }
  }
);

module.exports = router;
