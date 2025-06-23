import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer id='contato' className={`${styles.footer} py-5 text-white`}>
      <div className="container" style={{ maxWidth: '760px' }} >
        <div className="row">

          {/* Coluna esquerda */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className={styles.title}>Atendimento</h2>

            <p className={styles.text} >Psicoterapia voltada ao público adulto</p>
            <button className={styles.contactBtn}>ENTRAR EM CONTATO</button>
          </div>

          {/* Coluna direita */}
          <div className="col-md-6 text-start">
            <h2 className={styles.title}>Contato</h2>
            <div className={styles.text} >
            <p> (67) 97541-3669</p>
            <p> CRP</p>
            <p>psipamellasaranda@gmail.com</p>
            <p>Rua José Antônio, 2200 - Monte Castelo, Campo Grande - MS</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <small>&copy; {new Date().getFullYear()} Alef Devops. Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  );
}
