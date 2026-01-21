import { useState } from 'react';
import './Contacto.css';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  });
  const [status, setStatus] = useState(''); // 'success', 'error', ''
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // Simulación de envío (reemplaza con tu lógica real)
    setTimeout(() => {
      setStatus('success');
      setIsLoading(false);
      setFormData({ nombre: '', apellido: '', email: '', mensaje: '' });
    }, 1500);
  };

  return (
    <div className="contacto-container">
      <div className="contacto-card">
        {/* LADO IZQUIERDO DECORATIVO */}
        <div className="contacto-left">
          <div className="contacto-logo">✉️</div>
          <h2 className="contacto-left-title">¡Hablemos!</h2>
          <p className="contacto-left-subtitle">
            Estamos aquí para ayudarte con cualquier duda sobre el cuidado de tus mascotas
          </p>

          <div className="contacto-info">
            <div className="contacto-info-item">
              <span className="contacto-info-icon">📧</span>
              <div className="contacto-info-text">
                <div className="contacto-info-label">Email</div>
                <div className="contacto-info-value">hola@huellitas.com</div>
              </div>
            </div>

            <div className="contacto-info-item">
              <span className="contacto-info-icon">📱</span>
              <div className="contacto-info-text">
                <div className="contacto-info-label">Teléfono</div>
                <div className="contacto-info-value">+54 11 1234-5678</div>
              </div>
            </div>

            <div className="contacto-info-item">
              <span className="contacto-info-icon">📍</span>
              <div className="contacto-info-text">
                <div className="contacto-info-label">Ubicación</div>
                <div className="contacto-info-value">Buenos Aires, Argentina</div>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO FORMULARIO */}
        <div className="contacto-right">
          <div className="contacto-header">
            <h1 className="contacto-title">Contáctanos</h1>
            <p className="contacto-subtitle">
              ¿Tienes dudas sobre algun producto? ¡Escribinos!
            </p>
          </div>

          <form className="contacto-form" onSubmit={handleSubmit}>
            {status && (
              <div className={`form-message ${status}`}>
                {status === 'success' 
                  ? '¡Mensaje enviado con éxito! Te responderemos pronto.' 
                  : 'Hubo un error. Por favor intenta nuevamente.'}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-input"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    className="form-input"
                    placeholder="Tu apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <div className="form-input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="tucorreo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                className="form-textarea"
                placeholder="Escribe aquí tu consulta..."
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            <button 
              type="submit" 
              className={`form-submit ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};