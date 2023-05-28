const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const passport = require('passport');

router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/notes',
    failureRedirect: '/',
    failureFlash: true
}));

router.post('/users/signup', async (req, res) => {
    console.log(req.body);
    const { name, phone, email, password } = req.body;
    const errors = [];
    if (name.length <= 0) {
        errors.push({ text: 'Ingresa tu nombre' });
    }
    if (password.length < 4) {
        errors.push({ text: 'La contraseña debe ser mayor a 4 caracteres' });
    }
    if (errors.length > 0) {
        res.render('partials/index', { errors, name, phone, email, password });
    } else {
        const emailUser = await Users.findOne({ email: email });
        if (emailUser) {
            req.flash('error_msg', 'El correo ya esta registrado');
            res.redirect('/');
        }
        else {
            const newUser = new Users({ name, phone, email, password });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Cuenta Registrada. Incia Sesión');
            res.redirect('/');
        }
    }
});

router.get('/users/logout', (req, res) => {
    req.logout(function (err) {
        if (err) {
            // Manejo del error, si es necesario
            console.error(err);
            return next(err);
        }
        res.redirect('/');
    });
});

module.exports = router;