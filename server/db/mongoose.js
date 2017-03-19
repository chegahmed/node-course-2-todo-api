/**
 * Created by ahmed on 18/03/2017.
 */
var mongoose =require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||  'mongodb://localhost:27017/TodoApp');


module.exports ={mongoose}



