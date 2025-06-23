import styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={`${styles.headernav} d-flex align-items-center border-bottom px-5`}>
      {/* Coluna do logo */}
      <div style={{ width: '150px' }}>
        <img src="/logo.svg" alt="Psicóloga" className="img-fluid" style={{ height: '140px', width: 'auto' }} />
      </div>

      {/* Coluna central com navegação */}
      <nav className={` ${styles.title1} flex-grow-1 d-flex justify-content-center`}>
      <a href="#home" className="mx-3">Início</a>
        <a href="#about" className="mx-3">Sobre</a>
        <a href="#services" className="mx-3">Serviços</a>
        <a href="#contato" className="mx-3">Contato</a>
      </nav>

      {/* Coluna direita "vazia" com mesma largura do logo */}
      <div style={{ width: '150px' }}></div>
    </header>
  );
}
