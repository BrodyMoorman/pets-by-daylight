const User = require('../models/usersSchema') 
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');
 
const test = (req, res) => {
   res.json('test is working')
}


const registerUser = async (req, res) => {
   try {
      const {first_name, last_name, email, password} = req.body
      // check if name was entered
      
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

      const hashedPassword = await hashPassword(password)

      const user = await User.collection.insertOne({
         password: hashedPassword, 
         email: email, 
         first_name: first_name, 
         last_name: last_name,
         is_verified: false,
         verification_token: "",
      })
      
      return res.json(user)
   } catch (error) {
      console.log(error)
   }
};

const loginUser = async (req, res) => {
   try {
      const {email, password} = req.body;

      //check if user exists
      const user = await User.collection.findOne({email});
      if (!user) {
         return res.json({
            error: 'No user found'
         })
      }

      //check if password match
      const match = await comparePassword(password, user.password)
      if (match) {
         jwt.sign({email: user.email, id: user._id, first_name: user.first_name, last_name: user.last_name}, process.env.TOKEN_SECRET, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json*(user)
         })

      }
      if (!match) {
         res.json({
            error: 'Passwords do not match'
         })
      }
   } catch (error) {
      console.log(error);
   }
}

module.exports = {
   test,
   registerUser,
   loginUser,
}