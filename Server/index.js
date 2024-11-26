const express=require('express');
const app=express();
app.use(express.json());

app.use(express.urlencoded({extended:true}))

const cors=require('cors');
app.use(cors());
require('./Config/config')
const PORT=3000;

app.listen(PORT,(req,res)=>{
    console.log(`Server Started ${PORT}`);
})

const registrationRoute=require('./Routes/registration')

app.use('',registrationRoute)
