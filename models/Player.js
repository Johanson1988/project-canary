const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    username: {type: String, required: true}, //TODO update readme this field
    score: {type: Number},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    pictureURL: {type:String},
    socketId: {type:String},
    gameId: {type: mongoose.Schema.Types.ObjectId, ref: 'Game', required:true},
    bootcamp: { type: String, enum:['data','webdev', 'ux', 'other'], default: 'other'}
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Player = mongoose.model('Player', playerSchema);
  
  module.exports = Player;