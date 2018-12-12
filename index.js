var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res) {
    res.send("Hello World");
});

router.get('/user',function(req,res) {
    res.send("Hello User");
});

app.use('/',router);

app.listen(4000);