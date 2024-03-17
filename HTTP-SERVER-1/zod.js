const express = require("express");
const zod = require('zod')
const app = express();

// const schema = zod.array(zod.number());
/*{
    email: string and @.com must be present
    password: at least 8 length
    country: "IN","US"
}*/

const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US"))
})
app.use(express.json());


app.get("/health-checkup",(req, res) => {
    //kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if(!response.success){
    res.status(411).json({
        msg:"Input is Invalid"
    })
  }
  res.send({
    response
  });
});
app.listen(8000);