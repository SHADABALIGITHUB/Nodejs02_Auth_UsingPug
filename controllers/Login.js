const Login=require('../models/login');


exports.SubmitForm= async (req,res, next)=>{

     try{
        const {username,password}=req.body;
     
     if (!username || !password ) {
        return res.status(400).json({ message: 'username password are required fields' });
     }

     const newUser = new Login({
        username:username,
        password:password
    });

    await newUser.save();

    res.status(201).json({ message: 'form submitted successfully' });


     }
    catch(err){
            console.error(err);
           res.status(500).json({ message: 'Internal server error' });

      }

}