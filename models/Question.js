const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    questionType: {type:String, enum:['data','webdev', 'ux'], required: true}, //TODO update readme name
    question: {type:String, required : true},
    rightAnswer: {type: String, required: true},
    wrongAnswer1: {type:String, required: true}, //TODO update this on readme
    wrongAnswer2: {type:String, required: true},
    wrongAnswer3: {type:String, required: true},
    photoUrl: {type:String},   //TODO make this required and update this on readme
    difficulty: {type:String, enum:['easy','hard'], default:'easy'},
    created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true} //Add this to readme
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Question = mongoose.model('Question', questionSchema);
  
  module.exports = Question;