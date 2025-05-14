const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
require('dotenv').config();


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

app.get("/",(req,res)=>{
    res.send("hare krishna");
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

