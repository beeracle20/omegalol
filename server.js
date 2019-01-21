const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('flash');
const User = require('./User');

const server = express();
const port = 1337;

const OPTIONS = {
    app: {
        root: `${__dirname}/client/public`,
        headers: {'Content-Type': 'text/html'}
    }
};

const USER_DB = [

];

server.use(express.static('public'));
server.use(cookieParser());
server.use(bodyParser());
server.use(session({ secret: 'lol kek cheburek' }));
server.use(passport.initialize());
server.use(flash());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        const user = USER_DB.find(item => {
            return item.email === email;
        });

        if (!user) {
            console.log('User not found!');
            return done(null, false);
        }
        if (user.password !== password) {
            console.log('Wrong password!');
            return done(null, false);
        }
        console.log('Successfuly signed in!');
        return done(null, user);
    }
  ));

server.get('/', (req, res) => {
    res.sendFile('index.html', OPTIONS.app, (err) => { 
        if(err) {
            res.statusCode('503');
        } else {
            server.use('/client', express.static(`${__dirname}/client`));
        }
    });
});

server.get('/signup', (req, res) => {
    res.redirect('/');
});

server.get('/userpage', (req, res) => {
    res.redirect('/');
});

server.post('/signup', (req, res) => {
    console.log('Registration...');
    const user = new User({email: req.body.email, password: req.body.password});
    USER_DB.push(user);
    console.log(user);
    console.log(USER_DB);
});

server.post('/signin', (req, res, next) => {
    passport.authenticate('local', function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send('Укажите правильный email или пароль!');
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        setTimeout(() => {
            res.send('userpage');
        }, 5000);
      });
    })(req, res, next);
  });

server.listen(port, () => console.log(`Server running on ${port} port`));