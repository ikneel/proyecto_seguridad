const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const passport = require('passport');

/*router.post('/users/signin', async (req, res, next) => {console.log(req.body); next();},passport.authenticate('local', {
    successRedirect: '/notes',
    failureRedirect: '/',
    failureFlash: true,
    
}));
*/

router.post('/users/signin', async (req, res) => {
    console.log("Ejecución de login en modo no seguro");
    console.log(req.body)
    try {
      const data = await Users.findOne({ 'email': req.body.email, 'password': req.body.password }).exec();
      if (data) {
        console.log(data);
        console.log('¡Haz ingresado!');
        console.log(req.body.email);
        user = req.body.email;
        console.log(user)
        res.redirect('/notes');
      } else {
        req.flash('error_msg', 'Usuario o Contraseña no encontrados');
        res.redirect('/');
      }
    } catch (err) {
      res.send(err);
    }
});
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
    console.log(user);
    user = 0;
    console.log(user.length);
    res.redirect('/');
});

module.exports = router;