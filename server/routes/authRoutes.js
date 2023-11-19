const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser } = require('../controllers/authController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test);
router.post('/register', registerUser);
router.post('/create-listing', authController.createListing);

module.exports = router;