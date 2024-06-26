const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require("../models/user.model.js");
const dotenv = require("dotenv");
dotenv.config();
const SECRET = process.env.SECRET;

const ExtractJWT = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
    secretOrKey: SECRET,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  };

  passport.use(
    new Strategy(params, function (payload, done) {
        User.find({ _id: payload.id })
        .then(([user]) => {
            if (!user || !user.token) {
                return done(new Error("User not found"));               
            }
            return done(null, user);
        })
        .catch((err) => done(err));
    })
  );


