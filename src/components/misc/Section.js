import React from 'react';
import { Link } from 'react-router-dom'

const Section = ({ to, title, description }) => (
  <Link to={to} className="text-dark">
    <button type="button" className="btn btn-secondary">
      <div className="container">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </button>
  </Link>
);

export default Section