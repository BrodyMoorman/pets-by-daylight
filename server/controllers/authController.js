const User = require('../models/mongo') 
 
 const test = (req, res) => {
    res.json('test is working')
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

      const user = await User.create({
         username, email, password
      })

      return res.json()
   } catch (error) {
      console.log(error)
   }
 }

 module.exports = {
    test,
    registerUser,
 }