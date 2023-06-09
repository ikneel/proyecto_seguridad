const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('partials/index', {au:au});
    console.log(user);
});

router.get('/about', (req, res) => {
    res.render('partials/about');
})

module.exports = router;