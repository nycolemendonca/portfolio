import './skills.component.css';

import  HtmlIcon  from '../../assets/img/skills/html.png';
import  CssIcon  from '../../assets/img/skills/css.png';
import  BootstrapIcon  from '../../assets/img/skills/bootstrap.png';
import  JsIcon  from '../../assets/img/skills/js.png';
import  ReactIcon  from '../../assets/img/skills/react.png';
import  AngularIcon from '../../assets/img/skills/angular.png';
import  NodeIcon from '../../assets/img/skills/nodejs.png';
import  PythonIcon from '../../assets/img/skills/python.png';
import  GitIcon from '../../assets/img/skills/git.png';

import { FcAlarmClock, FcMultipleSmartphones, FcCommandLine, FcAcceptDatabase } from 'react-icons/fc';

export const Skills = () => {
  return (
    <section id="skillsContainer">
        <div className='skills'>
            <h2 className='skillsTitle'>Skills</h2>

            <div className='skillIcons'>
                <div className='skillCard'>
                    <img src={ HtmlIcon } alt="HTML" />
                    <p className='descriptionCard'>HTML5</p>
                </div>

                <div className='skillCard'>
                    <img src={ CssIcon } alt="CSS" />
                    <p className='descriptionCard'>CSS3</p>
                </div>

                <div className='skillCard'>
                    <img src={ BootstrapIcon } alt="Bootstrap" />
                    <p className='descriptionCard'>Bootstrap</p>
                </div>

                <div className='skillCard'>
                    <img src={ JsIcon } alt="JavaScript" />
                    <p className='descriptionCard'>Javascript</p>
                </div>

                <div className='skillCard'>
                    <img src={ ReactIcon } alt="React" />
                    <p className='descriptionCard'>ReactJS</p>
                </div>

                <div className='skillCard'>
                    <img src={ AngularIcon } alt="Angular" />
                    <p className='descriptionCard'>Angular</p>
                </div>

                <div className='skillCard'>
                    <img src={ NodeIcon } alt="NodeJS" />
                    <p className='descriptionCard'>NodeJS</p>
                </div>

                <div className='skillCard'>
                    <img src={ PythonIcon } alt="Python" />
                    <p className='descriptionCard'>Python</p>
                </div>

                <div className='skillCard'>
                    <img src={ GitIcon } alt="Git" />
                    <p className='descriptionCard'>Git</p>
                </div>
            </div>
        </div>

        <div className='differential'>
            <h2 className='skillsTitle'>Diferenciais</h2>

            <div className='differentialCards'>
                <div className='differentialCard'>
                    <FcAlarmClock className='iconCard'/> 
                    <div className='description'>
                        <h3>Metodologia Ágil</h3>
                        <p>Abordagem otimizada que dinamiza o fluxo de produção, através de  <span>feedbacks e interações constantes</span>, garantindo a agilidade e a eficiência do projeto.</p>
                    </div>
                </div>

                <div className='differentialCard'>
                    <FcMultipleSmartphones className='iconCard'/>
                    <div className='description'>
                        <h3>Mobile First</h3>
                        <p>Prática que prioriza o desenvolvimento da <span>versão mobile</span> de um site ou aplicativo, priorizando a <span>experiência do usuário em dispositivos móveis.</span></p>
                    </div>
                </div>

                <div className='differentialCard'>
                    <FcCommandLine className='iconCard'/>
                    <div className='description'>
                        <h3>Clean Code</h3>
                        <p>Tenho como principai diretriz a prática do Clean Code, consiste em escrever <span>código limpo e legível</span>, seguindo boas práticas de programação e design.</p>
                    </div>
                </div>

                <div className='differentialCard'>
                    <FcAcceptDatabase className='iconCard'/>
                    <div className='description'>
                        <h3>Interfaces de Alta Fidelidade</h3>
                        <p>Implementação fiel de interfaes sempre prezando pela melhor experiência do usuário de modo a <span>atender às expectativas de cada projeto.</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
