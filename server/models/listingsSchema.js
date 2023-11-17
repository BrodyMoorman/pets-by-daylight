const mongoose = require("mongoose");
const {Schema} = mongoose;

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
});

const Listings = mongoose.model("Listings", listingsSchema);

module.exports = Listings;