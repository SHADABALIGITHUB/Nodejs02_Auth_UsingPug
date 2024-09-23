const express=require('express');
require('dotenv').config();
const path=require('path');




const port=process.env.PORT || 3000;

const app=express();
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));


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



// app.use((req, res, next) => {
//     res.status(404).send('404 Not Found'); // You can customize this response
// });




app.listen(port,()=>{

    console.log(`server started on ${port}  successfully`);

})