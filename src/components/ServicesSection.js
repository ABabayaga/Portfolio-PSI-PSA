import styles from '@/styles/ContactSection.module.css';

export default function ServicesSection() {
  return (
    <section
      id="about"
      className="bg-light"
      style={{
        minHeight: '70vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        scrollMarginTop: '140px'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Coluna da imagem (agora à esquerda) */}
          <div className="py-4 col-md-4 mb-4 mb-md-0">
            <img
              src="/foto2.png"
              alt="Therapist"
              className="img-fluid rounded"
            />
          </div>

          {/* Coluna do texto (agora à direita) */}
          <div className="col-md-8">
            <h2 className="text-start">Welcome</h2>
            <p className={`text-justify ${styles.text1}`}>
              Eum a debeabst and trency carical cose hokcost based ni Sociy tal.
              Brebase, I am committed to helping individuals navigate Sfo's challenges and cultivate resilience. I have extensive experience working with people
              facing psychological challenges in both hospital and community
              settings.<br/> I keep a compassionate tone while addressing a range of concerns during clinical sessions, and my therapeutic approach is an integrative form of psychotherapy using the most current evidence-based techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
