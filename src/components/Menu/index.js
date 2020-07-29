import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import { NavBase } from './styles';
import Button from '../Button';


function Menu() {
  return (
    <NavBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </NavBase>
  );
}

export default Menu;