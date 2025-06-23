import { useState } from 'react';
import './Contact.scss';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulation de traitement
    setTimeout(() => {
      setSent(true);
    }, 500);
  };

  return (
    <div className="contact">
      <h2>📬 Contactez-moi</h2>
      <p>Vous pouvez m’écrire directement via ce formulaire :</p>

      {!sent ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">👤 Nom</label>
            <input type="text" id="name" name="name" placeholder="Votre nom complet" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">📧 Email</label>
            <input type="email" id="email" name="email" placeholder="exemple@email.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">💬 Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Votre message..." required></textarea>
          </div>

          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <div className="confirmation">
          ✅ Merci ! Votre message a bien été envoyé.
        </div>
      )}
    </div>
  );
}
