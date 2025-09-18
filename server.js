console.log('web serverlar boshlash');

const express = require('express');
const app = express();
const http = require('http')

//1 kirish
app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));
console.log('GAy')



//  2 session

// 3  Views

app.set("views" , 'views');
app.set("view engine" , 'ejs');

console.log('GAy1')

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/" , function ( req ,  res) {
    res.render('harid');
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT , function(){
    console.log(`THe server is running succesfully ${PORT} `);
})

console.log('GAy')
















