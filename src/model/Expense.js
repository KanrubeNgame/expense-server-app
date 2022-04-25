const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
//Schema
const expenseSchema = mongoose.Schema({
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
        default: "expense",
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
},
    {
        timestamp: true,
    }
);
//pagination
expenseSchema.plugin(mongoosePaginate);

 const Expense = mongoose.model("Expense",expenseSchema);
 module.exports = Expense;