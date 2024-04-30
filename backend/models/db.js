const mongoose=require('mongoose');
const ConnectDb= async()=>{
    try{
    await mongoose.connect('mongodb://localhost:27017/cerebroUsers');
    console.log('Connected to MongoDB');
    }
    catch(error){
        console.log(error);
    }
}
module.exports=ConnectDb;