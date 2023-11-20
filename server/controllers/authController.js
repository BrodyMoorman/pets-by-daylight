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
         text: `Click here to verify your email: http://localhost:3000/verify/${verificationToken}`
       };

       transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
           return console.log(error);
         }
         console.log('Email sent: ' + info.response);
       });

       res.send('Registration successful. Check your email for verification link.');




      return res.json()
   } catch (error) {
      console.log(error)
   }
 }

 const createListing = async (req, res) => {
   try {
     const {
       pet_name,
       pet_breed,
       pet_species,
       female,
       pet_color,
       pet_birthday,
       pet_weight,
       pet_description,
       vaccinated,
       image_urls,
       adoption_fee,
       zip_code
     } = req.body;
 
     const { _id: owner_id, email: owner_email } = req.user;
 
     const newListing = await Listing.create({
       owner_id,
       owner_email,
       pet_name,
       pet_breed,
       pet_species,
       female,
       pet_color,
       pet_birthday,
       pet_weight,
       pet_description,
       vaccinated,
       image_urls,
       adoption_fee,
       zip_code
     });
 
     res.status(201).json(newListing);
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Error' });
   }
 };

 const handleImageUpload = async (req, res) => {
   try {
     const { images } = req.files;
     const imageUrls = images.map(image => `/uploads/${image.filename}`);
     res.json({ message: 'Images uploaded successfully', imageUrls });
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Error' });
   }
 };
 

 

 module.exports = {
    test,
    generateToken,
    registerUser,
    createListing,
    handleImageUpload
 }