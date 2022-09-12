import heroes, { owners } from "../data/index";


export const getHeroeById = (id) => {
  return heroes.find((heroe)=> heroe.id === id);
}

// FILTER VARIOS
// FIND UNO

export const getHeroeByOwner = (owner) => {
  return heroes.filter((heroe)=>heroe.owner === owner)
}


// console.log( getHeroeById(2) )
// console.log( getHeroeByOwner ('DC'))
// console.log(owners)