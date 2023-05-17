import './portfolio.component.css'

import WeatherApp from '../../assets/img/projects/1-weather-app.png'
import Background from '../../assets/img/background2.jpg'

export const Portfolio = () => {
  return (
    <section style={{ backgroundImage: `url(${Background})` }} id="portfolioContainer">
        <h2 className='portfolioTitle'>Portfólio</h2>

        <div className='portfolioCards'>
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
