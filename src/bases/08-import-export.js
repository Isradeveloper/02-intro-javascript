import heroes, { owners } from "../data/index";






const getHeroeById = (id) => {
  return heroes.find((heroe)=> heroe.id === id);
}

// FILTER VARIOS
// FIND UNO

const getHeroeByOwner = (owner) => {
  return heroes.filter((heroe)=>heroe.owner === owner)
}


console.log( getHeroeById(2) )
console.log( getHeroeByOwner ('DC'))
console.log(owners)