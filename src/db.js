import mongoose from 'mongoose';

export const connectDB = async () => {
  try { 
    await mongoose.connect("mongodb+srv://RicardoM:uBUnSPuV6f4GbB4d@cluster0.llrzfx3.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}
