import React from 'react';
import { Link } from 'react-router-dom';

function ExploreBlog() {
  return (
    <section className="explorer-blog">
      <h2>🌐 Explorer le blog</h2>
      <ul>
        <li>
          <Link to="/abysses">🌊 <span>Les Abysses</span></Link>
          <p>Découvrez les profondeurs mystérieuses de l’océan.</p>
        </li>
        <li>
          <Link to="/sharks">🦈 <span>Les Requins</span></Link>
          <p>Plongez dans l’univers fascinant des requins.</p>
        </li>
        <li>
          <Link to="/prehistoric">🌍 <span>La Terre avant les Hommes</span></Link>
          <p>Retournez dans le temps à l’ère préhistorique.</p>
        </li>
      </ul>
    </section>
  );
}

export default ExploreBlog;
