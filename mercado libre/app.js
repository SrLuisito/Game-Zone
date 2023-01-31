const express = require ('express');
const app = express();
const port = 3000
const path = require ('path');

app.use (express.static(__dirname + "./public"));

app.listen(port, () => {
    console.log("servidor funcionando en puerto " + port);
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.use(express.static("public"));