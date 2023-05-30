const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const bodyParser = require('body-parser');
//Inicializaciones

const app = express();
require('./database');
require('./config/passport');

//Incersion de la base de datos
const insertSeedData = require('./seeds/seed')


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
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'ikneel',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(flash());
//Variables globales
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null; 
    next();
})
//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
//Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

//Servidor

app.listen(app.get('port'), async() => { 
    console .log('Server on port', app.get('port'));

    //Incersion de la base de datos
    try{
        await insertSeedData();
        console.log('incersion de datos completada');
    } catch (error){
        console.error('error al incertar los datos', error)
    }

});