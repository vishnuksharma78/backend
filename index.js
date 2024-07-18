require('dotenv').config()

const express = require("express");
// import express from "express" ;  // require express

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter",(req,res)=>{
    res.send("This is a twitter page");
})

app.get("/login",(req,res)=>{
    res.send(`<h1>Please login at getcodr </h1>`)
})

app.get("/youtube",(req,res)=>{
    res.send(`<h2>Chai aur Backend </h2>`)
})

app.get("/github",(req,res)=>{
    res.send(`<h3>listing on github at port ${port}`)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
