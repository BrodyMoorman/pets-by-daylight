const User = require('../models/mongo') 
const nodemailer = require('nodemailer');
 
 const test = (req, res) => {
    res.json('test is working')
 }

 function generateToken() {
   return Math.random().toString(36).slice(2);
 }

 const registerUser = async (req, res) => {
   try {
      const {username, email, password} = req.body
      // check if name was entered
      /*
      if (!username) {
         return res.json({
            error: 'username is required'
         })
      };
      */
      if (!password) {
         return res.json({
            error: 'Password is required'
         })
      };
      //check email
      const exist = await User.findOne({email});
      if (exist) {
         return res.json({
            error: 'Email is taken'
         })
      }

      //generate token
      const verificationToken = generateToken();


      const user = await User.create({
         username, email, password, verificationToken
      })
      
      await user.save();

      const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
           user: 'example@gmail.com',
           pass: 'example password'
         }
       });

       const mailOptions = {
         from: 'your_email@gmail.com',
         to: email,
         subject: 'Email Verification',
         text: `Click the following link to verify your email: http://localhost:3000/verify/${verificationToken}`
       };

       transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
           return console.log(error);
         }
         console.log('Email sent: ' + info.response);
       });

       res.send('Registration successful. Check your email for verification.');




      return res.json()
   } catch (error) {
      console.log(error)
   }
 }
 

 

 module.exports = {
    test,
    registerUser,
 }