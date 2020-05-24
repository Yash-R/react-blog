var express = require("express");
var app = express();
var mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/paylaterv33",{useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://YashRathore:Yash@1999@cluster0-azuhu.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("DB connected"))


app.get("/", (req, res)=>{
  res.send("hi")
})

app.listen(3000, function(req, res){
    console.log("Server Started")
})