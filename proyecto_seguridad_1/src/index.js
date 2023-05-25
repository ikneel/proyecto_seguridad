const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
//Inicializaciones

const app = express();
require('./database');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main', 
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    runtimeOptions:{allowProtoPropertiesByDefault:true,
        allowedProtoMethodsByDefault:true}
}));

app.set('view engine', '.hbs');
//Puntos medios
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'ikneel',
    resave: true,
    saveUninitialized: true
}))
app.use(flash());

//Variables globales
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
})
//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
//Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

//Servidor

app.listen(app.get('port'), () => { 
    console .log('Server on port', app.get('port'))
})