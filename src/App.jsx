import { useState, useEffect } from 'react'
import api from './services/api'

function App() {
  const [film, setFilm] = useState([ ])

  useEffect(()=>{
    getFilm()
  }, [])

  async function getFilm(){
    // response.data
    let { data } = await api.get('/')
    setFilm(data)
    console.log(film)
  }

  return (
    <div>
      {film.map(e=>(
        <p>{e.name}</p>
      ))}
    </div>
  )
}

export default App
