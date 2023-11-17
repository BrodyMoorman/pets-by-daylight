const User = require('../models/usersSchema') 
 
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

      const user = await User.collection.insertOne({
         password: password, email: email, first_name: first_name, last_name: last_name,
      })
      
      return res.json(user)
   } catch (error) {
      console.log(error)
   }
 }

 module.exports = {
    test,
    registerUser,
 }