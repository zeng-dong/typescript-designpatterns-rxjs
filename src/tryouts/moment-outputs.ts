const moment = require("moment");

const m = moment();

console.log("value:", m.valueOf());
console.log("iso:", m.toISOString());
console.log("utc offset:", m.utcOffset());
console.log("is utc:", m.isUTC());
console.log("todate:", m.toDate());
console.log("milliseconds:", m.toDate().getTime());
