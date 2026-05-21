import './Estrutura.css'

const espacos = [
  {
    img: '/img2.jpg',
    tag: 'Musculação',
    title: 'Sala de Musculação',
    desc: 'Espaço amplo com equipamentos completos para treino de força e hipertrofia, com supervisão profissional.',
  },
  {
    img: '/img2.jpg',
    tag: 'Cardio',
    title: 'Área de Cardio',
    desc: 'Esteiras, bicicletas e equipamentos de cardio com iluminação especial para manter o ritmo alto.',
  },
  {
    img: '/img1.jpg',
    tag: 'Aulas Coletivas',
    title: 'Espaço de Aulas',
    desc: 'Sala exclusiva para aulas coletivas com diversas modalidades e horários que se encaixam na sua rotina.',
  },
]

export default function Estrutura() {
  return (
    <section className="estrutura" id="estrutura">
      <div className="container">
        <span className="label">Nossas instalações</span>
        <h2 className="section-title">
          Estrutura completa<br />para sua evolução
        </h2>
        <p className="section-subtitle" style={{ marginBottom: '56px' }}>
          Equipamentos modernos, espaços exclusivos e tecnologia de ponta
          para você ter o melhor treino possível.
        </p>

        <div className="estrutura-grid">
          {espacos.map((e, i) => (
            <div className="espaco-card" key={i}>
              <div className="espaco-img">
                <img src={e.img} alt={e.title} />
                <span className="espaco-tag">{e.tag}</span>
              </div>
              <div className="espaco-body">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <span className="espaco-disponivel">Disponível</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
