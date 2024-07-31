const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://namithasmenonb22cs1236:0481nami@cluster0.hg5wqaj.mongodb.net/bookstoredb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected');
}).catch((error)=>{
    console.log('Error in connection')
})