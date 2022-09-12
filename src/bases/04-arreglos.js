
const arreglo = [1, 2, 3, 4];
// No usar push()

// Extraer la información
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(numero){
  return (numero * 2);
})

const arreglo4 = arreglo3.map((valor) => {
  return (valor * 2)
})


console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
console.log(arreglo4)