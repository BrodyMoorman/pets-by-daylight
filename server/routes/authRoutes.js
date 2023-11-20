const express = require('express');
const router = express.Router();
const cors = require('cors');
const authController = require('../controllers/authController');
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', authController.test);
router.post('/register', authController.registerUser);
router.post('/create-listing', authController.createListing);
module.exports = router;