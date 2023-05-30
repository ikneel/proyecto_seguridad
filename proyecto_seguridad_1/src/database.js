const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbusuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(db => console.log('DB connected'))
  .catch(err => console.error(err));
