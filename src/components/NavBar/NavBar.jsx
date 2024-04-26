import logo from '../../assets/logo.png';
import './NavBar.css';
import { useState } from 'react';
import { useEffect } from 'react';

const NavBar = () => {

  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)

    })
  }, [])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Início</li>
        <li>Programação</li>
        <li>Sobre Nós</li>
        <li>Campus</li>
        <li>Certificados</li>
        <li><button className='btn'>Contato</button></li>
      </ul>
    </nav>
    )
}

export default NavBar;