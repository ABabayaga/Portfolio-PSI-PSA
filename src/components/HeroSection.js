import styles from '@/styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id='home' className={styles["hero-section"]}
    style={{ scrollMarginTop: '160px' }}>

      <div className={`container ${styles["hero-content"]}`}>
        <div className="row align-items-center">
          {/* Coluna da frase */}
          <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
            <blockquote className="blockquote">
              <p className="fs-4">
                “I am not what happened to me, I am what I choose to become.”
              </p>
              <footer className="blockquote-footer mt-2">Carl Jung</footer>
            </blockquote>
          </div>

          {/* Coluna da imagem */}
          <div className="col-md-6 text-center">
            <img
              src="/first.png"
              alt="Psicóloga"
              className={`img-fluid ${styles["hero-img"]}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
