const Note = require('../models/Note');

module.exports = {
    isDataInserted: async function(){
        const count = await Note.countDocuments();
        return count > 0;
    }

}