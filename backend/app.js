const express=require('express');
const app=new express();
const authRoutes = require('./routes/userRoutes'); 
const cors=require('cors')
require('./connection')
const userModel=require('./model/userData');
const bookModel=require('./model/bookData');
const rentModel=require('./model/rentData');
app.use(express.json())
app.use(cors());
app.use('/api/users', authRoutes); 
//add user
app.post('/adduser',async (req,res)=>{
    try{
var item=req.body;
const datasave=new userModel(item);
const saveddata=await datasave.save();
res.send('post successful')
    }catch(error){

    }
}
)
//display available books
app.get('/book',async (req,res)=>{
    try{
    const data=await bookModel.find()
    res.send(data)
    }
    catch(error){
        console.log('data not found')
    }
})
//display user details
app.get('/user',async (req,res)=>{
    try{
    const data=await userModel.find()
    res.send(data)
    }
    catch(error){
        console.log('data not found')
    }
})
//add books into the db
app.post('/addbook',async (req,res)=>{
    try{
var item=req.body;
const datasave=new bookModel(item);
const saveddata=await datasave.save();
res.send('post successful')
    }catch(error){

    }
}
)
//delete user details
app.delete('/removeuser/:id',async (req,res)=>{
    try{
        await userModel.findByIdAndDelete(req.params.id);
        res.send('deleted succesfully')
    }
    catch(error){
        console.log(error)
    }
})
//add to rentdetails
app.post('/addrental',async (req,res)=>{
    try{
var item=req.body;
const datasave=new rentModel(item);
const saveddata=await datasave.save();
res.send('Request Sent!')
    }catch(error){
        console.log(error)
    }
}
)
//show rent details
app.get('/rent',async (req,res)=>{
    try{
    const data=await rentModel.find()
    res.send(data)
    }
    catch(error){
        console.log('data not found')
    }
})
//delete from rentals
app.delete('/rejectreq/:id',async (req,res)=>{
    try{
        await rentModel.findByIdAndDelete(req.params.id);
        res.send('deleted succesfully')
    }
    catch(error){
        console.log(error)
    }
})
//delete book from view
app.delete('/removebook/:id',async (req,res)=>{
    try{
        await bookModel.findByIdAndDelete(req.params.id);
        res.send('deleted succesfully')
    }
    catch(error){
        console.log(error)
    }
})
//Admin Updates Books
app.put('/bookupdate/:id',async(req,res)=>{
    try {
        const change=await bookModel.findByIdAndUpdate(req.params.id,req.body)
        res.send('Book updated!!')
    } catch (error) {
        console.log(error);
    }
})






app.listen(3000,()=>{
    console.log('The server is Running on port 3000')
})