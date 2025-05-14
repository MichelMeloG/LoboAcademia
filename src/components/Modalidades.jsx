import '../styles/Modalidades.css';

function Modalidades() {
    const beneficios = [
        {
            titulo: "Treino Personalizado",
            descricao: "Personal trainers especializados para criar seu programa individual",
            horario: "Acompanhamento exclusivo"
        },
        {
            titulo: "Área de Peso Livre",
            descricao: "Equipamentos de última geração para treino com peso livre",
            horario: "Ambiente espaçoso"
        },
        {
            titulo: "Musculação Iniciante",
            descricao: "Programa especial para quem está começando na musculação",
            horario: "Orientação constante"
        },
        {
            titulo: "Treino Avançado",
            descricao: "Área dedicada para atletas e praticantes avançados",
            horario: "Equipamentos específicos"
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
                            <span className="destaque">{beneficio.horario}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Modalidades;
