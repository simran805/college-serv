const express = require('express');
const router = express.Router();

const { LoginUser, signupUser } = require("../controllers/LoginController");


router.post('/signup', signupUser);
router.post('/login', LoginUser);

module.exports = router;