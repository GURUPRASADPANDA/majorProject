const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
require('dotenv').config();
const path = require("path");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

main()
    .then(()=>{
       console.log("connected to DataBase successfully.");
    })
    .catch((err)=>{
       console.log(err);
    })

async function main(){
        await mongoose.connect(MONGO_URL); 
}

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.send("hare krishna");
});

app.get("/listings",async (req,res)=>{
   const allListings=  await Listing.find({});
   res.render("listings/index.ejs",{allListings});
});



app.get("/testListing",async(req,res)=>{
    let sampleListing = new Listing({
       title:"My new bird",
       description:"chiu chiu",
       price:30000,
       location:"Odisha",
       country:"India",
    });

    await sampleListing.save();
    console.log("Sample saved successively");
    res.send("Successful testing");
});



app.listen(PORT, ()=>{
    console.log("app is listening on= http://localhost:"+PORT);
});

