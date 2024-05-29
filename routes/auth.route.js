const express = require("express");
const { registerUser, loginUser, getUserById } = require("../controllers/auth.controller.js");



const router = express.Router();


router.post("/inscription", registerUser);
router.post("/connexion", loginUser);
router.get("/user/:id", getUserById);


module.exports = router;








