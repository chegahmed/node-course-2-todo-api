/**
 * Created by ahmed on 18/03/2017.
 */


var express =require('express');
var bosyPerser =require('body-parser');

var {mongoose} =require('./db/mongoose');
var {Todo} =require('./models/todo')
var {User} =require('./models/user')

var app =express();

app.use(bosyPerser.json());

app.post('/todos',(req,res) => {
    var todo =new Todo({
        text :req.body.text
    })

    todo.save().then((doc) => {
    res.send(doc);
    },(e) =>  {
        res.status(400).send(e);
    });
});



//GET /todos/id

app.listen(3000,() => {
    console.log('Started on port 3000');
});














/*
var newTodo =new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) =>{
  console.log('Saved todo',doc);
},(e)=>{
    console.log('Unable to Save todo');
});
*/




/*var  otherTodo =new Todo({
    text: true,
    completed: true,
    completedAt:123
});

otherTodo.save().then((doc)=>{
  console.log(JSON.stringify(doc,undefined,2));
},(e) => {
    console.log('Unable to save',e);
});*/


//User
//Email - require it  -trim it - set type - set min length of 1



/*var user =new User({
email:'ahmed@gmail.com'
});

user.save((doc)=>{
    console.log('User saved',doc);
},(e)=>{
    console.log('Unable to save user',e);
})*/;













