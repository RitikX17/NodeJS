const express = require("express");
const app = express();

var users = [
    {
      name: "john",
      kidneys: [
        {
          healthy: false,
        },
        {
          healthy: true,
        },
      ],
    },
  ];

app.get("/", (req, res) => {
    const userName = users[0].name;
    const userKidneys = users[0].kidneys;
    const numOfKidneys = userKidneys.length;
    let numOfHealthyKidneys = 0;
    for(let i=0;i<numOfKidneys;i++){
        if(userKidneys[i].healthy){
            numOfHealthyKidneys+=1;
        }
    }
    const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
    // res.send(`The number of kidneys ${userName} has is ${numOfKidneys} and healthy kidneys are ${numOfhealthyKidneys}`)
    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
});
app.use(express.json())
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy:isHealthy
  })
  res.json({
    msg: "Done!"
  })
});

app.put("/", (req, res) => {
  for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = false;
  }
  res.json({msg: "Updated kidney status"})
});

app.delete("/", (req, res) => {
    
    const newKidneys = [];
    let numOfHealthyKidneys = 0;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            numOfHealthyKidneys+=1;
            newKidneys.push({
                healthy:true
            })
        }
    }
    if(users[0].kidneys.length == numOfHealthyKidneys){
        res.status(411).json({
            msg:"All kidneys are healthy"
        });
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg:"All unhealthy kidneys removed Succesfully"
    });
});

app.listen(3001);