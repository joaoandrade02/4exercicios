//MULTIPLICAS A IDADE TODOS POR 2
//FILTRAR AS IDADES QUE FICARAM ABAIXO DE 50

const ageuser = require("./data.js");
const allages = ageuser.map(arrowage => `${2 * arrowage.age}`);
const filteredage = allages.filter(age50 => age50 <= 50);
console.table(filteredage);
