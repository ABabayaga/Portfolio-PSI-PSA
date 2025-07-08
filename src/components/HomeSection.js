import styles from '@/styles/HomeSection.module.css';

export default function HeroSection() {
  return (
    <section id='home' className={styles["hero-section"]}
      style={{ scrollMarginTop: '100px' }}>

      <div className={`container ${styles["hero-content"]}`}>
        <div className="row align-items-center">
          {/* Coluna da frase */}
          <div className="col-md-6 text-md-start text-center mb-4">
            <blockquote className="blockquote">
              <p className={`${styles.quote}`}>
                “Autoconhecimento não para sair do caos, mas para estar nele e não sair de si.”
              </p>
              {/*<footer className={`${styles.quote}`}>-Carl Jung</footer>*/}
            </blockquote>
          </div>

          {/* Coluna da imagem */}
          <div className="col-md-6 text-center">
            <img
              src="/pam33.png"
              alt="Psicóloga"
              className={`img-fluid ${styles["hero-img"]}`}
            />
          </div>
        </div>

        <div className={styles.whatsappContainer}>
          <a
            href="https://wa.me/5567996333839?text=Olá%21%20Gostaria%20de%20mais%20informações%20sobre%20o%20atendimento." // ou seu link personalizado
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp4.svg" // Certifique-se de que o ícone está em /public
              alt="WhatsApp"
              className={styles.whatsappIcon}
            />
          </a>
        </div>

      </div>
    </section>
  );
}
