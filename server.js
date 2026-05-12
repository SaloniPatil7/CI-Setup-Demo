const express = require("express");
const app = express();
const sum =require("./sum.js")
const port = 8000
app.listen(port,()=>{
   console.log(`server listining on ${port}`);
})

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/getSum/:a/:b", (req, res) => {
  const {a,b} = req.params;
  res.send(sum(parseInt(a),parseInt(b)));   
});

module.exports = app;