import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/img2.jpg" alt="Thanos Academia" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content container">
        <p className="label">Academia em Manaus</p>
        <h1>
          Transformamos<br />
          treino em rotina<br />
          <span>e resultado real.</span>
        </h1>
        <p className="hero-sub">
          A academia com estrutura completa, equipamentos modernos e planos
          flexíveis para você treinar do seu jeito.
        </p>
        <div className="hero-actions">
          <a href="#planos" className="btn-primary">
            Conheça os Planos →
          </a>
          <a href="#sobre" className="btn-outline hero-btn-outline">
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  )
}
