var Poloniex = require('poloniex.js');

var config = require("./config.json");
var key = config.key;
var secret = config.secret; 

var poloniex = new Poloniex(key,secret);

setInterval(() => {
    poloniex.getTicker((err, response) => {
    if (err) {
        console.log("Error getting ticker: " + err.msg);
        return;
    }
    var last_price = response.BTC_STEEM.last; 
    

    poloniex.buy("BTC","STEEM",last_price,config.amount,(err, data) =>{
        if (err){
            console.log("Erro buying:" + err.msg);
            return;
        }

    console.log("order id: " + data.orderNumber);
    });
})}, config.interval*1000);



