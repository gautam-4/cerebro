const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000
const ConnectDb=require('./models/db');
const User=require('./models/user');
const cors=require('cors');
const todoRoutes = require('./routes/todoRoutes');
const habitsRoutes = require('./routes/habitsRoutes');
const expensesRoutes = require('./routes/expensesRoutes');
const noteRoutes = require('./routes/noteRoutes');

ConnectDb();
app.use(express.json());

app.use(cors());

app.post('/register',async(req,res)=>{
  try{
      const{username,email,password}=req.body;
      console.log(req.body);;
      const user=new User({username,email,password});
      await user.save();
      res.status(201).json({message:'Registration Successful'})
  }
  catch(error){
      res.status(500).json({error:'Registration Failed..'})
  }
})

app.post('/login',async(req,res)=>{
  try{
      const {username,password}=req.body;
      const user= await User.findOne({username});

      if(!user){
          return res.status(401).json({error:'Invalid Username Or Password'})
      }

      if(user.password !== password){
          return res.status(401).json({error:'Invalid Username Or Password'})
          
      }

      res.status(200).json({message:'Login Successful'})
  }
  catch(error){
      res.status(500).json({error:'Login Failed..'})
  }
})

app.use('/api', todoRoutes);
app.use('/api', noteRoutes);
app.use('/api', habitsRoutes);
app.use('/api', expensesRoutes); 

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})