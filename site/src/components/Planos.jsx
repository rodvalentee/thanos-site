import './Planos.css'

const planos = [
  {
    nome: 'Mensal',
    preco: '139,99',
    periodo: 'mês',
    destaque: false,
    tag: null,
    items: [
      'Sem taxa de adesão',
      'Sem fidelidade',
      'Acesso em horário livre',
      'Aulas coletivas inclusas',
      'R$ 10,00 de desconto no dinheiro',
    ],
  },
  {
    nome: 'Trimestral',
    preco: '360,00',
    periodo: 'trimestre',
    destaque: true,
    tag: 'Mais escolhido',
    items: [
      'Sem taxa de adesão',
      'Sem fidelidade',
      'Acesso em horário livre',
      'Aulas coletivas inclusas',
      'Parcelado em até 3x no cartão',
      'R$ 30,00 de desconto no dinheiro',
    ],
  },
]

export default function Planos() {
  return (
    <section className="planos" id="planos">
      <div className="container">
        <div className="planos-header">
          <span className="label">Escolha seu plano</span>
          <h2 className="section-title">
            Invista em você,<br />sem complicação
          </h2>
          <p className="section-subtitle">
            Planos pensados para caber na sua rotina e no seu bolso.
            Todos com acesso em horário livre e aulas coletivas inclusas.
          </p>
        </div>

        <div className="planos-grid">
          {planos.map((p, i) => (
            <div className={`plano-card ${p.destaque ? 'destaque' : ''}`} key={i}>
              {p.tag && <span className="plano-tag">{p.tag}</span>}
              <p className="plano-nome">{p.nome}</p>
              <div className="plano-preco">
                <span className="cifrao">R$</span>
                <span className="valor">{p.preco}</span>
                <span className="periodo">/{p.periodo}</span>
              </div>
              <ul className="plano-items">
                {p.items.map((item, j) => (
                  <li key={j}>
                    <span className="check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/5592988291001?text=Quero me matricular no plano ${p.nome}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`plano-btn ${p.destaque ? 'btn-primary' : 'btn-outline'}`}
              >
                Matricule-se agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
