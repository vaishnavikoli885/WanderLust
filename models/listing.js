const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description:String,
    image:  {
        type: String,
        default:"https://www.istockphoto.com/photo/palm-trees-silhouette-on-sunset-gm179117046-25310579?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsunset-with-cocount-tree&utm_medium=affiliate&utm_source=unsplash&utm_term=sunset+with+cocount+tree%3A%3A%3A",
        set: (v) => v === ""
         ? "https://www.istockphoto.com/photo/palm-trees-silhouette-on-sunset-gm179117046-25310579?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsunset-with-cocount-tree&utm_medium=affiliate&utm_source=unsplash&utm_term=sunset+with+cocount+tree%3A%3A%3A"
         : v,
    },
    price:Number,
    location: String,
    country: String,
   
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;
