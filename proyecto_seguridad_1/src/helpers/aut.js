const helper = {};

helper.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }    
    req.flash('error_msg', 'Se necesita iniciar sesión');
    res.redirect('/');
};

module.exports = helper;