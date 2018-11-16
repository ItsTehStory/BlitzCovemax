var express = require('express');
var resoudre = require('./index');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var team = {
    teamName: "Les Jardiniers",
    solutions: ["rrdrdrdd", "rullur"],
    participants: [
        {
            isCaptain: true,
            fullName: "Thomas Camire",
            email: "thomas.camire@gmail.com",
            googleAccount: "thomas.camire@gmail.com",
            phone: "4189280404",
            school: "Polytechnique Montreal",
            schoolProgram: "Genie Logiciel",
            graduationDate: 1619827200000
        },
        {
            isCaptain: false,
            fullName: "Philippe Ballandras",
            email: "philippe.ballandras@hotmail.com",
            googleAccount: "philippe.ballandras@hotmail.com",
            phone: "4389989504",
            school: "Polytechnique Montreal",
            schoolProgram: "Genie Logiciel",
            graduationDate: 1619827200000
        },
        {
            isCaptain: false,
            fullName: "Vincent Tessier",
            email: "vincetess9@gmail.com",
            googleAccount: "vincetess9@gmail.com",
            phone: "5149279909",
            school: "Polytechnique Montreal",
            schoolProgram: "Genie Logiciel",
            graduationDate: 1619827200000
        },
        {
            isCaptain: false,
            fullName: "Hugo Leclair",
            email: "hugo.leclair97@gmail.com",
            googleAccount: "hugo.leclair97@gmail.com",
            phone: "5148959436",
            school: "Polytechnique Montreal",
            schoolProgram: "Genie Informatique",
            graduationDate: 1619827200000
        }
    ]
}


// app.get('/', function (req, res) {
//     console.log("Requested");
//     var rep = resoudre();
//     team.solutions = [rep];
//     res.json(team);
// });

app.post('/api', function (req, res) {
    console.log(req.body);
    var ar = [];
    req.body.puzzles.forEach(element => {
        ar.push(resoudre (element.origin, element.end, element.scrambledPath));
    });
    // console.log("Entered");
    // console.log("Requested");
    // var rep = resoudre();
    team.solutions = ar;
    res.json(team);
});

try {
    app.listen(80, () => console.log("Listening on port 80"));
} catch (error) {
    console.log("port 80 = root; stopping");
}


// Addresse du serveur http://34.227.162.154/
