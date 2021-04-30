const { Schema, model, pluralize } = require('mongoose')
pluralize(null);


const questionSchema = new Schema({
  theme: String,
  questionText: String,
  answer: String,

})
const Question = model('Question', questionSchema)
module.exports = Question
