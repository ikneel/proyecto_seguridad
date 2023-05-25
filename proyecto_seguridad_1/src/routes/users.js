const express = require('express');
const router = express.Router();
const Users =   required('../models/Users');
router.post('/users/signin', (req, res) => {
    console.log(req.body)
    res.send('ok');
});

router.post('/users/signup', async (req, res) => {
    console.log(req.body);
    const {name, phone, email, password} = req.body;
    const errors = [];
    console.log(password.length);
    if(name.length <= 0){
        errors.push({text: 'Ingresa tu nombre'});
    }
    if(password.length < 4){
        errors.push({text: 'La contraseña debe ser mayor a 4 caracteres'}); 
    }
    if(errors.length > 0){
        res.render('partials/index', {errors, name,phone, email, password });
    } else{
        const emailUser = await Users.findOne({email: email});
        if (emailUser){
            req.flash('error_msg', 'El correo ya esta registrado');
            res.redirect('partials/index');
        }
        const newUser = new Users({name, phone, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Cuenta Registrada. Incia Sesión');
        res.redirect('partials/index');
    }
    console.log(errors);
});

module.exports = router;