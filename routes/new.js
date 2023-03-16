var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
   
  const message = new message ({
      username: req.body.username,
      messageText: req.body.messageText,
      date: new Date, 
    });
     
    res.render("form", {
      title: "New Message",
      message,
    });

    res.redirect('/');
});

module.exports = router;
