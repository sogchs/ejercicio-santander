import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="navbar bg-danger navbar-dark mb-5">
    <div className="container">
      <div>
        <img className="logo-santander" src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Banco_Santander_Logotipo_%282007-2018%29.svg" alt="logo"/>
        <Link className="navbar-brand ml-3 mt-2" to="/">Usuarios Santander por Sergio Ortega</Link>
      </div>
    </div>
  </nav>
);

export default Header