const express = require('express' )
const { adminAuth, userAuth} = require('./middleware/auth')

const app = express();

app.use('/admin', adminAuth)

app.get('/user/login', (req,res)=>{
    res.send('User logged in successfully')
})

app.get("/user", userAuth, (req,res)=>{
     res.send('User Data')
   
})


app.use('/admin/getAllData', (req,res)=>{

    throw new Error('buiebuiefbkef')
    res.send('All Data Sent')
})

app.use('/', (err,req,res,next)=>{  
    if(err){
        res.status(500).send('Somthing went wrong')
    }
})

app.use("/", (req, res) => {
    res.send('Welcome')
})

 


app.listen(3000, ()=>{
    console.log("Server is created successfully!");
})