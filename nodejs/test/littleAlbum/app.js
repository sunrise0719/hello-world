var express=require("express");
var router=require("./controller");

var app=express();

app.set("view engine","ejs");
app.use(express.static("./public"));

app.get("/",router.showPrint);


app.listen(3000);