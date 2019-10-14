const express = require('express');
const notifications = require('./notifications');

const router = express.Router();


/** GET / - Check service health */
router.get('/api', (req, res) =>
  res.send('OK api ready!')
);


router.use('/', notifications);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
