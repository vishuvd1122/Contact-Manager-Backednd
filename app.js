const express = require("express");
const app=express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const expressRouter =require("./routes/contactRoutes")

app.use("",expressRouter);

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})