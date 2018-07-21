/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var express = require('express');
var app = express();
app.use(express.static(__dirname + '/www'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});