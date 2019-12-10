const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    username: {type: String, required: true}, //TODO update readme this field
    score: {type: Number, required:true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    pictureURL: {type:String},
    //client: Socket
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Player = mongoose.model('Player', playerSchema);
  
  module.exports = Player;