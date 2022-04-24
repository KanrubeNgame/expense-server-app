const User = require("../../model/User");
const expressAsyncHandler = require('express-async-handler');
const generateToken = require("../../middlewares/generateToken");

//Register
const registerUser = expressAsyncHandler(async (req, res)=>{
    const {email, firstname, lastname, password } = req?.body;

    //check if user exists
    const userExists = await User.findOne({email});
    if(userExists) throw new Error("USer already Exists");
   try {
        const user = await User.create({ email, firstname, lastname, password});
        res.status(200).json(user);
   } catch (error) {
       res.json(error);
   }
});

//fetch all user
const fetchUsersCtrl = expressAsyncHandler(async (req, res) =>{
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
});
 
//Login
const loginUserCtrl = expressAsyncHandler(async(req, res) => {
    const {email, password} = req?.body
    //Finf the user in DB
    const userFound = await User.findOne({email});
    //check if the user password match
    if(userFound &&  (await userFound?.isPasswordMatch(password))){
        res.json({
            _id: userFound?._id,
            firstname: userFound?.firstname,
            lastname: userFound?.lastname,
            email:userFound?.email,
            isAdmin: userFound?.isAdmin,
            token: generateToken(userFound?._id)
        });
    }else{
        res.status(401);
        throw new Error("Invalid LogIn credentials");
    }
  
});

module.exports = {registerUser, fetchUsersCtrl, loginUserCtrl};