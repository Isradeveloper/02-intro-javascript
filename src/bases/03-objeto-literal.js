
const persona = {
nombre: 'Tony',
apellido: 'Stark',
edad: 45,
direccion: {
  ciudad: 'New York',
  zip: 553213132,
  lat: 14.3232,
  lng: 34.923332,
}
}

console.table({ persona })
console.log({ persona })

// Copiar propiedades de un objeto
const persona2 = {...persona};
//////////////////////////////

persona2.nombre = 'Montana'
console.log(persona2)
console.log(persona)