const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send(`${num1} + ${num2} = ${result}`);
})

app.get('/bmi', function (req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmi', function (req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  height = height / 100;
  
  var bmi = weight / (height * height);

  res.send(`Your BMI is ${bmi}`)
})

app.listen(3000, function (){
  console.log("Server started on port 3000.");
});