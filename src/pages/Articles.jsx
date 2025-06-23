import './Articles.scss';

const articles = [
  {
    title: "Ma première journée à l’université",
    date: "2024-09-01",
    content: "Une journée pleine de découvertes, d’émotions et de stress maîtrisé."
  },
  {
    title: "Comment je gère les examens",
    date: "2025-01-02",
    content: "Planification, gestion du stress, méthodes de révision, etc."
  }
];

export default function Articles() {
  return (
    <div className="articles">
      <h2>📝 Mes articles</h2>
      <div className="list">
        {articles.map((art, index) => (
          <div className="article" key={index}>
            <h3>{art.title}</h3>
            <p className="date">🗓️ {art.date}</p>
            <p>{art.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
