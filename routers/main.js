const express = require("express");
const router = express.Router();
const {abaut,jom} = require("../controllers/mainController");

router.get("/",jom);
router.get("/about",abaut);


module.exports = router;