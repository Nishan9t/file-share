const mongoose=require('mongoose')
require('dotenv').config()

const DBConnection=async()=>{
    const user=process.env.DB_USER;
    const pass=process.env.DB_PASS;
    const MONGODB_URI=`mongodb+srv://${user}:${user}@file-sharing.meh1ckt.mongodb.net/?retryWrites=true&w=majority`;
    try{

        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("error while connecting with database",error.message);
    }
}

module.exports=DBConnection