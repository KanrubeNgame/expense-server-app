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
    const {page}= req.query
;    try {
        const income = await Income.paginate({},{limit:10, page: Number(page)});
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//fecth single income
const fetchIncomeDetailsInCtrl = expressAsyncHandler(async(req, res)=>{
    const{id}=req?.params;
 
    
    try {
        const income = await Income.findById(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
    
});

//update
const updateInCtrl = expressAsyncHandler(async (req, res) =>{
    const{ id }=req?.params;
    const {title, amount, description} = req.body;
    try {
        const income = await Income.findByIdAndUpdate(id,{
            title,
            description,
            amount,
        },
        {new:true}
        );
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//delete
const deleteIncCtrl = expressAsyncHandler(async(req, res)=>{
    const{id}=req?.params;
   
    
    try {
        const income = await Income.findByIdAndDelete(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
    
});

module.exports = {createInCtrl, fetchAllInCtrl,fetchIncomeDetailsInCtrl,updateInCtrl,deleteIncCtrl};


