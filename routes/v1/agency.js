const express = require("express");
const { addClientAndAgency, getListOfAgencyWithTopClients } = require("../../controllers/v1/agency");
const router = express.Router();

// router.post('/', (req, res) => {
//     res.send('oka')
// })

// POST
router.post("/agency-client", addClientAndAgency);
router.get("/agency-client", getListOfAgencyWithTopClients);


module.exports = router;
