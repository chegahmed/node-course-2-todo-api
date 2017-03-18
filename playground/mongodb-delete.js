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

    //delete many
  /*  db.collection('Todos').deleteMany({text:'Someting to do'}).then((result)=>{
        console.log(result);
    });*/

    //delete one

/*    db.collection('Todos').deleteOne({text:'walk the dog'}).then((result)=>{
        console.log(result);
    });*/

    //find one and delete

/*    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    });*/


   // db.collection('Users').deleteMany({name:'Ahmed'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("58cd22447e938f0aa819f965")
    }).then((results) =>{
        console.log(JSON.stringify(results,undefined,2));
    });

  //  db.collection('Users').findOneAndDelete({completed: false});

    db.close();
});