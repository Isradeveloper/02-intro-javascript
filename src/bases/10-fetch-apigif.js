const apiKey = 'VPUglTMzyPzZUY1EbIF9PeA7gm7xeRr8';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
  .then((resp)=>resp.json())
  .then(({ data })=>{
    // Las dos promesas se combinan
    const { url } = (data.images.original)
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img)
  })
  
  .catch(console.warn)