const express=require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path=require('path');

require('dotenv').config();





const port=process.env.PORT || 3000;

const app=express();
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));


const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;

mongoose
       .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.re3ha3x.mongodb.net/backend`, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => {
           console.log('Connected to MongoDB database!');
       })
       .catch(() => {
           console.log('Connection failed!');
       });



app.use('/api', require('./routes/login'));


app.get('/',(req,res)=>{

      res.render('index',{title:"not so good",message:"This is Index Card "})
});

app.get('/about',(req,res)=>{

     res.render('Pages/about');
})
app.get('/login',(req,res)=>{

    res.render('Pages/login');
})
app.post('/submitform', (req, res) => {

    const { username, password } = req.body;
    // Handle the submission logic (e.g., authentication)
    res.send(`${username} Welcome Form submitted successfully with ${password}`);
});

app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});







app.listen(port,()=>{

    console.log(`server started on ${port}  successfully`);

})