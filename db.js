const mongoose=require("mongoose");
// const mongoURL="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const mongoURL="mongodb+srv://abhishek:tgYE57Zck8noKhfS@cluster0.cwqmdti.mongodb.net/?retryWrites=true&w=majority"

// const connectToMongo=()=>{
//     mongoose.connect(mongoURL,()=>{
//         console.log('Connect to mongoose');
//     })
// }
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Connection Sucessfully');
    }
    catch (err) {
        console.log('Error connecting to MongoDB'); console.log(err.message);
    }
}
module.exports=connectToMongo;
