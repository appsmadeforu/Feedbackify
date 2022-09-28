const passport = require('passport');

module.exports = app => {
    // ROUTE HANDLER (handles google login)
    // when passport.authenticate uses string 'google' it shoots all the googlestratergy code
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }
        ));

    app.get('/auth/google/callback', passport.authenticate('google'))
    
    app.get('/api/logout', (req, res)=> {
        req.logout(); //logout function is attached by passport
        // it will kill the cookie and logout the user
        res.send(req.user);
    })
    app.get('/api/current_user', (req, res)=>{
        res.send(req.user); // Already logged in user can get the access because user is in the session now
    })
}