
console.log("web Serverni Boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));

const mongodb = require('mongodb')
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

//MongoDB chaqirish
const db = require("./server").db();


//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 Sesion code

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item')
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});


app.post("/delete-item" , (req , res )=> {
    const id = req.body.id;
    db.collection('plans').deleteOne(
        { _id: new mongodb.ObjectId(id)} , 
        function(err , data) {
        res.json({state:'success'});
    }
    );
});



app.get("/author", (req, res) => {
    res.render("author", {user: user});
});

app.get("/", function(req, res) {
    console.log('user entered /')
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja", {items: data});
        }
    });
});

module.exports = app;































// console.log('web serverlar boshlash');
// const express = require('express');
// // const res = require("express/lib/response")
// const app = express();
// const fs = require("fs");

// module.exports = app;




// let user;
// fs.readFile("database/user.json" , "utf8", (err,data) => {
//     if(err) {
//         console.log('ERROR:' , err);
//     } 
//     else {
//         user = JSON.parse(data)
//     }
// });
// console.log("JHhhhhhhhhhhhhhhhhhhhhhhhhhhh")
// const db = require('./server').db();

// //1 kirish
// app.use(express.static('public'));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// //  2 session
// // 3  Views

// app.set("views" , 'views');
// app.set("view engine" , 'ejs');

// // 4 Routing code
// app.post("/create-item", (req, res) => {
//     console.log(req.body);
//     const new_reja = req.body.reja;
//     db.collection("plans").insertOne({reja:new_reja}, (err,data) => {

//         if(err) {
//             res.end('something went wrong');
//         } else{
//             res.end('success')
//         }
//     } );
//     res.json({ test: "success" });
// });

// app.get('/author', (req,res)=> {
//     res.render("author",{user: user} );
// })

// app.get("/", function (req, res) {
//   db.collection("plans")
//     .find()
//     .toArray((err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("something went wrong");
//       } else {
//         console.log(data);
//         res.render("reja");
//       }
//     });
// });
















