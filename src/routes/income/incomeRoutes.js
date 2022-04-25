const express = require('express');
const { createInCtrl,fetchAllInCtrl,fetchIncomeDetailsInCtrl } = require('../../controllers/income/incomeCtrl');


const incomeRoute = express.Router();

incomeRoute.post("/",createInCtrl);
incomeRoute.get("/",fetchAllInCtrl);
incomeRoute.get("/:id",fetchIncomeDetailsInCtrl);

module.exports = incomeRoute;