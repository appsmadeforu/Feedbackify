// Handles authentication
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done)=> {
    User.findById(id).then((user)=>{
        done(null, user)
    })
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
    (accessToken, refreshToken, profile, done) => {
        // refreshtoken refreshes accesstoken after some time
        User.findOne({
            googleId: profile.id
        }).then((existingUser) => {
            if (!existingUser) {
                new User({
                    googleId: profile.id,
                    displayName: profile.displayName
                }).save().then((user) => done(null, user));
            } else {
                console.log("LOGGEDIN")
                done(null, existingUser)
            }
        })
    }
)
);