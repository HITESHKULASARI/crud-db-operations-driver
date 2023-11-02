import express from 'express';
import bodyParser from 'body-parser';
import { connectToMongoDB } from './src/config/mongodb.js';
import expenseRouter from './src/features/expenses/expenses.route.js';

const server = express();




// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
server.use(bodyParser.json())

server.use('/api/expense',expenseRouter);

server.listen(3000,(err)=>{
    if(err){
        console.log("there is a problem while connecting to the data base and the error is",err);
    }
    console.log('server is connected to the port number',3000);
    connectToMongoDB();
})