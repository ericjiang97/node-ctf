var Express = require('express');
var Random = require("./config/Random");
var helmet = require('helmet');
var fs = require('fs');
const app = Express();


var Random = Random.randomServerXPoweredBy();
var phpMode = false

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
if(Random.match("PHP")){
    phpMode = true
}
app.use(helmet.hidePoweredBy({ setTo: Random }));

app.get('/', function(req, res){
    if(phpMode){
        res.redirect('/index.php')
    }
    res.send('Hello World!');
});


app.get('/config', function(req,res){
    res.send(json)
});

app.get('/index.php', function(req, res){
    res.send('Hello World!');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
});

