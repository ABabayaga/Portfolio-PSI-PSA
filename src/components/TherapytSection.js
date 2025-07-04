import styles from '@/styles/TherapySection.module.css';

export default function ContactSection() {
  return (
    <section id="services" className={styles.contactSection}>
      <div className={styles.centerContainer}>
        <h2 className={styles.title}><strong>
         {/* <img src="/brain.png" width="35" height="35" alt="Cérebro" />*/}
          Área de Foco da Terapia</strong>
        </h2>
        <hr className={styles.hrDecorative} />

        <div className={styles.columns}>
          <div className={styles.column}>
            <p><img src="/brown.svg" width="16" height="16" className="me-2" /> Transtornos de ansiedade (ansiedade generalizada, fobias, pânico, etc).</p>
            <p><img src="/brown.svg" width="16" height="16" className="me-2" /> Transtorno obsessivo-compulsivo (TOC).</p>
            <p><img src="/brown.svg" width="16" height="16" className="me-2" /> Luto e processos de perda.</p>
          </div>
          <div className={styles.column}>
            <p><img src="/brown.svg" width="16" height="16" className="me-2" /> Pacientes com doenças crônicas e em cuidados paliativos.</p>
            <p><img src="/brown.svg" width="16" height="16" className="me-2" /> Depressão e questões relacionadas ao humor.</p>
            <p><img src="/brown.svg" width="16" height="16" className="me-2" /> Dificuldades nos relacionamentos (afetivos, familiares ou sociais).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
