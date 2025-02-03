const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/selective-photography-of-body-of-water-qWHy3Qz_M7I",
        set: (v) => v === "" ? "https://unsplash.com/photos/selective-photography-of-body-of-water-qWHy3Qz_M7I" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;