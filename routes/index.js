var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Bethesda Healing Ministries',copy:'Pastor Richards',description : 'Bruce lee,Chucknurries,Prabhash',
        user : req.user });
});
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Bethesda Healing Ministries',copy:'Pastor Richards' });
});
router.get('/events', function(req, res, next) {
    res.render('events', { title: 'Events Bethesda Healing Ministries',copy:'Pastor Richards' });
});
router.get('/gallery', function(req, res, next) {
    res.render('gallery', { title: 'Events Bethesda Healing Ministries',copy:'Pastor Richards' });
});
router.get('/error', function(req, res, next) {
    res.render('error', { title: 'Sorry Page not Found 404!!',copy:'Pastor Richards',description : 'Bruce lee,Chucknurries,Prabhash',
        user : req.user });
});

module.exports = router;
