import dotenv from 'dotenv';
import multer from 'multer'
import express, { json } from 'express';
import cors from 'cors';
import { connectDb } from './DataBase/Index.js';
dotenv.config({
    path : './.env'
});
const app = express();

app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(json())
app.get('/',(req,res)=>{
    res.send("hello backend is running")
    
});
        
const port = process.env.PORT  || 4000 ; 

const upload = multer({dest:'uploads/'})



 app.post('/book-data', upload.fields([
    {name:"frontCover"},
    {name:"backCover"}
 ]), (req,res)=>{
    const bookData  = req.body;
    const bookFile  = req.files;
    console.log(bookFile);
    if(!bookData){
        res.status(400).send("error")
    }
    res.status(200).send("data is recevied") ;
    
 })




// database function call 
connectDb()
.then(()=>{
    app.listen(port,(req,res)=>{
    console.log(`my backend is running on this port ${port}`);
    
});
}).catch((error)=>{
       console.log(`failed to start the app ${error}`);
       
})
