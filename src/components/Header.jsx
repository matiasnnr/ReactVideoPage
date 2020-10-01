import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-video.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">

    <Link to="/">
      <img className="header__img" src={logo} alt="Matías Video" />
    </Link>

    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="user icon" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to="/">Cuenta</Link></li>
        <li><Link to="/login">Iniciar sesión</Link></li>
      </ul>
    </div>
  </header>
)

export default Header;
