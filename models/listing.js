const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
      title:{
        type: String,
        required: true,
      },
      description:String,
      image:{
        type: String,
        default:"https://cdn.pixabay.com/photo/2025/04/23/01/35/bird-9551361_1280.jpg",
        set:(v) => 
          v ==="" 
            ? "https://cdn.pixabay.com/photo/2025/04/23/01/35/bird-9551361_1280.jpg"
            :v,
      },
      price:Number,
      location:String,
      country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;