// components/AboutSection.js
import styles from '@/styles/Header.module.css'

export default function AboutSection() {
  return (
    <section
      id=""
      className={`${styles.header} d-flex align-items-center justify-content-center text-center`}
      style={{ minHeight: '30vh', margin: 0, padding: 0 }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center w-100" >
        {/*<img src="/leaf.png" alt="Leaf Icon" style={{ width: '40px', marginBottom: '25px' }} />*/}
        {/* Linha decorativa acima do texto */}
        <div
          style={{
            width: '60px',
            height: '3px',
            backgroundColor: '#4a2e1f', // ajuste para cor da identidade visual
            marginBottom: '16px',
            borderRadius: '2px'
          }}
        />
        <p className={styles.title1} style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
          Atendimento psicológico humanizado, com base em evidências científicas, acolhendo a dor e promovendo transformação.
        </p>
      </div>
    </section>

  );
}