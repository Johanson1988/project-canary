const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
require('dotenv').config();

const Game = require('./models/Game');
const Player = require('./models/Player');

//const auth = require('./routes/auth');


// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
  })
  .then( () => console.log(`Connected to database`))
  .catch( (err) => console.error(err));


// EXPRESS SERVER INSTANCE
const app = express();


// CORS MIDDLEWARE SETUP
app.use(
  cors({
    credentials: true,
    origin: [process.env.PUBLIC_DOMAIN,'https://iron-canary.herokuapp.com'],
  }),
);
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

//SOCKETS

const http = require('http');
const io = require('socket.io')();
const socketAuth = require('socketio-auth');


const PORT = process.env.PORTSOCKET || 9000;
const server = http.createServer();

io.attach(server);


async function verifyPlayer (_id) {
  return new Promise((resolve, reject) => {    
      return Player.findOne({_id})
        .then((playerFound) => resolve(playerFound))
        .catch(() => reject('USER_NOT_FOUND'));            
  });
}

socketAuth(io, {
  authenticate: async (socket, data, callback) => {
    const { _id } = data;

    try {
      const player = await verifyPlayer(_id);

      socket.user = player;
      return callback(null, true);
    } catch (e) {
      console.log(`Socket ${socket.id} unauthorized.`);
      return callback({ message: 'UNAUTHORIZED' });
    }
  },
  postAuthenticate: (socket) => {
    console.log(`Socket ${socket.id} authenticated.`);
    socket.join(socket.user.gameId);
    
    
  },
  disconnect: (socket) => {
    console.log(`Socket ${socket.id} disconnected.`);
  },
});

io.on('connection', socket => socket.on('answer',  (answer) => {
  //if answerRight do todo esto
  if (answer.answerRight) {
    const {_id,gameId} = socket.user;
    const {questionNumber} = answer;
    //                Game.updateOne({_id:player.gameId}, {$push:{players:player._id}})
    //{'subjects.topics.modules.classes':{"$elemMatch":{'name':'Math'}}}]
    Game.findOneAndUpdate({_id:gameId}, {'scoreboard.questionNumber':1})
      .then(gameFound => {
        console.log(gameFound.scoreboard[answer.questionNumber]);
        const score = gameFound.scoreboard[answer.questionNumber].pop();
        console.log(gameFound.scoreboard[answer.questionNumber]);
        gameFound.save()
          .then (_ => {
            Player.findOneAndUpdate({_id},{score},{new:true})
              .then(playerFound =>{
                console.log(playerFound);
                socket.user = playerFound;
              })
              .catch(err => console.error(err));
          })
          .catch(err => console.error(err));
        

        socket.user.score = score;
        
        //console.log(socket.user);

      })
      .catch(err => console.error(err));
  
  }
  
}));

server.listen(PORT);
app.locals.io = io;



// SESSION MIDDLEWARE
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

// MIDDLEWARE
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ROUTER MIDDLEWARE
const router = require('./routes/index');
app.use('/', router);
//app.use('/auth', auth); TODO Delete

// ROUTE FOR SERVING REACT APP (index.html)
app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

// ERROR HANDLING
// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: 'not found' });
});


app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    const statusError = err.status || '500';
    res.status(statusError).json(err);
  }
});


module.exports = app;
