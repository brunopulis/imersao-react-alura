import React from 'react';
import Logo from '../../assets/img/Logo.png';

function Menu() {
  return(
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix" />
      </a>
      <a className="ButtonLink" href="/">Novo vídeo</a>
    </nav>
  )
}

export default Menu;