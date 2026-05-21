import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo.jpg" alt="Thanos Academia" className="footer-logo" />
          <p>A academia com estrutura completa e planos flexíveis para você transformar treino em resultado real.</p>
          <a
            href="https://wa.me/5592988291001"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whats"
          >
            <span>📱</span> (92) 98829-1001
          </a>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#beneficios">Benefícios</a></li>
              <li><a href="#estrutura">Estrutura</a></li>
              <li><a href="#planos">Planos</a></li>
              <li><a href="#unidades">Unidades</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li>Av. Cosme Ferreira, 2714</li>
              <li>Coroado, Manaus – AM</li>
              <li>
                <a href="https://wa.me/5592988291001" target="_blank" rel="noopener noreferrer">
                  WhatsApp: (92) 98829-1001
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Thanos Academia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
