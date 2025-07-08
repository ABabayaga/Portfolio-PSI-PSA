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
      <nav className={` ${styles.title1} flex-grow-1 d-flex justify-content-center`}>
        <a href="#home" className="mx-3">Início</a>
        <a href="#about" className="mx-3">Sobre</a>
        <a href="#services" className="mx-3">Serviços</a>
        <a href="#contato" className="mx-3">Contato</a>
        <a
          href='https://wa.me/5567996333839?text=Olá%21%20Gostaria%20de%20mais%20informações%20sobre%20o%20atendimento.'
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.contactBtn}>
            Whatsapp
            <img
              src='/whatsapp.svg'
              style={{
                width: '50%',
                maxWidth: '20px',
                height: 'auto',
                marginLeft: '5px'
              }}
            />
          </button>
        </a>
      </nav>

      

      {/* Coluna direita "vazia" com mesma largura do logo */}
      <div style={{ width: '150px' }}></div>
    </header>
  );
}
