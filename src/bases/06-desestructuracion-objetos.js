// Desestructuración de objetos
// Asignación desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};

// nombre:nombre2 - Renombrar
const { nombre, edad, clave, } = persona;

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)
// console.log( nombre, edad, clave )

const retornaPersona = (usuario) => {
  const {nombre, edad, clave,} = usuario;

  console.log(`Edad: ${edad}, Nombre: ${nombre}, Clave: ${clave}`)
}

const useContext = ({clave, nombre, edad, rango = 'Capitán' }) => {
  // console.log(`Nombre: ${nombre}, Edad: ${edad}, Rango: ${rango}`)

  return {
    nombreClave: clave,
    years: edad,
    latlng: {
      lat: 14.12,
      lng: -12.345
    }
  }

}

retornaPersona( persona )

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, years, latlng:{lat, lng}} = useContext( persona );

console.log(nombreClave, years)
console.log(lat, lng)
