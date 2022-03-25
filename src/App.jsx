import { useState, useEffect } from 'react'
import api from './services/api'

function App() {
  const [film, setFilm] = useState('')

  useEffect(()=>{
    getFilm()
  }, [])

  async function getFilm(){
    let { data } = await api.get('/')
    setFilm(data)
    console.log(data)
  }

  return (
    <div>
      
    </div>
  )
}

export default App
