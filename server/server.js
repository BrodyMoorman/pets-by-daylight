const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const app = express();
const authController = require('./controllers/authController');

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not connected', err))

app.use(express.json());
app.use(cors());


app.use('/', require('./routes/authRoutes'))

app.post('/register', authController.registerUser);

app.get('/verify/:token', async (req, res) => {
  const { token } = req.params;

  const user = await authController.findOne({ verificationToken: token });
  if (!user) {
    return res.status(404).send('Invalid token!');
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();

  res.send('Email verified successfully');
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); 
  }
});

const upload = multer({ storage: storage });
app.post('/upload', upload.array('images', 5), authController.handleImageUpload);


const port = 9035;
app.listen(port, () => console.log(`server is running on port ${port}`))