const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    todos: [{
        name: String,
        isDone: {
            type: Boolean,
            default: false
        }
    }],
    habits: [{
        name: String,
        streak: {
            type: Number,
            default: 0
        }
    }],
    expenses: [{
        name: String,
        price: {
            type: Number,
            default: 0
        }
    }],
    note: {
        type: String,
        default: ""
    }
})

const User=mongoose.model('User',UserSchema);

module.exports=User;