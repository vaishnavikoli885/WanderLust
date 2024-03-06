const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type:String,
    },
    image:  {
        type: String,
        default:"https://www.istockphoto.com/photo/palm-trees-silhouette-on-sunset-gm179117046-25310579?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsunset-with-cocount-tree&utm_medium=affiliate&utm_source=unsplash&utm_term=sunset+with+cocount+tree%3A%3A%3A",
        set: (v) => v === ""
         ? "https://www.istockphoto.com/photo/palm-trees-silhouette-on-sunset-gm179117046-25310579?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsunset-with-cocount-tree&utm_medium=affiliate&utm_source=unsplash&utm_term=sunset+with+cocount+tree%3A%3A%3A"
         : v,
    },
    price:{
        type:Number,
    },
    location: String,
    country: String,
   reviews:[
        {
         type:Schema.Types.ObjectId,
         ref:"Review",
        },
    ],
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
        await Review.deleteMany({ _id : {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;
