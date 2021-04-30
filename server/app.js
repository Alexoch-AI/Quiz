require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const cors = require("cors");

const User = require("./models/user.model");
const Question = require('./models/question')

const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");

const app = express();
const PORT = process.env.PORT;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const secretKey = process.env.secretKey;

app.set("cookieName", "Cokz");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: app.get("cookiname"),
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    }),
    cookie: {
      httpOnly: true,
      maxAge: 90000 * 1e3,
    },
  })
);

app.use(async (req, res, next) => {
  const userId = req.session?.user?.id;
  if (userId) {
    const currentUser = await User.findById(userId);
    if (currentUser) {
      res.locals.user = currentUser;
      res.locals.email = currentUser.email;
    }
  }
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// app.use(cors());
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/item", postRouter);

app.get('/questions',async (req, res) => {
  let allthequestions = await Question.find()
  console.log(allthequestions)
  res.json(allthequestions);
})

app.post('/answer', async (req,res) => {
  const {answer, i, them} = req.body
  console.log(answer)
  const findedQuestion = await Question.findOne({theme: them.quest.theme})
  console.log((i/100)-1, 'THEM');
  const trueone = findedQuestion.question[(i/100)-1].answer
  console.log(findedQuestion.question[(i/100)-1]);
  if (answer.toLowerCase() === trueone.toLowerCase()) {
    return res.sendStatus(200)
  } 
  return res.sendStatus(400)
})

app.listen(PORT, () => {
  console.log(`Спаси и сохрани`);
  connect(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    () => {
      console.log("Дальше бога нет", PORT);
    }
    );
  });
  