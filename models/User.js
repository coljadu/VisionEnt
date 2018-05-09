var mongoose = require('mongoose');
var mongoooseUniqueValidator = require('mongoose-unique-validator');


var UserSchema = new mongoose.Schema({
    firstName : {type:String, required:true},
    lastName : {type: String, required:true},
    email : {type: String, required:true, unique:true},
    password : {type: String, required:true},
    role : {type:Number, required:true},
    clientId : {type:String, unique:true}
})
UserSchema.plugin(mongoooseUniqueValidator);

module.exports = mongoose.model('User', UserSchema);