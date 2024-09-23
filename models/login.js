
const mongoose=require('mongoose');

const loginSchema=mongoose.Schema({
      username:{type:String},
      password:{type:String}
})

const login=mongoose.model('login',loginSchema);

module.exports=login;