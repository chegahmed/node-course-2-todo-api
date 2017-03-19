/**
 * Created by ahmed on 18/03/2017.
 */

const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');



User.gfindById('58cd51cb49a4eb4c134cb242').then((user) =>{
 if(!user){
     return console.log('Unable to find user')
 }

    console.log(JSON.stringify(user,undefined,2));
},(e) =>{
   console.log(e);
});

/*var id = '58cd53c3cb389eb814b16b14n';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}*/

/*Todo.find({
    _id : id
}).then((todos) =>{
  console.log('Todos',todos);
});

Todo.findOne({
    _id : id
}).then((todo) =>{
    console.log('Todo',todo);
});*/


/*

Todo.findById(id).then((todo) =>{

    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo By Id',todo)
}).catch((e)=>console.l);*/
