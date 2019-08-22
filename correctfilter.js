const woman = require("./data.js");
const allwoman = woman.filter(woman =>
  woman.gender.toLocaleLowerCase() === "female" && woman.age > 18 ? true : false
);
console.table(allwoman);
