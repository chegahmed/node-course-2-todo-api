/**
 * Created by ahmed on 18/03/2017.
 */
var mongoose =require('mongoose');

var User = mongoose.model('User',{
    email:{
        type:String,
        require:true,
        trim:true,
        minlength:1
    }
});
module.exports ={User}
