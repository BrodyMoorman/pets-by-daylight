const mongoose = require("mongoose");
const {Schema} = mongoose;


const usersSchema = new Schema({
    password: {
        String,
        //required: true,
    },
    email: {
        String,
        //required: true,
        //unique: true,
    },
    first_name: {
        String,
        //required: true,
    },
    last_name: {
        String,
        //required: true,
    },
})


const User = mongoose.model("User" , usersSchema, "Users")


module.exports = User;