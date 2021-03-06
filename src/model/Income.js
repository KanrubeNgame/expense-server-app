const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
//Schema
const incomeSchema = mongoose.Schema({
    title:{
        require: [true, 'Title is required'],
        type: String,
    },
    description:{
        require: [true, 'Description is required'],
        type: String,
    },
    type:{
        type: String,
        default: "income",
    },
   amount:{
        require: [true, 'Amount is required'],
        type: Number,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: [true, "User ID is required"],
    }
},{
    timestamp: true,
}
);

//pagination
incomeSchema.plugin(mongoosePaginate);


 const Income = mongoose.model("Income", incomeSchema);
 module.exports = Income;