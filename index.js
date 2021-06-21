const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const path = require("path");
const history = require("connect-history-api-fallback");

const app = express();

// Conectar a DB
conectarDB();

// Middleware (acepta req.body)
app.use(express.json({ extended: false }));
app.use(cors());

// Rutas
app.use("/api/user", require("./routes/auth"));
app.use("/api/todo", require("./routes/todo"));

// app.get("/", (req, res) => res.send("api 🚀"));
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("3 2 1... 🚀");
});
