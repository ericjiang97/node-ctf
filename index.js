var Express = require('express');
var random = require("./config/Random");
var helmet = require('helmet');
var fs = require('fs');
var auth = require('http-auth');
const app = Express();

var adminConfig = {
    "adminUserName": "admin",
    "password": "password"
}
var phpMode = false
var Random = random.randomServerXPoweredBy();
var minutes = 0.5, the_interval = minutes * 60 * 1000;
setInterval(function() {
    Random = random.randomServerXPoweredBy();
    if(Random.match("PHP")){
        phpMode = true
    } else {
        phpMode = false
    }
    app.use(helmet.hidePoweredBy({ setTo: Random }));
}, the_interval);


function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){
    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

console.log(Random)
var json = getConfig('package.json')

var basic = auth.basic({
        realm: "Web."
    }, function (username, password, callback) { // Custom authentication method.
        callback(username === adminConfig.adminUserName && password === adminConfig.password);
    }
);

app.get('/', function(req, res){
    if(phpMode){
        res.redirect('/index.php')
    }
    res.send('Hello World!');
});

app.get('/password', function(req, res){
    if(req.query.forget == true){   
        res.send(adminConfig)
    }
});

app.get('/config', auth.connect(basic), (req,res) => {
    res.send(json)
});

app.get('/index.php', function(req, res){
    res.send('Hello World!');
});


app.get('*', function(req, res){
    res.status(404).send("Unknown Route")
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
});

