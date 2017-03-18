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

/*    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("58cd1b2f7e938f15b08941e2")
    },{
        $set:{
            completed: false
        }
    },{
        returnOriginal:false
    }).then((result) =>{
        console.log(result);
    });*/


    db.collection('Users').findOneAndUpdate({
        _id : ObjectID("58cd07f79cc7b714e04abd81")
    },{
        $set:{
            name : "belaid"
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result) =>{
        console.log(result);
    });


    db.close();
});