const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Name: String,
// GamesPlayed: [Game ObjectID],
// profilePic: String, //(cloudinary)
// bootcamp: enum[data,webdev,ux]
// gamesCreated: [Game ObjectID],
// gamesWon: Number

const userSchema = new Schema({
  username: { type: String, required: true},
  password: { type: String, required: true},
  gamesPlayed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
  bootcamp: { type: String, enum:['data','webdev', 'ux', 'other'], default: 'other'},
  gamesCreated : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
  gamesWon : { type: Number, default: 0 },
  photoUrl: {type: 'String'}


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;