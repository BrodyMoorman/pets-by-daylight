const { json } = require("express");
const Listing = require("../models/listingsSchema");

const listingFilter = async (req, res) => {
    try {

        let animal = req.body.query.animal || "all";
        let gender = req.body.query.gender || "all";
        let age = req.body.query.age || "all";
        let fee = parseInt(req.body.query.fee) || 99999;
        let search = req.body.query.search || "";

        const animalOptions = [
            "dog",
            "cat",
            "bird",
            "fish",
            "reptile",
            "other",
        ];

        const genderOptions = [
            "male",
            "female", 
        ];

        // age needa to be added to the database
        const ageOptions = [
            "baby",
            "young",
            "adult",
            "senior",
        ];


        animal === "all"
            ? (animal = [...animalOptions])
            : (animal = req.body.query.animal.split(","))


        gender === "all" 
            ? (gender = [...genderOptions])
            : (gender = req.body.query.gender.split(","));

        
        age === "all" 
            ? (age = [...ageOptions])
            : (age = req.body.query.age.split(","));
        
        const petList = await Listing.find(
            {$and: [
                {"pet_name": { $regex: search, $options: "i" }},
                {"pet_species": {"$in": animal}},
                {"adoption_fee": {$lte: fee}},

                //these 2 need to be updated in database
                //{"gender": {"$in": gender}},
                //{"age": {"$in": age}}
            ]}
        )
        
        return res.json(petList);
        //res.json(animal);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

module.exports = {
    listingFilter,
}