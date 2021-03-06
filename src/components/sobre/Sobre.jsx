import React from 'react'
import './sobre.css'
import EU from '../../assets/ff.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {BiCodeAlt} from 'react-icons/bi'


const Sobre = () => {
  return (
    <section id='sobre'>
      <h2>Sobre Mim</h2>

      <div className='container sobre__container'>
        <div className="sobre__mim">
          <div className="sobre__mim__img">
            <img src={EU} alt="Imagem Sobre Mim" />
          </div>
        </div>

        <div className="sobre__conteudo">
          <div className="sobre__cards">
            <article className='sobre__card'>
              <FaGraduationCap className="sobre__icone"/>
              <h5>Técnico em <br></br> Informática</h5>
              <small>Formado no IFSul Campus Charqueadas</small>
            </article>

            <article className='sobre__card'>
              <BiCodeAlt className="sobre__icone"/>
              <h5>Programador <br></br>Front End</h5>
              <small>Conhecimentos em Html/Css, Javascript e ReactJS</small>
            </article>

            
          </div>

          <p>
          Sou um técnico em Informática com conhecimentos em programação. Tenho 19 anos e estou a procura de meu primeiro emprego.
          </p>
          <div className='buton'>
            <a href="#contato" className='btn btn-primary'>Fale Comigo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre