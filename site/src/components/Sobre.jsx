import './Sobre.css'

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="container sobre-inner">
        <div className="sobre-text">
          <span className="label">Sobre a Thanos Academia</span>
          <h2 className="section-title">
            Força, disciplina<br />e resultado de verdade
          </h2>
          <p className="section-subtitle">
            A Thanos Academia nasceu para quem quer mais. Com duas unidades em
            Manaus, estrutura de ponta e profissionais que vivem o que ensinam,
            entregamos o ambiente certo para você evoluir de verdade — sem
            desculpa, sem limite.
          </p>
        </div>

        <div className="sobre-stats">
          <div className="stat-card">
            <span className="stat-number">5+</span>
            <span className="stat-label">Anos de experiência</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">3k+</span>
            <span className="stat-label">Alunos ativos</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">2</span>
            <span className="stat-label">Unidades em Manaus</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Foco em resultado</span>
          </div>
        </div>
      </div>
    </section>
  )
}
