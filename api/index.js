const express = require("express");
const app = express();
const testRoute = require("../testroute");


app.get('/', (req, res) => {
    res.send("Hello this is / path");
})

app.use(testRoute);

app.listen(3000, (req, res) => {
    console.log("Server connected on 3000")
})