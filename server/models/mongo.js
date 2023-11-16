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
})

const listingsSchema = new Schema ({
    owner_id: Schema.ObjectId,
    owner_email: String,
    owner_phone: Number,
    pet_name: String,
    pet_breed: String,
    pet_species: String,
    female: Boolean,
    pet_color: String,
    pet_birthday: String,
    pet_weight: String,
    pet_description: String,
    vaccinated: Boolean,
    image_url: String,
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