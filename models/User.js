const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  email:{ type: String, required: true, unique:true},
  username: { type: String, required: true},
  password: { type: String, required: true},
  gamesPlayed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
  bootcamp: { type: String, enum:['data','webdev', 'ux', 'other'], default: 'other'},
  gamesCreated : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
  gamesWon : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
  photoUrl: {type: 'String'}


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;