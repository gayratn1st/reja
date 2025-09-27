const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://ggbro:123@cluster0.2sjrasc.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed"); 
      module.exports = client;
      

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log( `The sever is running successfully on port: ${PORT}, http://localhost:${PORT}`);
      });
    }
  }
);



















// const mongodb = require("mongodb");
// // const MongoClient = mongodb.MongoClient;
// const http = require("http");

// let db;

// const connectionString = 
// "mongodb+srv://ggbro:123@cluster0.2sjrasc.mongodb.net/Reja"






















// mongodb.connect(
//   connectionString,
//   { useNewUrlParser: true,
//     useUnifiedTopology: true },
//   (err, client) => {
//     if (err) console.log("ERROR on connection MongoDB");
//     else {
//         db = client.db("Reja");
//         module.exports = db;
//       console.log("MongoDB connection succeed");
//       const app = require("./app");
//       const server = http.createServer(app);
//       let PORT = 3000;
//       server.listen(PORT, function () {
//         console.log(`The server is running successfully on http://localhost:${PORT}`);
//       });
//     }
//   }
// );
// db = client.db("Reja");
// module.exports = db;
// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT , function(){
//     console.log(`THe server is running succesfully ${PORT}, http://localhost:${PORT} `);
// })
