import './portfolio.component.css'

import WeatherApp from '../../assets/img/projects/1-weather-app.png';
import GithubFinder from '../../assets/img/projects/2-github-finder.png';
import BuzzfeedGame from '../../assets/img/projects/3-buzzfeed-game.png'

export const Portfolio = () => {
  return (
    <section id="portfolioContainer">
        <h2 className='portfolioTitle'>Portfólio</h2>

        <div className='portfolioCards'>
            {/* Project 01 */}
            <figure className='card'>
                <img src={WeatherApp} alt='Weather App' className='cardImage'/>

                <figcaption className='description'>
                    <h4>Weather App</h4>
                    <div className='tagsDescription'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                        <span>RestAPI</span>
                    </div>
                    <p className='textDescription'>Projeto de JavaScript com OpenWeather API. O objetivo é trazer os dados climáticos de qualquer cidade do mundo, mundando a imagem de background de acordo com a cidade consultada.</p> 

                    <div className='descriptionButtons'>
                        <a className='button' href='https://github.com/nycolemendonca/weather-app' target='_blank' rel='noreferrer'>Code</a>
                        <a className='button' href='https://nycolemendonca.github.io/weather-app/'  target='_blank' rel='noreferrer'>Deploy</a>
                    </div>
                </figcaption>
            </figure>

            {/* Project 02 */}
            <figure className='card'>
                <img src={GithubFinder} alt='Weather App' className='cardImage'/>

                <figcaption className='description'> 
                    <h4>Github Finder</h4>
                    <div className='tagsDescription'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>ReactJS</span>
                        <span>RestAPI</span>
                    </div>
                    <p className='textDescription'>A aplicação faz uma requisição à API do Github e fornece informações atualizadas sobre o usuário. Para dar vida à aplicação, usei HTML, CSS e ReactJS. Desde o início do desenvolvimento, priorizei o design responsivo adotando a abordagem Mobile First.</p> 

                    <div className='descriptionButtons'>
                        <a className='button' href='https://github.com/nycolemendonca/react-projects/tree/main/github-finder' target='_blank' rel='noreferrer'>Code</a>
                        <a className='button' href='https://git-discover.vercel.app/'  target='_blank' rel='noreferrer'>Deploy</a>
                    </div>
                </figcaption>
            </figure>

            {/* Project 03 */}
            <figure className='card'>
                <img src={BuzzfeedGame} alt='Buzzfeed Quiz Game' className='cardImage'/>

                <figcaption className='description'>
                    <h4>Buzzfeed Quiz Game</h4>
                    <div className='tagsDescription'>
                        <span>Angular</span>
                        <span>TailwindCSS</span>
                        <span>JavaScriptt</span>
                        <span>Typescript</span>
                    </div>
                    <p className='textDescription'>Projeto implementado em Angular e Typescript que funciona como um teste semelhante aos testes do Buzzfeed. Este projeto é uma aplicação web interativa que apresenta uma série de perguntas e, com base nas respostas, fornece um resultado correspondente às respostas enviadas.</p> 

                    <div className='descriptionButtons'> 
                        <a className='button' href='https://github.com/nycolemendonca/buzzfeed' target='_blank' rel='noreferrer'>Code</a>
                        <a className='button' href='https://buzzfeed-mjc769r6g-nycolemendonca.vercel.app'  target='_blank' rel='noreferrer'>Deploy</a>
                    </div>
                </figcaption>
            </figure>

            {/* Project 03 */}
            <figure className='card'>
                <img src={WeatherApp} alt='Weather App' className='cardImage'/>

                <figcaption className='description'>
                    <h4>Weather App</h4>
                    <div className='tagsDescription'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                        <span>RestAPI</span>
                    </div>
                    <p className='textDescription'>Projeto de JavaScript com OpenWeather API. O objetivo é trazer os dados climáticos de qualquer cidade do mundo, mundando a imagem de background de acordo com a cidade consultada.</p> 

                    <div className='descriptionButtons'>
                        <a className='button' href='https://github.com/nycolemendonca/weather-app' target='_blank' rel='noreferrer'>Code</a>
                        <a className='button' href='https://nycolemendonca.github.io/weather-app/'  target='_blank' rel='noreferrer'>Deploy</a>
                    </div>
                </figcaption>
            </figure>

            <figure className='card'>
                <img src={WeatherApp} alt='Weather App' className='cardImage'/>

                <figcaption className='description'>
                    <h4>Weather App</h4>
                    <div className='tagsDescription'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                        <span>RestAPI</span>
                    </div>
                    <p className='textDescription'>Projeto de JavaScript com OpenWeather API. O objetivo é trazer os dados climáticos de qualquer cidade do mundo, mundando a imagem de background de acordo com a cidade consultada.</p> 

                    <div className='descriptionButtons'>
                        <a className='button' href='https://github.com/nycolemendonca/weather-app' target='_blank' rel='noreferrer'>Code</a>
                        <a className='button' href='https://nycolemendonca.github.io/weather-app/'  target='_blank' rel='noreferrer'>Deploy</a>
                    </div>
                </figcaption>
            </figure>

            <figure className='card'>
                <img src={WeatherApp} alt='Weather App' className='cardImage'/>

                <figcaption className='description'>
                    <h4>Weather App</h4>
                    <div className='tagsDescription'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                        <span>RestAPI</span>
                    </div>
                    <p className='textDescription'>Projeto de JavaScript com OpenWeather API. O objetivo é trazer os dados climáticos de qualquer cidade do mundo, mundando a imagem de background de acordo com a cidade consultada.</p> 

                    <div className='descriptionButtons'>
                        <a className='button' href='https://github.com/nycolemendonca/weather-app' target='_blank' rel='noreferrer'>Code</a>
                        <a className='button' href='https://nycolemendonca.github.io/weather-app/'  target='_blank' rel='noreferrer'>Deploy</a>
                    </div>
                </figcaption>
            </figure>
        </div>
    </section>
  )
}
