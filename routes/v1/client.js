const express = require("express");
const router = express.Router();

const { updateClient } = require("../../service/v1/client");

router.put("/:id", updateClient)

module.exports = router;
