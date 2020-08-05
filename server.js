const express = require("express");
const app = express();
require("dotenv").config()

/* Middleware */
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build/"))
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* API */
const apiRoutes = require("./routes/api-route.js");
app.use("/api", apiRoutes)

/* Error Handling */
const errors = require("./middleware/errors.js");
app.use(errors.pageNotFoundError)
app.use(errors.internalServerError)

/* MongoDB */
const { MONGO_URI, options } = require("./config/keys.js");
const mongoose = require("mongoose");
const connection = mongoose.connection;
const PORT = process.env.PORT || 5000;

connection
.once("open", (_) => console.log("MongoDB Connected — √", "\n" + MONGO_URI))
.on("error", (err) => console.log("Connection Error — ×", "\n" + err))

/* Connection */
mongoose.connect(MONGO_URI, options, (err) => {
  if (err) throw err;

  app.listen(PORT, () => {
    console.log(`Test Server - http://localhost:${PORT}`);
  })
})

// React → "proxy": "http://localhost:5000"