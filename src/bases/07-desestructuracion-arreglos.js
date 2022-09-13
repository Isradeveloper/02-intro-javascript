const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log(p3);

const retornaArreglo = ()=> {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

const usState = (valor) => {
  return [valor, ()=> {console.log("Hola mundo")}];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = usState('Goku');


// Tarea
// El primer valor del arreglo se llamará nombre
// El segundo valor se llamará setNombre()

console.log(nombre)
setNombre();