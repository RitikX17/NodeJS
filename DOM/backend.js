const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors({ origin: 'http://127.0.0.1:5500' }));
app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.listen(8080)
