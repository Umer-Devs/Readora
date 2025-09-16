import dotenv from 'dotenv';
import express from 'express';
dotenv.config({
    path : './.env'
});
const app = express();
app.get('/',(req,res)=>{
    res.send("hello backend is running")
    
});
        
const port = process.env.PORT || 4000;

app.listen(port,(req,res)=>{
    console.log(`my backend is running on this port ${port}`);
    
});
