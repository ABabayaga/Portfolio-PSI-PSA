import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer id='contato' className={`${styles.footer} py-5 text-white`}>
      <div className="container" style={{ maxWidth: '960px' }} >
        <div className={`row ${styles.row}`}>

          {/* Coluna esquerda */}
          <div className={styles["custom-colleft"]}>
            {/*<h2 className={styles.title}>Atendimento:</h2><p>Psicoterapia individual</p>*/}

            <p>
              <span style={{ fontWeight: 'bold' }}>ATENDIMENTO:</span> Psicoterapia individual.
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>PÚBLICO:</span> Adolescentes, adultos e idosos.
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>DESTINADO A:</span> Pessoas que falam português e residem no Brasil ou no exterior.
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>MODALIDADE:</span> Online e presencial em Campo Grande - MS.
            </p>

            {/*<p className={styles.text} >Psicoterapia voltada ao público adulto</p>*/}
            <div style={{ textAlign: 'center' }}>
              <a href='https://wa.me/5567996333839?text=Olá%21%20Gostaria%20de%20mais%20informações%20sobre%20o%20atendimento.' target="_blank"
                rel="noopener noreferrer">
                <button re className={styles.contactBtn}>Whatsapp<img src='/whatsapp.svg' style={{ width: '50%', maxWidth: '20px', height: 'auto', marginLeft: '8px' }} /></button>
              </a>
            </div>
          </div>

          {/* Coluna direita */}
          <div className={styles["custom-colright"]}>
            {/*<h2 className={styles.title}>Contato</h2>*/}

            <p>
              <span style={{ fontWeight: 'bold' }}>CONTATO</span>
            </p>

            <div className={styles.text} >
              {/*<p> (67) 97541-3669</p>*/}
              <p><span style={{ fontWeight: 'bold' }}>CRP:</span>  14/08821-8</p>
              <p>psipamellasaranda@gmail.com</p>
              <p>Rua: José Antônio, 2200 - Monte Castelo, Campo Grande - MS</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <small>&copy; {new Date().getFullYear()} Pãmella S. Aranda. Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  );
}
