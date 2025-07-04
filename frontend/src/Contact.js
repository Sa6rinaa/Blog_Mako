import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact" style={{ padding: '2rem' }}>
      <h2>Contactez-nous</h2>
      <div className="contact-container" style={{ display: 'flex', gap: '2rem' }}>
        <form style={{ flex: 1 }}>
          <input type="text" placeholder="Nom" required style={{ display: 'block', width: '100%', marginBottom: '1rem' }} />
          <input type="email" placeholder="Email" required style={{ display: 'block', width: '100%', marginBottom: '1rem' }} />
          <textarea placeholder="Votre message..." required style={{ display: 'block', width: '100%', height: '120px', marginBottom: '1rem' }} />
          <button type="submit">Envoyer</button>
        </form>
        <div className="contact-info" style={{ flex: 1 }}>
          <p><strong>Adresse :</strong><br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=11+Rue+Jean+Moulin,+42150+La+Ricamarie"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              11 Rue Jean Moulin, 42150 La Ricamarie
            </a>
          </p>
          <p><strong>Téléphone :</strong><br />04.77.87.43.15</p>
          <p><strong>Email :</strong><br />contact@ytty.fr</p>
        </div>
      </div>
      <iframe
        title="Ytty Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.258390481711!2d4.333161915680126!3d45.420594479100085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb2e86f65f93%3A0xf2220f12e13d9e4e!2s11%20Rue%20Jean%20Moulin%2C%2042150%20La%20Ricamarie!5e0!3m2!1sfr!2sfr!4v1687084280367!5m2!1sfr!2sfr"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: '100%', height: '300px', border: 'none', marginTop: '1rem' }}
      ></iframe>
    </section>
  )
}

export default Contact
