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

module.exports = {createInCtrl};
