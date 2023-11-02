import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";


export default class ExpensesRepository{

    async addExpense(expense){
        try{
            //get data base
            const db = getDB();
            // get the collection
            console.log(" i am here baby 2");
            const collection = db.collection("expense");
            console.log(" i am here baby 3");
            
            //insert the data-base
            await collection.insertOne({expense});
            console.log(" i am here baby 4");

        }catch(err){
             console.log("error while adding to the server :",err);
        }
        
    }

    async getAllExpenses(){

        try{
            //get the database
            const db = getDB();
            //get the collection
            const collection = db.collection("expense");
            //now get all expenses
            return await collection.find().toArray();

        }catch(err){
            console.log("error while getting all the expenses",err);
        }

    }

    async getOneExpense(productID){
        try{
            //get the database
            const db = getDB();
            //get the collection
            const collection = db.collection("expense");
            //now get one expense

            return await collection.find({_id: new ObjectId(productID)}).toArray();

        }catch(err){
            console.log("error while getting one expense",err);
        }
    }
    async filterExpenses(minPrice,maxPrice){
        try{
            //get the db
            const db = getDB();
            //get the collection
            const collection = db.collection("expense");
            //get the filtered result
            let filterExpression = {};
            if(minPrice){
                filterExpression.expense = {$gte:parseFloat(minPrice)};
            }
            if(maxPrice){
                filterExpression.expense = {...filterExpression.price,$lte:parseFloat(maxPrice)};
            }
            return await collection.find(filterExpression).toArray();

        }catch(err){
           console.log("error while filtering",err);
        }
        
    }

    async addingTag(tag,productID){
        try{
            //get the database
            const db = getDB();
            //get the collection
            const collection = db.collection("expense");
            //update the tags
            await collection.updateOne({_id:new ObjectId(productID)},
            {
                $push:{tag:{tag}}
            }
            )

        }catch(err){

            console.log("error while adding the tag",err);

        }
        

    }

}