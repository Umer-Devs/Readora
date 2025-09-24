import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { dbName } from '../constant.js';
dotenv.config({
    path: './.env'
});

const connectDb = async ()=>{
  try {
     await mongoose.connect(`${process.env.DB_NAME}/${dbName}`);
     console.log(`sucessfully coonected to data base`);
     
  } catch (error) {
    console.log(`failed to connect the data base error : ${error}`);
    
  }
};

export {connectDb}