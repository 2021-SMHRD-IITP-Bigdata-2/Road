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
const cors = require('cors');


// .env 파일 사용
dotenv.config({ path: './.env'})

const googlejs = require('./routes/google.js');
app.use('/', googlejs);
const mapRouter = require('./routes/map.js')
app.use('/map', mapRouter);
const drinkRouter = require('./routes/drink.js');
app.use('/drink', drinkRouter);

// const testRouter = require('./routes/mbti.js')
// app.use('/mbti', testRouter);

//ejs 사용
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// // Router 입력
// // http://localhost:3000/drink
// const drinkRouter = require('./routes/drink');
// app.use('/drink', drinkRouter);
//
// // http://localhost:3000/login
// const googleRouter = require('./routes/google.js');
// app.use('/', googleRouter);
//
// // http://localhost:3000/api/login
// const router = require("./routes/router.js");
// app.use('/api', router);

// // http://localhost:3000/community
// const introductionRouter = require('./routes/community.js');
// app.use('/community', communityRouter);

// // http://localhost:3000/map
// const mapRouter = require("./routes/map.js");
// app.use('/map', mapRouter);

app.get('/introduction', (req, res) => {
    res.render('introduction')
    console.log('introduction');
});



app.get("/register", function(req, res){
    res.render('join')
})





// Port = 3000번
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
