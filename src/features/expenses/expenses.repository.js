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

}