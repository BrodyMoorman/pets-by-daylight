const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const UserController = require('./controllers/UserController');

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not connected', err))

app.use(express.json());
app.use(cors());


app.use('/', require('./routes/authRoutes'))

app.post('/register', UserController.registerUser);

app.get('/verify/:token', async (req, res) => {
  const { token } = req.params;

  const user = await UserController.findOne({ verificationToken: token });
  if (!user) {
    return res.status(404).send('Invalid verification token');
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();

  res.send('Email verified successfully');
});


const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))