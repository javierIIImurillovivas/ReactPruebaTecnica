import {useEffect, useState} from 'react'
import '/App.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL= 'https://cataas.com/cat/says/${threeFirstWords}hello?fontSize=50&fontColor=red&json=true'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/cute/says/hello'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  //Recuperar la cita de la carga de la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
        .then(data => { 
          const {fact} = data
            setFact(fact)
      })
      alert("starting to program react native with fjmurillov3743");
  },  [])

   // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}hello?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const {url} = response
        setImageUrl('url')
      })
  }, [fact])


      
  //useEffect(() => {}, []) //este codigo es para que no se realize un siclo repetitivo infinito es el que esta lleno arriba

  //con este efecto recupero la imagen
  return (
  <main>
      <h1> App de Gatitos with fjmurillov3743 </h1>

    
      <section>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL} ${imageUrl}`} alt=
      {`Image extracted using the threefirstwords for ${fact}`}/>}
      </section>
    
      </main>
      
  )
}
