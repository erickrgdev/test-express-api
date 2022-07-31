var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/auth/login', function(req, res, next) {
  let token = req.body.username;
  res.set('Authorization', 'Bearer ' + token);
  res.send({token});
});

router.get('/api/getUserByToken/:token', function(req, res, next) {
  res.send(
    {
      username: req.params.token.substring(0, 3),
      name: req.params.token.substring(1, 4)
    });
});

router.get('/api/tarjeta/:nip/:cardNumber', function(req, res, next) {
  res.send(
    {
      carDetails: "Car details: " + req.params.cardNumber
    });
});

router.get('/api/chofer/:idChofer/:nip/:token', function(req, res, next) {
  res.send(
    {
      driverInfo: "Car info: " + req.params.idChofer + req.params.idChofer
    });
});

module.exports = router;
