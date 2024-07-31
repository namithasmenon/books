const mongoose=require('mongoose');
const rentSchema=mongoose.Schema({
    imgsrc:String,
    title:String,
    author:String,
    rating:Number
})
const rentData=mongoose.model('rentrequest',rentSchema);
module.exports=rentData;