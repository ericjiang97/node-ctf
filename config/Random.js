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
module.exports = {
    randomServerXPoweredBy: function(){
        console.log('[random.js]: Choosing random number to spoof identity')
        var randomNumber = Math.floor(Math.random() * (serverList.length -1 - 0 + 1)) + 0;
        var randomServer = serverList[randomNumber]
        console.log('[random.js]: Choosing '+ randomServer)
        return randomServer
    }
}