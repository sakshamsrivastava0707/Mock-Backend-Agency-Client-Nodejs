const express = require("express");
const app = express();

const port = 3001;

// CORS, JSON and URL Encoded Middlewares
const cors = require("cors");
const db = require("./config/mongooseConnection");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// db()

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
