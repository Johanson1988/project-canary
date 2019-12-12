const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {type:String, required:true},
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question'}], //TODO do this required and populate when we have questions
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    winner: {type: mongoose.Schema.Types.ObjectId, ref: 'Player'},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    //scoreboard: [{type:{playerName:{type:String, default: 'test'}, score:{type:Number, default:99}}], TODO check how to savethis
    gameStatus: {type:String, enum:['waitingForPlayers','Running','Finished']}
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Game = mongoose.model('Game', gameSchema);
  
  module.exports = Game;