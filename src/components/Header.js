import styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={`${styles.headernav} d-flex align-items-center px-5`}>
      {/* Coluna do logo */}
      <div className={styles.logoContainer}>
        {/*<img src="/logo2.svg" alt="Psicóloga"  style={{ height: '100px', width: 'auto' }} />*/}
        <img src="/logok.svg" alt="Psicóloga" className={styles.headerimg} />
      </div>

      {/* Coluna central com navegação */}
      <nav className={` ${styles.title1} flex-grow-1 d-flex justify-content-center align-items-center`}>
        <div className="d-flex align-items-center">
          <a href="#home" className="mx-3">Início</a>
          <a href="#about" className="mx-3">Sobre</a>
          <a href="#services" className="mx-3">Serviços</a>
          <a href="#contato" className="mx-3">Contato</a>
          <a href="#agendar" className={`${styles.scheduleBtn} ms-3`}>Agendar Sessão</a>
        </div>
      </nav>



      {/* Coluna direita "vazia" com mesma largura do logo */}
      <div style={{ width: '150px' }}></div>
    </header>
  );
}
