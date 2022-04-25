const expressAsyncHandler = require('express-async-handler');
const Income = require("../../model/Income");

//create
const createInCtrl = expressAsyncHandler(async(req, res)=>{
    const {title, amount, description, user} = req.body;
    try {
        const income = await Income.create({
            title,
            amount,
            description,
            user
        });
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//fecth all income
const fetchAllInCtrl = expressAsyncHandler(async(req, res)=>{
    
    try {
        const income = await Income.find();
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//fecth single income
const fetchIncomeDetailsInCtrl = expressAsyncHandler(async(req, res)=>{
    const{id}=req?.params;
    console.log(req.params);
    
    try {
        const income = await Income.findById(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
    
});

module.exports = {createInCtrl, fetchAllInCtrl,fetchIncomeDetailsInCtrl};


