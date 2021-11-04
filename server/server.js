const express = require("express");
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const dotenv = require('dotenv');
const {response} = require("express");

// .env 파일 사용
dotenv.config({ path: './.env'})

// mysql 설정 start
// .env 파일에 깃허브 푸쉬할때 보안때문에 설정해놓음
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
// 연결했을때 에러뜨면 콘솔에 띄워야 에러가 확인됨
db.connect( (error) => {
    if(error){
        console.log(error)
    } else{
        console.log("MYSQL Connected.....")
    }
});
// mysql 설정 end

// Port = 3000번
const PORT = process.env.PORT || 3000;

//ejs 사용
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/drink', function (req, res){
    const sql = "select * from liquors";

    db.query(sql, function (err, liquors, fields){
        if (err) throw err;
        res.render('drink', {liquors : liquors})
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});