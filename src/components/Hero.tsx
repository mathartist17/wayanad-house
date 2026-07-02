import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={`${styles.badge} animate-fade-in`}>
            <span>WAYANAD HOUSE SECRETARY CAMPAIGN</span>
          </div>
          <h1 className={`${styles.title} animate-fade-in delay-1`}>
            Girish for <br />
            <span className="glow-text">Secretary</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-2`}>
            Let's give ourselves reasons to participate. Grounded, voluntary, and realistic initiatives to bring Wayanad House back to life.
          </p>
          <div className={`${styles.features} animate-fade-in delay-3`}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🌱</span>
              <div>
                <h4>Starting Small</h4>
                <p>No empty promises. We start with simple, voluntary participation-based activities.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>📢</span>
              <div>
                <h4>Information, Not Spam</h4>
                <p>Frequent, bite-sized updates on the house site instead of cluttering chat channels.</p>
              </div>
            </div>
          </div>
          <div className={`${styles.actions} animate-fade-in delay-3`}>
            <a href="#manifesto" className="btn btn-primary">
              View Manifesto
            </a>
            <a href="/campaign_manifesto.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              📥 Download PDF
            </a>
          </div>
        </div>
        <div className={`${styles.visual} animate-fade-in delay-1`}>
          <div className={`${styles.imageWrapper} glass`}>
            <Image 
              src="/badge.jpg" 
              alt="Girish Campaign Badge" 
              width={400} 
              height={400} 
              priority
              className={styles.image}
            />
            <div className={styles.imageGlow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
