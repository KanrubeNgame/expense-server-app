const express = require('express');
const { createInCtrl,fetchAllInCtrl,fetchIncomeDetailsInCtrl,updateInCtrl,deleteIncCtrl } = require('../../controllers/income/incomeCtrl');


const incomeRoute = express.Router();

incomeRoute.post("/",createInCtrl);
incomeRoute.get("/",fetchAllInCtrl);
incomeRoute.get("/:id",fetchIncomeDetailsInCtrl);
incomeRoute.put("/:id",updateInCtrl);
incomeRoute.delete("/:id",deleteIncCtrl);

module.exports = incomeRoute;