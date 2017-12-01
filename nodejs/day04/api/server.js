var express = require('express');
var router = require('./router.js');

express().listen(999);
router.Register(express);
