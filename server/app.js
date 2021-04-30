require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const hbs = require("hbs");
const path = require("path");
const cors = require("cors");

const User = require("./models/user.model");

const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");

const app = express();
const PORT = process.env.PORT;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const secretKey = process.env.secretKey;

app.set("cookieName", "myCoocka");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
hbs.registerPartials(path.join(process.cwd(), "views", "partials"));

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
  res.header('Access-Control-Allow-Origin', 'http://localhost:3002');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// app.use(cors());
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/item", postRouter);

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
      console.log("Дальше бога нет");
    }
  );
});
