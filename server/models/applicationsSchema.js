const mongoose = require("mongoose");
const {Schema} = mongoose;

const applicationsSchema = new Schema({
    listing_id: Number,
    user_id: Number,
})


const Applications = mongoose.model("Applications", applicationsSchema)

module.exports = Applications;
