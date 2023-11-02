import express from 'express';
import ExpensesController from './expenses.controller.js';

const expenseRouter = express.Router();

const expensesController  = new ExpensesController();

//hitting this route for addExpense
expenseRouter.post('/',(req,res)=>{
     expensesController.addExpense(req,res);
});
//for getting all the expenses
expenseRouter.get('/all-expenses',(req,res)=>{
    expensesController.getAllExpenses(req,res);
});
//for getting one expense
expenseRouter.post('/one-expenses',(req,res)=>{
    expensesController.getOneExpense(req,res);
});


export default expenseRouter;
