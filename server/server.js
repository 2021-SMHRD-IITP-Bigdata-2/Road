const express = require("express");
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const {response} = require("express");
const db = require('./routes/connection');
const cookieParser = require("cookie-parser");

// .env 파일 사용
dotenv.config({ path: './.env'})

const drinkjs = require('./routes/drink');
app.use('/drink', drinkjs);
const googlejs = require('./routes/google.js');
app.use('/', googlejs);


//ejs 사용
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

// app.get('/drink', function (req, res){
//     const sql = "select * from liquors";
//
//     db.query(sql, function (err, liquors, fields){
//         if (err) throw err;
//         res.render('drink', {liquors : liquors})
//     })
// })


// Port = 3000번
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
