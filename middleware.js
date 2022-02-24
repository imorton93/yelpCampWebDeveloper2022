module.exports.isLoggedIn = (req, res, next)  => {
    if(!req.isAuthenticated()){
        //store URL they are requesting
        req.session.returnTo = req.originalUrl
        req.flash('error', 'you must be signed in first!');
        res.redirect('/login');
    }
    next();
}