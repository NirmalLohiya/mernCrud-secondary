const mongoose = require('mongoose')

const mongoUrl = "mongodb://127.0.0.1:27017/test";

const connectDB=()=>{mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('mongoDB connected  successfully!');
    })
    .catch((err) => {
        console.error("Error connecting to mongoDB", err);
    });
};
module.exports=connectDB;



// const mongoose = require('mongoose');

// // MongoDB connection string
// const mongoUrl = "mongodb+srv://nirmallohiya999:yCwRrsziWSpaSzQb@cluster0.nnui5rl.mongodb.net/crud_db";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(mongoUrl);
//     console.log('MongoDB connected successfully!');
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// };

// module.exports = connectDB;
