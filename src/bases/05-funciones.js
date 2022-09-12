
const saludar = function( nombre ){
  return `Hola, ${ nombre }`
}

const saludar2 = ( nombre ) => {
  return `Hola, ${ nombre }`
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`


console.log(saludar3('Vegeta'))

const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'El_Papi1502'
  }
}

console.log(getUser( ))

// TAREA
// Transformar funcion de flecha
// Tiene que retornar un objeto implicito
// Pruebas

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
  })


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo)