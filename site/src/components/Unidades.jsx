import './Unidades.css'

export default function Unidades() {
  return (
    <section className="unidades" id="unidades">
      <div className="container">
        <div className="unidades-header">
          <span className="label">Onde estamos</span>
          <h2 className="section-title">
            Encontre a Thanos<br />mais perto de você
          </h2>
          <p className="section-subtitle">
            Estamos presentes em Manaus para facilitar seu acesso à atividade física.
          </p>
        </div>

        <div className="unidades-grid">
          <div className="unidade-card">
            <div className="unidade-img">
              <img src="/img2.jpg" alt="Unidade Coroado" />
              <div className="unidade-overlay" />
            </div>
            <div className="unidade-body">
              <span className="unidade-badge">Unidade Coroado</span>
              <h3>Av. Cosme Ferreira, 2714</h3>
              <p>Coroado, Manaus – AM</p>
              <div className="unidade-actions">
                <a
                  href="https://wa.me/5592988291001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary unidade-btn"
                >
                  📱 WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Av+Cosme+Ferreira+2714+Manaus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline unidade-btn"
                >
                  Ver no mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
