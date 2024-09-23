const express=require('express');
const env=require('dotenv').config();
const path=require('path');
const { title } = require('process');


const port=process.env.PORT || 3000;

const app=express();
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{

    res.render('index',{title:"Home work done",message:"Welcome to my Express app with Pug!"})
})


app.listen(port,()=>{

    console.log(`server started on ${port}  successfully`);

})