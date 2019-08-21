const woman = require("./data.js");
const allwoman = woman.map(woman => woman.gender.toLocaleLowerCase() = "female" );
const filteredwoman = allwoman.filter(allwoman => allwoman.age >=18);
console.table(filteredwoman);
