const express = require('express');
const router = express.Router();
const {response} = require("express");
router.use(express.static('public'));
const db = require('./connection');
const {route} = require("express/lib/router");

router.get('/', function(req, res, next) {
    res.render('map.ejs')
});

module.exports = router;