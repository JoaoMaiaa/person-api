import { useState, useEffect, Fragment } from 'react'
import api from './services/api'
import Navbar from './components/navbar'
import job from '../assets/images/job.jpg'
import { Twitter, Github, Instagram, ArrowRight, ArrowDown, Check2 } from 'react-bootstrap-icons'
import startup from '../assets/images/startup.jpg'
import person1 from '../assets/images/artista-1.png'
import person2 from '../assets/images/artista-2.png'
import person3 from '../assets/images/artista-3.png'

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
      {console.log(film)}

      <div>
        <Navbar />
      </div>
      <section>
        <div className="columns">
          <div className="column has-background-black">
            <div className="container">
              <section className="section">
                <h1 className="title is-size-2 has-text-light mt-5">Seja muito bem-vindo ao site de nossa empresa</h1>
                <p className="subtitle is-size-6 mt-5 has-text-grey-light">Somos uma empresa que trabalha com a relação de um belo site com o seu negócio.</p>
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
                <p className="mt-5">Aqui sua empresa é prioridade na exposição e credibilidade da sua empresa</p>
              </section>
              <section className="section pb-0 is-flex is-justify-content-center">
                <ArrowDown className="" size={25} />
              </section>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="columns">
          <div className="column">
            <section className="section hero has-background-black">
              <h2 className="h2 title has-text-grey-light has-text-centered has-text-light">O que fazemos?</h2>
            </section>
          </div>
        </div>
      </section>
      <section>
        <div className="columns pt-0">
          <div className="column is-8 pt-0">
            <div className="columns">
              <div className="column is-12">
                <div className="container">
                  <section className="section hero">
                    <div className="card has-background-light">
                      <div className="card-header">
                        <div className="card-header-title">
                          <p className="is-size-4 has-text-weight-bold has-text-dark">Landing page</p>
                        </div>
                      </div>
                      <div className="card-content">
                        <ul>
                          <li><Check2 className="mr-2" />Pensado para celular</li>
                          <li className="my-2"><Check2 className="mr-2" />Prioridade de conteúdo</li>
                          <li><Check2 className="mr-2" />Leve e rápido</li>
                        </ul>
                      </div>
                      <div className="card-header-title">
                        <p className="is-size-4 has-text-weight-bold has-text-dark">Para</p>
                      </div>
                      <div className="card-content">
                        <ul>
                          <li><Check2 className="mr-2" />Prestadores de serviço</li>
                          <li className="my-2"><Check2 className="mr-2" />Instituições</li>
                          <li><Check2 className="mr-2" />Negócios locais e digitais</li>
                        </ul>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="button is-dark mx-auto mb-5">
                          Fale conosco
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <div className="container">
                  <section className="section hero has-background-dark">
                    <div className="card has-background-dark">
                      <div className="card-header">
                        <div className="card-header-title">
                          <p className="is-size-4 has-text-weight-bold has-text-light">Single page application</p>
                        </div>
                      </div>
                      <div className="card-content">
                        <ul class="has-text-light">
                          <li><Check2 className="has-text-success mr-2" />Pensado para celular</li>
                          <li className="my-2"><Check2 className="has-text-success mr-2" />Prioridade de conteúdo</li>
                          <li><Check2 className="has-text-success mr-2" />Leve e rápido</li>
                        </ul>
                      </div>
                      <div className="card-header-title">
                        <p className="is-size-4 has-text-weight-bold has-text-light">Para</p>
                      </div>
                      <div className="card-content">
                        <ul className="has-text-light">
                          <li><Check2 className="has-text-success mr-2" />Prestadores de serviço</li>
                          <li className="my-2" ><Check2 className="has-text-success mr-2" />Instituições</li>
                          <li><Check2 className="has-text-success mr-2" />Negócios locais e digitais</li>
                        </ul>
                      </div>
                      <div className="card-footer" style={{ border: 0 }}>
                        <a href="#" className="button is-success mx-auto mb-5">
                          Fale conosco
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="column p-0 is-hidden-mobile is-flex-tablet">
            <div className="container">
              <img src={job} style={{ height: 48.5 + '%' }} alt="" srcset="" />
              <img src={startup} style={{ height: 48.5 + '%' }} className="mt-4" alt="" srcset="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="h2 subtitle is-size-3 has-text-black">Nossa equipe</h2>
        <p className="mt-2">De pessoas extremamente competentes</p>
        <div className="columns">
          <div className="column mt-5">
            <div className="card mt-5 has-text-centered">
              <div className="card-header">
                <div className="card-title mx-auto">
                  <p className="h3 is-size-4 card-header-title">José</p>
                </div>
              </div>
              <div className="card-content">
                <div className="card-image">
                  <img src={person1} alt="" className="img-fluid" />
                </div>
                <p>O chato</p>
                <a href="#" className="my-2 is-block has-text-dark">sitedojosé.com</a>
                <a href="#" className="has-text-dark">99999-9999</a>
              </div>
              <div className="pb-5">
                <a href="#" className="button is-dark"><Instagram /></a>
                <a href="#" className="button is-dark mx-2"><Twitter /></a>
                <a href="#" className="button is-dark"><Github /></a>
              </div>
            </div>
          </div>
          <div className="column mt-5">
            <div className="card mt-5 has-text-centered has-text-light has-background-dark">
              <div className="card-header">
                <div className="card-title mx-auto">
                  <p className="h3 is-size-4 card-header-title has-text-light">José</p>
                </div>
              </div>
              <div className="card-content">
                <div className="card-image">
                  <img src={person2} alt="" className="img-fluid" />
                </div>
                <p>O chato</p>
                <a href="#" className="my-2 has-text-light is-block">sitedojosé.com</a>
                <a href="#" className="has-text-light">99999-9999</a>
              </div>
              <div className="pb-5">
                <a href="#" className="button"><Instagram /></a>
                <a href="#" className="button mx-2"><Twitter /></a>
                <a href="#" className="button"><Github /></a>
              </div>
            </div>
          </div>
          <div className="column mt-5">
            <div className="card mt-5 has-text-centered">
              <div className="card-header">
                <div className="card-title mx-auto">
                  <p className="h3 is-size-4 card-header-title">José</p>
                </div>
              </div>
              <div className="card-content">
                <div className="card-image">
                  <img src={person3} alt="" className="img-fluid" />
                </div>
                <p>O chato</p>
                <a href="#" className="my-2 has-text-dark is-block">sitedojosé.com</a>
                <a href="#" className="has-text-dark">99999-9999</a>
              </div>
              <div className="pb-5">
                <a href="#" className="button is-dark"><Instagram /></a>
                <a href="#" className="button is-dark mx-2"><Twitter /></a>
                <a href="#" className="button is-dark"><Github /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="h2 is-size-4 has-text-centered has-text-black mb-5">Conheça a nossa empresa deixando o seu email</h2>
          <form class="is-flex is-justify-content-center pt-5">
            <ArrowRight size={30} className="mt-1 mr-3" />
            <div className="field has-addons">
              <div className="control">
                <input type="text" className="input is-black" placeholder="seu@email.com" />
              </div>
              <div className="control">
                <a href="#" className="button is-black">Enviar</a>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="section"></section>
      <section className="section has-background-black">
        <div className="container">
          <h3 className="mx-2 is-flex-tablet is-justify-content-center is-size-4 has-text-grey-light h3 mb-4 has-text-weight-semibold">Menu</h3>
          <ul className="is-flex-tablet is-justify-content-center">
            <li className="mt-2"><a className="has-text-grey-dark mx-2" href="#">Home</a></li>
            <li className="mt-2"><a className="has-text-grey-dark mx-2" href="#">Objetivos</a></li>
            <li className="mt-2"><a className="has-text-grey-dark mx-2" href="#">Pessoas</a></li>
            <li className="mt-2"><a className="has-text-grey-dark mx-2" href="#">Fale conosco</a></li>
          </ul>
        </div>
      </section>
      <footer className="footer has-background-black has-text-centered">
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
        Site feito por <a href="#" className="has-text-center has-text-grey-light">João Maia</a>
      </footer>
    </Fragment>
  )
}

export default App
