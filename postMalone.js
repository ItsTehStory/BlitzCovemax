var request = require("request");
// var client = request.createClient('http://localhost/');

var exemple = {
    puzzles: [
        {
            origin: { row: 0, col: 0 },
            end: { row: 4, col: 4 },
            scrambledPath: "r?d?drdd"
        },
        {
            origin: { row: 3, col: 1 },
            end: { row: 1, col: 1 },
            scrambledPath: "ru??ur"
        }
    ]
}

// client.post('api/', exemple, () => console.log('Max'));

// request.post("http://127.0.0.1/api", {body: exemple});

var options = {
    method: 'post',
    body: exemple,
    json: true,
    url: "http://34.227.162.154/api"
}
request(options, function (err, res, body) {
    if (err) {
        console.error('error posting json: ', err)
        throw err
    }
    var headers = res.headers
    var statusCode = res.statusCode
    console.log('headers: ', headers)
    console.log('statusCode: ', statusCode)
    console.log('body: ', body)
})