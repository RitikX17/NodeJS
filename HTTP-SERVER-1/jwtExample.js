const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "1234567890";

const app = express();
app.use(express.json( ))
const ALL_USERS = [
  {
    username: "shila@gmail.com",
    password: "shila1233",
    name: "shila singh",
  },
  {
    username: "ramila@gmail.com",
    password: "ramila121313",
    name: "ramila naik",
  },
  {
    username: "sanjay@gmail.com",
    password: "sanju1233",
    name: "sanju samson",
  },
];
const userExists = (username,password) => {
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
            return true;
        }
    }
    return false;
};

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "user dosent exits in our memoery db",
    });
  }
  const token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req,res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
      users: ALL_USERS.filter((value)=>{
        if(value.username === username){
          return false;
        }
        else{
          return true;
        }
      })
    });
  } 
  catch (err) {
    console.log(err);
    return res.status(403).json({
      msg: "invalid token",
    });
  }
});

app.listen(3000);
