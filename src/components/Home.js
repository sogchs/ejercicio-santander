import React from 'react';
import Section from './misc/Section';

const Home = () => (
  <article className="Home">
    <Section to="/users" title="Buscar Usuarios" description="Busca los usuarios de la base de datos"/>
  </article>
);

export default Home