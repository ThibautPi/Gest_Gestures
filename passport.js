const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const config = require('./configuration');

//JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
  secretOrKey: config.JWT_SECRET,
}, async function(payload,done){
  try{
    done(null,payload.sub);
  } catch (error){
    done(error,false);
  }
}));
