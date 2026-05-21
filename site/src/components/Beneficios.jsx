import './Beneficios.css'

const items = [
  { icon: '🏋️', title: 'Aulas Coletivas', desc: 'Diversas modalidades com instrutores especializados para manter a motivação no seu treino.' },
  { icon: '❄️', title: 'Ambiente Climatizado', desc: 'Espaço confortável e bem ventilado para você treinar com máximo conforto durante todo o ano.' },
  { icon: '⚙️', title: 'Equipamentos Modernos', desc: 'Máquinas de última geração, manutenidas regularmente para garantir segurança e performance.' },
  { icon: '👨‍🏫', title: 'Profissionais Qualificados', desc: 'Equipe de educadores físicos prontos para orientar e acompanhar sua evolução.' },
  { icon: '📱', title: 'Acesso pelo App', desc: 'Controle sua frequência, veja aulas e gerencie seu plano diretamente pelo aplicativo.' },
  { icon: '🕐', title: 'Horário Livre', desc: 'Todos os planos incluem acesso em horário livre. Treine quando quiser, do seu jeito.' },
]

export default function Beneficios() {
  return (
    <section className="beneficios" id="beneficios">
      <div className="container">
        <div className="beneficios-header">
          <span className="label">Por que escolher a Thanos</span>
          <h2 className="section-title">
            Mais do que treino,<br />uma experiência completa
          </h2>
        </div>

        <div className="beneficios-grid">
          {items.map((item, i) => (
            <div className="beneficio-card" key={i}>
              <span className="beneficio-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
