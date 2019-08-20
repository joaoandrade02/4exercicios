const ageuser = require("./data.js");
const allages = ageuser.map(arrowage => `${arrowage.age}`);
console.table(allages);
