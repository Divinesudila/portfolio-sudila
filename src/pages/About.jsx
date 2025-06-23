import './About.scss';

export default function About() {
  return (
    <div className="about">
      <div className="intro">
       <img src="/img/divine.jpg" alt="Sudila Mukeba Divine" className="divine-img" />
        <div>
          <h2>Sudila Mukeba Divine</h2>
          <p>
            Je suis une étudiante passionnée par la technologie, la programmation,
            mais aussi par des formes artistiques comme l’humour et la danse. Je rêve de transformer
            la société par mes projets d’impact.
          </p>
        </div>
      </div>

      <section className="objectifs">
        <h3>🎯 Mes objectifs</h3>
        <div className="cards">
          <div className="card">💡 Construire un barrage hydroélectrique</div>
          <div className="card">🏥 Fonder des orphelinats et hôpitaux</div>
          <div className="card">📺 Créer une chaîne de télévision</div>
          <div className="card">👗 Lancer une usine de vêtements</div>
        </div>
      </section>

      <section className="timeline">
        <h3>📚 Mon parcours</h3>
        <ul>
          <li>
            <span className="year"></span>
            Études maternelles terminées
          </li>
          <li>
            <span className="year"></span>
            Études primaires complètes avec certificat
          </li>
          <li>
            <span className="year"></span>
            Humanités générales, obtention de diplôme
          </li>
          <li>
            <span className="year">2024 - Aujourd’hui</span>
            Étudiante en informatique (programmation)
          </li>
        </ul>
      </section>
    </div>
  );
}
