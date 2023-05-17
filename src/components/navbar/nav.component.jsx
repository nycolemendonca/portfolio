import './nav.component.css';

import { BsPersonCircle }  from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { RiPagesFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';

export const Navbar = () => {

  return (
    <>
      <div id='blurScroll' aria-hidden="true"></div>
      <nav className='navbarContainer'>
          <ul className='menuLinks'> 
              <li><a href="#homeContainer"><BsPersonCircle /><span>Home</span></a></li>
              <li><a href="#skillsContainer"><FaTools /><span>Skills</span></a></li>
              <li><a href="#portfolioContainer"><RiPagesFill /><span>Portfólio</span></a></li>
              <li><a href="#contactContainer"><GrMail /><span>Contato</span></a></li>
          </ul>
      </nav>
      </>
  )
}
