import { useEffect, useState } from 'react';
import './FigmaView.scss';

export default function FigmaView() {
  const [prototype, setPrototype] = useState(null);

  useEffect(() => {
    fetch('/data/figma_prototype_sudila.json')
      .then((res) => res.json())
      .then((data) => setPrototype(data))
      .catch((err) => console.error('Erreur de chargement JSON', err));
  }, []);

  if (!prototype) return <p>Chargement de la maquette...</p>;

  return (
    <div className="figma-view">
      <h2>{prototype.name}</h2>
      <p><strong>Type :</strong> {prototype.type}</p>
      <p><strong>Créé par :</strong> {prototype.meta.createdBy}</p>

      <div className="screens">
        {prototype.screens.map((screen) => (
          <div className="screen-card" key={screen.id}>
            <h3>📱 {screen.name}</h3>
            <p><strong>Éléments :</strong> {screen.elements.length}</p>
            <ul>
              {screen.elements.map((el, idx) => (
                <li key={idx}>
                  <span className="badge">{el.type}</span> {el.title || el.value || el.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <footer>
        <p><strong>Responsive :</strong> {prototype.meta.responsive ? 'Oui ✅' : 'Non ❌'}</p>
        <p><strong>Design System :</strong> {prototype.meta.designSystem}</p>
      </footer>

      <a
        href="/data/figma_prototype_sudila.json"
        download
        className="download-button"
      >
        📥 Télécharger le fichier JSON
      </a>
    </div>
  );
}
