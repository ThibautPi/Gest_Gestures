const passport = require('passport');
const firebase = require('firebase-admin');
const CustomStrategy = require('passport-custom').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const config = require('./configuration');
require('./configuration/firebase');


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

passport.use('firebase-auth', new CustomStrategy( (req, done) => {

  const token = req.headers['x-firebase-id-token']
  
  firebase.auth().verifyIdToken(token).then( decodedToken => {
    let uid = decodedToken.uid;
    done(null, uid);
  })
  .catch(error=> {
    done(error, null);
  })
}));