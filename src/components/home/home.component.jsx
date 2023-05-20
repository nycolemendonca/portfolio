import Perfil from '../../assets/img/perfil.jpg';
import Curriculum from '../../assets/pdf/curriculo-nycole-mendonca.pdf';

import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { FaFileDownload } from 'react-icons/fa';

import './home.component.css';

export const Home = () => {
  return (
    <section id="homeContainer">
      <div className='about'>
        <h1 className='aboutTitle'>Olá, eu sou <span>Nycole Mendonça</span></h1>
        <h2 className='aboutSubtitle'>Web Developer</h2>

        <p className='aboutDescription'>Desenvolvedora Web com conhecimentos em <span>Front e Back-End</span>. Atualmente, também sou estudante de <span>Engenharia de Telecomunicações</span> no IFCE, o que me traz muitos conhecimentos complementares e importantes para a área da tecnologia. Como desenvolvedora web, tenho a habilidade de criar <span>sites e aplicações web incríveis</span>, capazes de ajudar as pessoas a resolverem seus problemas e alcançarem seus objetivos.</p>
        
        <div className='socialMedia'>
          <div className='socialIcons'>
            <a href="https://www.linkedin.com/in/nycolemendonca/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/nycolemendonca/" target="_blank" rel="noreferrer"><BsGithub /></a>
          </div>
          
          <a className='cvButton' href={ Curriculum } dowload="nycole-mendonca-cv" target="_blank" rel="noreferrer">
            <FaFileDownload />
            <span className='btnCv'>Download</span> CV 
          </a>
        </div>
      </div>

      <img src={ Perfil } alt="Foto de Nycole" className='aboutPerfil'></img>
    </section>
  )
}

