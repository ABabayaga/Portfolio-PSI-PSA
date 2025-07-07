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
            <p><span className={styles.dot}></span> Transtornos de ansiedade (ansiedade generalizada, fobias, pânico, etc).</p>
            <p><span className={styles.dot}></span> Transtorno obsessivo-compulsivo (TOC).</p>
            <p><span className={styles.dot}></span> Luto e processos de perda.</p>
          </div>
          <div className={styles.column}>
            <p><span className={styles.dot}></span> Pacientes com doenças crônicas e em cuidados paliativos.</p>
            <p><span className={styles.dot}></span> Depressão e questões relacionadas ao humor.</p>
            <p><span className={styles.dot}></span> Dificuldades nos relacionamentos (afetivos, familiares ou sociais).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
