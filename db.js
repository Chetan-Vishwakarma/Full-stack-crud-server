import mongoose from "mongoose";

export const Connection = async () => {
    const URL = process.env.DATABASE_URL;
    try {
        await mongoose.connect(URL);
        console.log('connected with database');
    } catch (error) {
        console.log('error while connnecting with database');
    }
}