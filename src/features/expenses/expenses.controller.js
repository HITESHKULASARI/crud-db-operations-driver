import ExpensesRepository from "./expenses.repository.js";

export default class ExpensesController{

    constructor(){
        this.expensesRepository = new ExpensesRepository();
    }


    // for adding the expense
    async addExpense(req,res){
        try{
            const {expense} = req.body;
            console.log("i am here baby");
            await this.expensesRepository.addExpense(expense);
            console.log("i am here baby 5");

            res.status(200).send("expense is added");
        }catch(err){
            console.log("error while adding the expense from server",err);
        }
    }
    // for getting all the expense
    async getAllExpenses(req,res){
          
        try{

            const allExpenses = await this.expensesRepository.getAllExpenses();
            
            res.status(200).send(allExpenses);

        }catch(err){
            console.log("error while getting all the expense in the controller");
        }


    }
    //for getting one expense
    async getOneExpense(req,res){

        try{

            const {productId} = req.body;
            const oneExpenses = await this.expensesRepository.getOneExpense(productId);
            
            res.status(200).send(oneExpenses);
            
        }catch(err){
            console.log("error while getting one in",error);
        }

    }
    //for filtering the expenses
    async filterExpenses(req,res){
        try{
            const minPrice = req.query.minPrice;
            const maxPrice = req.query.maxPrice;
            
            const result = await this.expensesRepository.filterExpenses(minPrice,maxPrice);
            console.log(result);
            res.status(200).send(result);
        }catch(err){
            console.log("error while filtering from the controller",err);
        }

    }
    //adding the tag to Expense
    async addTagToExpense(req,res){
        try{
            const {productId,tag} = req.body;
            await this.expensesRepository.addingTag(tag,productId);
            res.status(200).send("tag is added with the expense");
        }catch(err){
            console.log("error while adding the tag",err);
        }

        
        

    }
}