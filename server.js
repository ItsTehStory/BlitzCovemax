var express = require('express');
var resoudre = require('./index');
var app = express();

var team = {
    teamName: "Les Jardiniers",
    solutions: ["rrdrdrdd", "rullur"],
    participants: [
        {
            isCaptain: true,
            fullName: "Thomas Camire",
            email: "string",
            googleAccount: "string",
            phone: "string",
            school: "string",
            schoolProgram: "string",
            graduationDate: 0
        },
        {
            isCaptain: false,
            fullName: "Philippe Ballandras",
            email: "philippe.ballandras@hotmail.com",
            googleAccount: "philippe.ballandras@hotmail.com",
            phone: "4389989504",
            school: "Polytechnique Montreal",
            schoolProgram: "Genie Logiciel",
            graduationDate: 0
        },
        {
            isCaptain: false,
            fullName: "Vincent Tessier",
            email: "string",
            googleAccount: "string",
            phone: "string",
            school: "string",
            schoolProgram: "string",
            graduationDate: 0
        },
        {
            isCaptain: false,
            fullName: "Hugo Leclair",
            email: "string",
            googleAccount: "string",
            phone: "string",
            school: "string",
            schoolProgram: "string",
            graduationDate: 0
        }
    ]
}


app.get('/', function (req, res) {
    console.log("Requested");
    var rep = resoudre();
    team.solutions = [rep];
    res.json(team);
});

try {
    app.listen(80, () => console.log("Listening on port 80"));
} catch (error) {
    console.log("port 80 = root; stopping");
}


// Addresse du serveur http://34.227.162.154/