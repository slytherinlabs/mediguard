const express = require("express");
const addToWaitlist = require("../controllers/waitlist.controller");

const router = express.Router();

router.post("/waitlist", addToWaitlist);

module.exports = router;
