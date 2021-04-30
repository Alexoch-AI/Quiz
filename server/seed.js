const mongoose = require('mongoose')
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0
}
require('dotenv').config()
const PORT = process.env.PORT;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const secretKey = process.env.secretKey;

const Question = require('./models/question')

function dbConnect() {
  mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, options, (err) => {
    if (err) return console.log(err)
  })
}
dbConnect()

function questionFabric() {
  const question = [
    {
    theme: "Счёт древних шизов",
    question: [{questionText: `Как называется первое 'число' в счёте друвних шизов?`,
    answer: "Ноль"}, {questionText: `Сколько "цифр" входит всчёт?`,
    answer: "11"}, {questionText: "Фамилия учёного, придумавшего счёт древних шизов:",
    answer: "Рыбников"}, {questionText: `Как называется последнее 'число' в счёте друвних шизов?`,
    answer: "Десятичок"}, {questionText: "Под каким числом у нас числится Аманатик?",
    answer: "Осьмушка"}]
  },
  {

    theme: "Вики-статья о столах",
    question: [{questionText: "Этот мем, или она реально существует?",
    answer: "Да"}, {questionText: "Стол — предмет обихода, мебельное изделие, имеющее приподнятую горизонтальную или наклонную поверхность, предназначенную для размещения на ней предметов и (или) для выполнения работ, принятия пищи, игр, рисования, обучения и другой деятельности. Да?",
    answer: "Да"}, {questionText: "В ней рассказывается о 26 видах столов?",
    answer: "Да"}, {questionText: "В ней 6 картинок столов?",
    answer: "Да"}, {questionText: "Сколько на 6 фотографиях столов стульев?",
    answer: "20"}]
  },
  {
    theme: "Аниме",
    question: [{questionText: "Одно из любимых аниме Макса?",
    answer: "Кейон"}, {questionText: "Саске или Наруто?",
    answer: "Да"}, {questionText: "Итоговое Саске или Наруто по Эльбрусу (61,1%)?",
    answer: "Наруто"}, {questionText: "Шари",
    answer: "Ган"}, {questionText: "2Д тян или 3Д тян?",
    answer: "ТНН"}]
  }
  ]
  return Promise.all(question.map((data) => Question.create(data)))
}


async function main() {
  await questionFabric()
}
main().then(() => {
  console.log('its work+')
  mongoose.disconnect()
})

module.exports = { questionFabric }
