const express = require('express');
const { createInCtrl,fetchAllInCtrl,fetchIncomeDetailsInCtrl,updateInCtrl,deleteIncCtrl } = require('../../controllers/income/incomeCtrl');
const authMiddleware = require('../../middlewares/authMiddleware');

const incomeRoute = express.Router();

incomeRoute.post("/",authMiddleware,createInCtrl);
incomeRoute.get("/",authMiddleware, fetchAllInCtrl);
incomeRoute.get("/:id",authMiddleware, fetchIncomeDetailsInCtrl);
incomeRoute.put("/:id",authMiddleware, updateInCtrl);
incomeRoute.delete("/:id",authMiddleware, deleteIncCtrl);

module.exports = incomeRoute;