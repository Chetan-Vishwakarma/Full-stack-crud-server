import express from 'express';
import router from './routes/route.js';
import { Connection } from './db.js';
import cors from 'cors';
import { errorHander } from './middleware/middleware.js';
import dotenv from "dotenv";

dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHander)
app.use('/api',router);

Connection();

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log('Server invoked at port http://localhost:8080');
})