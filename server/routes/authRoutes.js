const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, } = require('../controllers/authController');
const { listingFilter } = require('../controllers/homeController');
const multer = require("multer");

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "../client/public/uploads");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
})
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/home", listingFilter);


module.exports = router;