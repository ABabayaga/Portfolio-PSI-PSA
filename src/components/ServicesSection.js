import styles from '@/styles/ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <section
      id="about"
      className={styles.sections}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Coluna da imagem (agora à esquerda) */}
          <div className="py-4 col-md-4 mb-4 mb-md-0">
            <img
              src="/pam.png"
              alt="Therapist"
              className="img-fluid rounded"
            />
          </div>

          {/* Coluna do texto (agora à direita) */}
          <div className="col-md-8">
            <h2 className={`text-start ${styles.title1}`}>Bem-vindo(a)</h2>
            <p className={`text-justify ${styles.text}`}>
              Olá, sou Pãmella da Silva Aranda, psicóloga com atuação fundamentada na Terapia Cognitivo-Comportamental (TCC) e, atualmente, dedicada ao aprofundamento na Terapia de Aceitação e Compromisso (ACT), uma abordagem que tem ampliado minha escuta clínica e minha prática profissional.

              Sou mestre e doutoranda em Psicologia da Saúde, com foco em cuidados paliativos – tema que me mobiliza profundamente por seu olhar humano e integrativo sobre o sofrimento, a vida e o cuidado. Atuo também como professora universitária, o que me permite compartilhar e construir saberes com novos profissionais da psicologia.

              Minha trajetória inclui experiências no contexto hospitalar e em serviços de saúde mental como o CAPS, onde acompanhei pessoas com transtornos mentais graves e severos. Ao longo dessa caminhada, também participei de uma residência multiprofissional em cuidados continuados integrados, o que enriqueceu minha compreensão sobre o cuidado interdisciplinar.

              Acredito na psicologia como um espaço de escuta, transformação e presença. Seja muito bem-vindo(a)!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
