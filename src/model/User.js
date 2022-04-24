const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

//Schema
const userSchema = mongoose.Schema({
    firstname:{
        require: [true, 'First Name is required'],
        type: String,
    },
    lastname:{
        require: [true, 'Last Name is required'],
        type: String,
    },
    email:{
        require: [true, 'Email is required'],
        type: String,
    },
    password:{
        require: [true, 'Password Name is required'],
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
},{
    timestamp: true,
}
);

//HAsh Password
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

 //compile Schema into models
 const User = mongoose.model('User', userSchema);
 module.exports = User;

