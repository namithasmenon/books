const mongoose=require('mongoose');
const bookSchema=mongoose.Schema({
    imgsrc:String,
    title:String,
    author:String,
    rating:Number,
})
const bookData=mongoose.model('bookdetail',bookSchema);
module.exports=bookData;