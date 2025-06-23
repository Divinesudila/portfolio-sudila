import './Vision.scss';

export default function Vision() {
  return (
    <div className="vision">
      <header>
        <h2>🌍 Ma vision pour l’avenir</h2>
        <p>
          Depuis mon jeune âge, j’ai toujours voulu aider les autres et contribuer à un avenir meilleur pour mon pays.
        </p>
      </header>

      <section className="projets">
        <h3>🔧 Mes projets de cœur</h3>
        <div className="grid">
          <div className="card">💡 Construire un barrage hydroélectrique</div>
          <div className="card">🏥 Fonder des orphelinats et hôpitaux</div>
          <div className="card">📺 Créer une chaîne de télévision</div>
          <div className="card">👗 Lancer une usine de vêtements</div>
        </div>
      </section>

      <blockquote>
        <p>“Je crois qu’avec la foi, l’apprentissage et la détermination, je peux bâtir quelque chose de grand.”</p>
        <span>— Sudila Mukeba Divine</span>
      </blockquote>
    </div>
  );
}
