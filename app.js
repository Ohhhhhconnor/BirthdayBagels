var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
// app.use(express.static("public"));
app.set("view engine", "ejs");

var today = new Date();
var confirmDate = new Date();
var test = new Date();
confirmDate.setHours(24,0,0,0);

today = today.getTime();
confirmDate = confirmDate.getTime();

var eventData = {
    confirmed: 0,
    who: "Someone Awesome",
    what: "bagels"
};

app.get("/", function(req, res){
    today = new Date();
    today = today.getTime();
    res.render("home",
    {
        eventData: eventData,
        today: today,
        confirmDate: confirmDate,
        test: test
    });
});

app.post("/", function(req, res){
    eventData.confirmed = 1;
    eventData.who = req.body.who;
    eventData.what = req.body.what;

    confirmDate = new Date();
    confirmDate.setHours(24,0,0,0);
    confirmDate = confirmDate.getTime();
    res.redirect('/');
});

app.post("/fix", function(req, res){
    eventData.confirmed = 0;
    res.redirect('/');
});

// app.post("/test", function(req, res){
//     var test = new Date();
//     test.setHours(25,0,0,0);
//     test = test.getTime();
//     res.render("home",
//     {
//         eventData: eventData,
//         today: today,
//         confirmDate: confirmDate,
//         test: test
//     });
// });

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server is listening!");
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
