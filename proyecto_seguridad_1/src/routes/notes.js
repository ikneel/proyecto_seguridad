const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const {isAuthenticated} = require('../helpers/aut');


router.get('/notes/add', (req, res) => {
    res.render('notes/new_note');
})

router.post('/notes/new_note', async (req, res) => {
    const {titulo, descripcion} = req.body;
    const errors = [];
    if(!titulo){
        errors.push({text: 'Por favor escriba un titulo'});
    }
    if(!descripcion){
        errors.push({text: 'Por favor escriba una descripcion'});
    }
    if(errors.length > 0){
        res.render('notes/new_note', {
            errors,
            titulo,
            descripcion 
        });
    } else {
        const newNote = new Note({titulo, descripcion});
        newNote.user = user;
        await newNote.save();
        req.flash('success_msg', 'Nota Agregada');
        res.redirect('/notes');
    }
});

router.get('/notes', async (req, res) => {
    console.log(user);
    console.log(user.length);
    console.log(au);
    if(user.length > 0){
        au = true
    }
    console.log(au);
    const notas = await Note.find({user: user}).sort({date: 'desc'});
    console.log(notas);
    if (au) {
        res.render('notes/notas', {notas}); 
    }
        
});  

router.get('/notes/edit/:id',async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-note', {note});
});

router.put('/notes/edit-note/:id', async (req, res) =>{
    const {titulo, descripcion} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {titulo, descripcion});
    req.flash('success_msg', 'Nota actualizada');
    res.redirect('/notes');
});

router.delete('/notes/delete/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Nota eliminada');
    res.redirect('/notes');
});
module.exports = router;    