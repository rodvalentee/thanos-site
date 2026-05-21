import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/img2.jpg" alt="Thanos Academia" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content container">
        <p className="label">A maior academia de Manaus</p>
        <h1>
          Aqui você não<br />
          para até chegar<br />
          <span>onde quer estar.</span>
        </h1>
        <p className="hero-sub">
          Estrutura de elite, profissionais de alto nível e planos feitos
          para quem leva o treino a sério.
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
