
const express=require("express");
const router=express.Router();
const User=require('../models/userSchema')



router.get('/', async(req, res) => {
    try{
        const data=await User.find();
        res.json(data)
    }
    catch(err){
        res.json({message:"error retriving data ",err});
    };
});

//achema internall acces 
// const UserSchema=mongoose.model('User',new mongoose.Schema({
//     name:String,
//     age:Number
// }));

router.post('/post', async(req, res) => {
    // const { name, age } = req.query;
    // res.json({ message: "data is  insert", data: { name, age } })
    // console.log(`inserting:Name:${name}, and Age:${age}`)
    // const data=req.body
    // res.json({message:"data is insert",data:{data}})
    // console.log(`data is insert data name:${data.name} and Age:${data.age}`)
    const{name,age}=req.body
    try{

        const newUser=new User({name,age});
        await newUser.save()
        res.json({message:"user is added",user:newUser})
    }
    catch(err){
        res.json({message:"error adding user",error:err});
    }
});

////update page find the id base singal data
router.get('/:_id', async(req,res)=>{
    const{_id}=req.params;
    try{
        const user=await User.findById(_id);
        if(!user){
            res.json({message:"user not fond"})
        }
        res.json(user)
    }
    catch(err){
        res.json({message:"error is fond",error:err})
    }
});


//update the user data api code
router.put('/update/:_id',async(req,res)=>{
    const{_id}=req.params;
    const{name,age}=req.body;
    try{
        const updateData=await User.findByIdAndUpdate(_id,{name,age},{new:true});
        if(!updateData){
            return res.send("data not fond");
        }
        res.json(updateData);
    }
    catch(err){
        res.send("eror updating data");
    }
});


//delete the user api code 
router.delete('/delete/:_id',async(req,res)=>{
    const{_id}=req.params;
    try{
        const deleteData=await User.findByIdAndDelete(_id);
        if (!deleteData){
            return res.send('Data not fond');
        }
        res.json({message:"data is deleted",deleteData})
    }
    catch(err){
        res.send("error deleting data: ");
    }
});


module.exports=router;