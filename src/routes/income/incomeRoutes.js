const express = require('express');
const { createInCtrl } = require('../../controllers/income/incomeCtrl');


const incomeRoute = express.Router();

incomeRoute.post("/",createInCtrl);

module.exports = incomeRoute;