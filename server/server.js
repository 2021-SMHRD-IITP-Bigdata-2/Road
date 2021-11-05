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

const googlejs = require('./routes/google.js');
app.use('/', googlejs);
const mapRouter = require('./routes/map.js')
app.use('/map', mapRouter);
const drinkRouter = require('./routes/drink.js');
app.use('/drink', drinkRouter);



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
