import '../styles/Modalidades.css';
import useInView from '../hooks/useInView';

function Modalidades() {
    const [sectionRef, isInView] = useInView();
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
    ];    return (
        <section id="modalidades" className="modalidades" ref={sectionRef}>
            <div className="container">
                <h2 className={`${isInView ? 'animate-fadeIn' : ''} initially-hidden`}>
                    Por que treinar conosco?
                </h2>
                <p className={`modalidades-descricao ${isInView ? 'animate-fadeIn delay-200' : ''} initially-hidden`}>
                    Academia especializada em musculação, com equipamentos modernos e profissionais altamente qualificados
                </p>
                <div className="modalidades-grid">
                    {beneficios.map((beneficio, index) => (
                        <div 
                            key={index} 
                            className={`modalidade-card ${isInView ? `animate-fadeIn delay-${(index + 1) * 100}` : ''} initially-hidden`}
                        >
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
