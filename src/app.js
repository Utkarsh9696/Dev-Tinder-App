const express = require('express' )

const app = express();

app.get("/user/data", (req,res)=>{
    res.send('User Data')
})
app.get("/user", (req,res)=> {
    res.send({firstName : "Utkarsh", lastName : "Singh"})
})


app.use("/test", (req, res) => {
    res.send('inside the test route')
})

app.use("/", (req,res)=>{
    res.send('Hello welcome to the server'
    )
})



app.listen(3000, ()=>{
    console.log("Server is created successfully!");
})