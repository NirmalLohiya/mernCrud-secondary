// const jsonServer=require('json-server');
const { populate } = require('dotenv');
const express = require('express');
const connectDB=require('./db');
const { default: mongoose } = require('mongoose');
const userRoutes=require('./routes/userRouter');
const cors=require('cors')
require('dotenv').config()


const app = express();
app.use(express.json())  //use middleware 
app.use(cors());

// const router=jsonServer.router('db.json')
// const middlewares=jsonServer.defaults();
// app.use(middlewares)
// app.use('/api',router)

//connect mongodb
connectDB();

// connect the userRoutes 
app.use('/api',userRoutes);

const port = 5000;
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});