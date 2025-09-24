import mongoose from "mongoose";

const bookShema = new mongoose.Schema({
    
    bookName:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    author:{
        type:String,
        required:true,
        lowercase:true,
        
    },
    isbn:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    publicationYear:{
        type:String,
        required:true,
        lowercase:true,
       
    },
    genre:{
        type:String,
        required:true,
        lowercase:true,
       
    },
    description:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    publisher:{
        type:String,
        required:true,
        lowercase:true,
        
    },
    ratings:{
        type:String,
        required:true,
        lowercase:true,
        
    },
    available:{
        type:String,
        required:true,
        lowercase:true,
        
    },
    frontCover:{
        type:String,
        required:true,
        lowercase:true,
        
    },
    backCover:{
        type:String,
        required:true,
        lowercase:true,
        
    },
    User:{
       type: mongoose.Schema.ObjectId,
        ref: "User"
    }
},{timestamps:true}) ;

export const BookSchema = mongoose.model("BookSchema",bookShema);