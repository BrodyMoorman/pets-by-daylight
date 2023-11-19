const mongoose = require("mongoose");
const {Schema} = mongoose;


const usersSchema = new Schema({
    username:{
        String,
    },
    password: {
        String,
    },
    email: {
        String,
    },
    isVerified: { 
        type: Boolean, default: false 
    },
    verificationToken: { 
        type: String 
    }
})

const listingsSchema = new Schema ({
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
        required: true
      },
      owner_email: {
        type: String,
        required: true
      },
      pet_name: String,
      pet_breed: String,
      pet_species: String,
      female: Boolean,
      pet_color: String,
      pet_birthday: String,
      pet_weight: String,
      pet_description: String,
      vaccinated: Boolean,
      image_urls: [String],
      adoption_fee: Number,
      zip_code: Number
})

const applicationsSchema = new Schema({
    listing_id: Number,
    user_id: Number,
})

const Users = mongoose.model("Users", usersSchema)
const Listings = mongoose.model("Listings", listingsSchema)
const Applications = mongoose.model("Applications", applicationsSchema)

module.exports = Users;
module.exports = Listings;
module.exports = Applications;