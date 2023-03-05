const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');
// create our express app
const app = express()
let cors = require("cors");
app.use(cors());
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route
const routes = require('./routes/Route')
app.use('/', routes)
//start server

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
// });


app.listen(3000, () => {
    console.log("listeniing at port:3000")
})