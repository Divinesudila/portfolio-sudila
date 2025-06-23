import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>Ma vie d’étudiant</h1>
        <nav>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', justifyContent: 'center' }}>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/vision">Vision</Link></li>
            <li><Link to="/figma">Maquette Figma</Link></li>


          </ul>
        </nav>
      </div>
    </header>
  );
}
