import {MongoClient} from 'mongodb';

//getting the url for data-base
const url = "mongodb://127.0.0.1:27017/expenseDB";

let client ;
export const connectToMongoDB = () =>{
    
    MongoClient.connect(url)
     .then((clientInstance) => {
      
        client = clientInstance;
        console.log('Mongodb is connected');
     })
     .catch((err)=>{
        console.log(err);
     })
}

export const getDB = ()=>{
    return client.db();
}