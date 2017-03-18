/**
 * Created by ahmed on 18/03/2017.
 */

//const MongoClient =require('mongodb');
const {MongoClient ,ObjectID} = require('mongodb');

var obj =new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
if(err){
    console.log('Unable to connect to MongoDB server');
}
console.log('Connect to MongoDB server');

    db.collection('Todos').find().toArray.then((docs)=> {

        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos',err);
    });



/*    db.collection('Todos').insertOne({
         text: 'Someting to do',
        completed: false
    },(err,result)=>{
       if(err){
           return console.log('Unable to insert todo',err);
       }
        console.log(JSON.stringify(result.ops,undefined,2));
    });*/


//Insert new doc into Users (name ,age,location)

 /*   db.collection('Users').insertOne({
        name:'Ahmed',
        age:25,
        location:'Rabat'
    },(err,result) => {
       if(err){
           return console.log('Unable to insert user',err);
       }

       console.log(result.ops[0]._id.getTimestamp());
    });*/


    db.close();
});