const express = require("express");
const app = express()


app.get('/', (req, res) => {
    res.send("Hello this is / path");
})
app.get('/test', (req, res) => {
    res.send("Hello this is test path");
})



app.listen(5000, (req, res) => {
    console.log("Server connected on 5000")
})