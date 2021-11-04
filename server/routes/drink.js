const express = require('express');
const router = express.Router();
const {response} = require("express");
const db = require('./connection');

router.get('/', function (req, res){
    const sql = "select * from liquors";

    db.query(sql, function (err, liquors, fields){
        if (err) throw err;
        res.render('drink', {liquors : liquors})
    })
})

module.exports = router;
