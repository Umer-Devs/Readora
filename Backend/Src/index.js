import dotenv from 'dotenv';
import multer from 'multer'
import express, { json } from 'express';
import cors from 'cors';
import { connectDb } from './DataBase/Index.js';
import { Book } from './Models/Addbook.Models.js';
dotenv.config({
    path : './.env'
});
const app = express();
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(json())
app.use('/uploads', express.static('uploads'));
app.get('/',(req,res)=>{
    res.send("hello backend is running")   
});
const port = process.env.PORT  || 4000 ; 
const upload = multer({dest:'uploads/'})
 app.post('/book-data', upload.fields([
    {name:"frontCover"},
    {name:"backCover"}
 ]),async (req,res)=>{
    const { bookName, author, isbn, publicationYear, genre, description, publisher, ratings, available } = req.body;
    const bookFile  = req.files;
    const frontCover =  bookFile.frontCover[0].path.replace(/\\/g, "/");
    const backCover =  bookFile.backCover[0].path.replace(/\\/g, "/");
   try {
    const  bookData = new Book({
        bookName, author, isbn, publicationYear, genre, description, publisher, ratings, available ,frontCover,backCover
    });
    const saveBookData = await bookData.save();
    console.log(saveBookData);
    res.status(200).send("data is sent sucessfully");
   } catch (error) {
     console.log("failed to save add books data in to databse",error);
   }        
 })

  app.get('/book-data',async (req,res)=>{
    try {
         
        const booksData = await Book.find()
        res.send(booksData);

    } catch (error) {
        console.log("failed to get books data",error);
        
    }

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
