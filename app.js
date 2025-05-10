const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();


const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

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

app.listen(PORT, ()=>{
    console.log("app is listening on= http://localhost:"+PORT);
});
