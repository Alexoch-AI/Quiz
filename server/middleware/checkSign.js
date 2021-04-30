const checkSign = (req, res, next) => {
  if (res.locals.email) {
    return next();
  }
  return res.send("Вы должны быть зарегистрированы");
};

module.exports = checkSign;
