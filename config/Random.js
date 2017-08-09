const serverList = [
    'ASP.NET', 
    'Apache Tomcat/8.0.45',
    "Apache Tomcat/8.5.11",
    "Apache Tomcat/8.5.16",
    "Microsoft-IIS/7.0",
    "Microsoft-IIS/7.2",
    "Microsoft-IIS/8.5",
    "Hapi",
    "Feathers",
    "ExpressJS",
    'Pleslin',
    'PHP 4.2.0', 
    'PHP 5.3.29', 
    'PHP 5.3.3',
    'PHP 5.4.20',
    'PHP 5.4.37', 
]

const server = [
    'ASP.NET',
    'Apache Tomcat/',
    'Microsoft-ISS/',
    'Hapi',
    'ExpressJS',
    'Pleslin',
    'PHP'
]

module.exports = {
    randomServer: function(){
        console.log('[random.js]: Choosing random number to spoof identity'.green)
        var randomNumber = Math.floor(Math.random() * (server.length - 0 + 1)) + 0;
        
        var randomStartNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 1;
        var randomMiddleNumber = Math.floor(Math.random() * (9 - 0 + 1)) + 1;
        var randomEndNumber = Math.floor(Math.random() * (50 - 0 + 1)) + 1;
        
        var randomVersionNumber = randomStartNumber.toString() + "." + randomMiddleNumber.toString() + "." + randomEndNumber.toString();
        
        return {'server': server[randomNumber], 'versionNumber': randomVersionNumber}
    },
    randomServerXPoweredBy: function(){
        console.log('[random.js]: Choosing random number to spoof identity'.green)
        var randomNumber = Math.floor(Math.random() * (serverList.length - 0 + 1)) + 0;
        return serverList[randomNumber]
    }
}