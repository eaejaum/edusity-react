import logo from '../../assets/logo.png';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='container'>
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