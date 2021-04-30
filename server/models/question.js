const { Schema, model, pluralize } = require('mongoose')
pluralize(null);


const questionSchema = new Schema({
  theme: String,
  question: Object

})
const Question = model('Question', questionSchema)
module.exports = Question
