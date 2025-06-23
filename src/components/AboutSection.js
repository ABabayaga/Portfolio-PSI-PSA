// components/AboutSection.js
import styles from '@/styles/Header.module.css'

export default function AboutSection() {
    return (
      <section id=""
      className={`${styles.header} d-flex align-items-center justify-content-center text-center`}
      style={{ minHeight: '30vh', margin: 0, padding: 0 }}>
        <div className="row align-items-center justify-content-center text-center">
          <p>
          Compassionate, evidence based<br/>
           psychological services, dedicated to <br/>
           transforming lives and building healthier<br/>
            communities.
          </p>
        </div>
      </section>
    );
  }