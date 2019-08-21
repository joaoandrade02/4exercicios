const monroeresident = require("./data.js");
const monroe1 = monroeresident.find(
  monroeresident => monroeresident.address.city.toLocaleLowerCase() == "monroe"
);
console.table(`Morador:${monroe1.first_name}`);

//NAO ESQUECER: VIDEO AULA HIGH ORDER FUNCTIONS: MAYK BRITO
//toLocaleLowerCase serve para deixar todo alfabeto minusculo
//principalmente o data.js
//neste caso o toLocaleLowerCase serve para padronizar as letras do host
//adress, city e state estão todos minusculos, enquanto Monroe
//possui uma letra maiuscula, o que pode gerar conflito na busca (find)
