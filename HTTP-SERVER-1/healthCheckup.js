const express = require("express");
const app = express();
const userMiddleware = (req,res,next) =>{
    if (username !== "ritik" && password !== "pass12340") {
        res.status(403).json({
          msg: "user does not exist",
        });
    }
    else{
        next();
    }
}
const kidneyMiddleware = (req,res,next) =>{
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
          msg: "invalid input",
        });
    }
    else{
        next();
    }
}
app.get("/health-checkup",userMiddleware,kidneyMiddleware, (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;
  res.send("you are healthy");
});
app.listen(8000);