/**
 * Created by ahmed on 18/03/2017.
 */

const {MongoClient ,ObjectID} = require('mongodb');

var obj =new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

/*    db.collection('Todos').find().count().then((count)=> {
        console.log('Todos count :'+ count);

    },(err)=>{
        console.log('Unable to fetch todos',err);
    });*/


db.collection('Users').find({name:'Ahmed'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
});
    db.close();
});