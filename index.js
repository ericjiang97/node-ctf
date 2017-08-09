var Express = require('express');
var Random = require("./config/Random");
var helmet = require('helmet');
const app = Express();


var Random = Random.randomServerXPoweredBy();

console.log(Random)

app.use(helmet.hidePoweredBy({ setTo: Random }));

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
});

