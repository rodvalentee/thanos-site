import './Sobre.css'

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="container sobre-inner">
        <div className="sobre-text">
          <span className="label">Sobre a Thanos Academia</span>
          <h2 className="section-title">
            Transforme seu corpo<br />e sua vida
          </h2>
          <p className="section-subtitle">
            A Thanos Academia vai muito além do conceito tradicional de academia.
            Somos um espaço completo de bem-estar em Manaus, com estrutura de
            ponta, equipamentos modernos e uma equipe de profissionais qualificados
            prontos para orientar seu treino com foco em resultado real.
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
