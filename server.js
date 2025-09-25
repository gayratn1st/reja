console.log('web serverlar boshlash');
const express = require('express');
// const res = require("express/lib/response")
const app = express();
const http = require('http')
const fs = require("fs");

let user;
fs.readFile("database/user.json" , "utf8", (err,data) => {
    if(err) {
        console.log('ERROR:' , err);
    } 
    else {
        user = JSON.parse(data)
    }
});
//1 kirish
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//  2 session
// 3  Views

app.set("views" , 'views');
app.set("view engine" , 'ejs');

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get('/author', (req,res)=> {
    res.render("author",{user: user} );
})

app.get("/" , function ( req ,  res) {
    res.render('reja');
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT , function(){
    console.log(`THe server is running succesfully ${PORT}, http://localhost:${PORT} `);
})















