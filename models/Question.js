const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// type: enum[data,webdev,ux],
//         createdBy: User ObjectID,
//         rightAnswer: String,
//         wrongAnswers: [String],
//         picture: String, //(cloudinary)
//         BACKLOG(difficulty: enum[easy,hard])

const userSchema = new Schema({
    questionType: {type:String, enum:['data','webdev', 'ux'], required: true}, //TODO update readme name
    rightAnswer: {type: String, required: true},
    wrongAnswer1: {type:String, required: true}, //TODO update this on readme
    wrongAnswer2: {type:String, required: true},
    wrongAnswer3: {type:String, required: true},
    pictureUrl: {type:String},   //TODO make this required and update this on readme
    difficulty: {type:String, enum:[easy,hard], default:'easy'},
    created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true} //Add this to readme
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;