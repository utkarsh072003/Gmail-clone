import { User } from "../models/usermodel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const register= async(req,res)=>{
    try {
        const {fullname, email, password}= req.body;
        if(!fullname || !email || !password) return res.status(400).json({message:"All fields are required", success:false});
        
        const user = await User. findOne({email});
        if(user) return res.status(400).json({message:"user already exist with this email", success:false});
        
        const hashedPassword= await bcrypt.hash(password,10);
        const profilePhoto='https://avatar.iran.liara.run/public/boy'
        await User.create({
            fullname,
            email,
            password:hashedPassword,
            profilePhoto
        });

        return res.status(201).json({
            message:"Account created successfull",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}
export const login= async(req,res)=>{
    try {
        const {email, password}= req.body;
        if( !email || !password) return res.status(400).json({message:"All fields are required", success:false});
        const user= await User.findOne({email});
        if(!user) return res.status(401).json({message:"Incorrect email ", success:false});

        const ispassword=await bcrypt.compare(password, user.password);
        if(!ispassword) return res.status(401).json({message:"Incorrect  password", success:false});
        
        const tokenData={
            userId: user._id
        }
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'})
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000, httpOnly:true,secure:true,sameSite:'none'}).json({
            message:`${user.fullname} logged in successfully.`,
            user,
            success:true
        })


    } catch (error) {
        console.log(error);
        
    }
}

export const logout= async(req,res)=>{
    try {
       return res.status(200).cookie("token","",{maxAge:0, httpOnly:true, secure:true, sameSite:'none'}).json({
        message:"Logged out successfully"
       })        
 

    } catch (error) {
        console.log(error);
        
    }
}
