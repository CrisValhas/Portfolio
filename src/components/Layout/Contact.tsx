import React, { useState } from 'react';
import './Contact.css';
import { PROFILE, SOCIAL_LINKS } from '../../constants/profile';

export const Contact: React.FC = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${PROFILE.email}?subject=Mensaje desde Portfolio&body=${encodeURIComponent(
      `Nombre: ${formState.name}\nEmail: ${formState.email}\n\nMensaje:\n${formState.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Trabajemos Juntos</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Conecta conmigo</h3>
            <p>
              ¿Tienes un proyecto emocionante o simplemente quieres conversar?
              No dudes en contactarme.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <div>
                  <p className="detail-label">Email</p>
                  <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <p className="detail-label">Ubicación</p>
                  <p>{PROFILE.location}</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <p>Redes sociales:</p>
              <div className="social-links">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tu mensaje aquí..."
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
