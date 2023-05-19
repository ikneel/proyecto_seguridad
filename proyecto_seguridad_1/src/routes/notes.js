const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

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
        await newNote.save();
        res.redirect('/notes');
    }
});

router.get('/notes', (req, res) => {
    res.send('Notas');
});
module.exports = router;