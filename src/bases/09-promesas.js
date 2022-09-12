import { getHeroeById } from "./bases/08-import-export";


// const promesa = new Promise((resolve, reject) => {

//   setTimeout(()=>{
//     const heroe = getHeroeById(2);
//     // resolve(heroe);
//     reject('No se pudo encontrar el heroe')
//   }, 2000);
// });

// promesa.then((heroe)=>{
//   console.log("Promesa cumplida ", heroe.name)
// })
// .catch(err => console.warn(err))


const getHeroeByIdAsync = (id) => {

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const p1 = getHeroeById(id);
      
      if (p1){
        resolve(p1);
      }else{
        reject('No se pudo encontrar al héroe');
      }
    }, 2000);
  });

}

getHeroeByIdAsync(4)
  .then(heroe => console.log('Heroe ', heroe))
  .catch(err => console.warn(err))