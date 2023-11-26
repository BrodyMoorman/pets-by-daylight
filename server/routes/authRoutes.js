const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, } = require('../controllers/authController');
const { listingFilter } = require('../controllers/homeController');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/home", listingFilter);


module.exports = router;