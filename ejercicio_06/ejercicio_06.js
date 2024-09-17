import Auto, * as Clases from "./clases_ej06.js"

let auto1 = new Auto("blanco",100,"Chevrolet")
let auto2 = new Auto("negro",100,"Chevrolet")
let auto3 = new Auto("azul",1000,"Ford")
let auto4 = new Auto("azul",2000,"Ford")
let auto5 = new Auto("azul",2000,"Ford",new Date("1997-12-24"))

auto3.AgregarImpuestos(500);
auto4.AgregarImpuestos(500);
auto5.AgregarImpuestos(500);
console.log(Auto.Add(auto1,auto2));
console.log(Auto.Add(auto3,auto4));
