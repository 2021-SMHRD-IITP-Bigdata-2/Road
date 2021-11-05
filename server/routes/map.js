const express = require('express');
const router = express.Router();
const {response} = require("express");
router.use(express.static('public'));
const db = require('./connection');
const {route} = require("express/lib/router");
router.use(express.json());

router.get('/', function(req, res, next) {
    res.render('map.ejs')
});

router.post("/food",(req,res)=>{
    console.log(req.body.food)
    const foodName = "%"+req.body.food+"%"
    // res.json(req.body.food)
    const sqlSelect = "SELECT * FROM foods where food_name LIKE ?"
    db.query(sqlSelect,foodName,(err,foods)=>{
        console.log(foods)
        res.json(foods)
        res.render('map', {foods : foods})
    })
})

module.exports = router;