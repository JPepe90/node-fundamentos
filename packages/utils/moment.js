const moment = require('moment');

let ahora = moment();

console.log(ahora.year());
console.log(ahora.format('YYYY/MM/DD - HH:mm'));