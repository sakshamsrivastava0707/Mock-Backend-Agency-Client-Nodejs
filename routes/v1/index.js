const express = require("express");
const router = express.Router();
router.use("/agency", require("./agency"));
router.use("/client", require("./client"));


module.exports = router;
