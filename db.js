const mongoose=require("mongoose");
// const mongoURL="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const mongoURL="mongodb+srv://abhishek:<password>@cluster0.cwqmdti.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log('Connect to mongoose');
    })
}
module.exports=connectToMongo;
