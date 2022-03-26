import { useState, useEffect, Fragment } from 'react'
import api from './services/api'
import Navbar from './components/navbar'
import job from '../assets/images/job.jpg'

function App() {
  const [film, setFilm] = useState([])

  useEffect(() => {
    getFilm()
  }, [])

  async function getFilm() {
    // response.data
    let { data } = await api.get('/')
    setFilm(data)
  }

  return (
    <Fragment>
      <div className="">
        <Navbar />
      </div>
      <section>
        <div className="columns">
          <div className="column has-background-black">
            <div className="container ">
              <section className="section">
                <h1 className="title is-size-2 has-text-light">Seja muito bem-vindo ao site de nossa empresa</h1>
                <p class="subtitle is-size-6 mt-5 has-text-grey-light">Somos uma empresa que trabalha com a relação de um belo site com o seu negócio.</p>
                <a href="#" className="button is-light">Ver mais</a>
             </section>
            </div>
          </div>
          <div className="column p-0 is-hidden-mobile is-flex-tablet">
            <img src={job} alt="" srcset="" class="img-fluid" />
          </div>
        </div>
      </section>
      <section>      
        <div className="columns pb-5 mb-5">
          <div className="column">
            <div className="container">
            <section className="section">
              <h2 className="h2 is-size-3 has-text-center has-text-black">Favorecemos sua empresa</h2>
              <p classname="mt-5 ">Aqui sua empresa é prioridade na exposição e credibilidade da sua empresa</p>
            </section>
            <section class="section mt-5 pt-5"></section>
            </div>          
          </div>
        </div>
      </section>
      <section>
        <div className="columns">
          <div className="column">
            <div className="container">
              <section className="section has-background-black">
              <h2 className="h2 title has-text-grey-light has-text-centered">O que fazemos?</h2>
              </section>
            </div>
          </div>
        </div>
      </section>
      
    </Fragment>
  )
}

export default App
