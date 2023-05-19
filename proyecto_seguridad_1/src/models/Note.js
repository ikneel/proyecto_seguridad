const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
    titulo: {type: String, requires: true}, 
    descripcion: {type: String, requires: true}, 
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Note', NoteSchema);