import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="content">
          <h1>Sudila Mukeba Divine</h1>
          <h2>Étudiante en informatique</h2>
          <p>
            Passionnée par la programmation, l’humour et la danse. Ce portfolio présente mes projets, objectifs et inspirations.
          </p>
          <a href="/contact" className="btn">Me contacter</a>
        </div>
        <div className="photo">
          <img src="/img/divine.jpg" alt="Sudila" />
        </div>
      </section>

      <section className="realisations">
        <h3>Mes réalisations</h3>
        <ul>
          <li>🌐 Site vitrine HTML/CSS</li>
          <li>📱 Maquette mobile avec Figma</li>
          <li>⚛️ Portfolio React avec SCSS</li>
        </ul>
      </section>
    </div>
  );
}
