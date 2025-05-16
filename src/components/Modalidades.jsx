import '../styles/Modalidades.css';

function Modalidades() {
    const beneficios = [
        {
            titulo: "Treino Personalizado",
            descricao: "Personal trainers especializados para criar seu programa individual",
            bn: "Acompanhamento exclusivo"
        },
        {
            titulo: "Área de Peso Livre",
            descricao: "Equipamentos de última geração para treino com peso livre",
            bn: "Ambiente espaçoso"
        },
        {
            titulo: "Musculação Iniciante",
            descricao: "Programa especial para quem está começando na musculação",
            bn: "Orientação constante"
        },
        {
            titulo: "Treino Avançado",
            descricao: "Área dedicada para atletas e praticantes avançados",
            bn: "Equipamentos específicos"
        }
    ];

    return (
        <section id="modalidades" className="modalidades">
            <div className="container">
                <h2>Por que treinar conosco?</h2>
                <p className="modalidades-descricao">
                    Academia especializada em musculação, com equipamentos modernos e profissionais altamente qualificados
                </p>
                <div className="modalidades-grid">
                    {beneficios.map((beneficio, index) => (
                        <div key={index} className="modalidade-card">
                            <h3>{beneficio.titulo}</h3>
                            <p>{beneficio.descricao}</p>
                            <span className="destaque">{beneficio.bn}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Modalidades;
