import styles from '@/styles/TherapySection.module.css';

export default function ContactSection() {
  return (
    <section id="services" className={`py-4 ${styles.contactSection}`} style={{ margin: 0, padding: 0 }}>
      <div className="container">
        <div className="row justify-content-end">

          <div className="col-md-4">
            <h2 className={styles.title}>Therapy Focus Area</h2>
          </div>

          <div className="col-md-8">
            {/*<h2 className={styles.title}>Welcome</h2>*/}

            {/* Linha com 2 colunas de 4 palavras */}
            <div className="row mt-3">
              <div className="col-6">
                <p><img src="/brown.svg" alt="" width="16" height="16" className="me-2" />Palavra 1</p>
                <p><img src="/brown.svg" alt="" width="16" height="16" className="me-2" />Palavra 2</p>
                <p><img src="/brown.svg" alt="" width="16" height="16" className="me-2" />Palavra 3</p>
                <p><img src="/brown.svg" alt="" width="16" height="16" className="me-2" />Palavra 4</p>
              </div>
              <div className="col-6">
                <p><img src="/brown.svg" alt="" width="16" height="16" className="me-2" />Palavra 5</p>
                <p><img src="/brown.svg" alt="" width="16" height="16" className="me-2" />Palavra 6</p>
                <p><img src="/brown.svg" alt="" width="16" height="16" className="me-2" />Palavra 7</p>
                <p><img src="/brown.svg" alt="" width="16" height="16" className="me-2" />Palavra 8</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
