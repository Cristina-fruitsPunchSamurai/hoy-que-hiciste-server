require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors("*"));

app.get("/api/home" , (req,res) => {
    res.json({message : "Welcome to HQH server"});
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
});