const express = require('express');

const {createExpCtrl, fetchAllExpCtrl, fetchExpDetailsInCtrl,updateExpCtrl,deleteExpCtrl} = require('../../controllers/income/expenseCtrl');


const expenseRoute = express.Router();

expenseRoute.post("/",createExpCtrl);
expenseRoute.get("/",fetchAllExpCtrl);
expenseRoute.get("/:id",fetchExpDetailsInCtrl);
expenseRoute.put("/:id",updateExpCtrl);
expenseRoute.delete("/:id",deleteExpCtrl);

module.exports = expenseRoute;