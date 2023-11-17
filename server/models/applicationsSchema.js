const mongoose = require("mongoose");
const {Schema} = mongoose;

const applicationsSchema = new Schema({
    listing_id: Number,
    user_id: Number,
})


const Application = mongoose.model("Application", applicationsSchema, "Applications")

module.exports = Application;
