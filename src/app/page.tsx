import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Manifesto from "@/components/Manifesto";
import QAForm from "@/components/QAForm";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={`${styles.container} container`}>
          <div className={styles.grid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionBadge}>ABOUT ME & MY PERSPECTIVE</span>
              <h2 className={styles.title}>
                Who is <span className="glow-text">Girish</span>?
              </h2>
              <p className={styles.desc}>
                Hi, I'm Girish. I live in Chennai and am currently in the Diploma level of the IIT Madras Online BS Degree. I understand that many of us in this program are balancing dual degrees, working as remote professionals, or juggling other busy personal commitments.
              </p>
              <p className={styles.desc}>
                Because of these real constraints, I am not going to make grand or unrealistic commitments. Instead, my approach will focus entirely on structured, asynchronous work. I want to minimize unnecessary noise in group chats and ensure that the right information gets shared with the right people at the right time.
              </p>
              <p className={styles.desc}>
                To make this work, I will commit to keeping our house website properly maintained so that info is always accessible. I also plan to form a small group of volunteers who can step up to address queries from house members quickly, making sure no student gets stuck waiting for answers.
              </p>
              
              <div className={styles.valuesList}>
                <div className={styles.valueItem}>
                  <span className={styles.valueNumber}>01</span>
                  <div>
                    <h5>Async-First Focus</h5>
                    <p>Designed for busy schedules, dual degree students, and working professionals.</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <span className={styles.valueNumber}>02</span>
                  <div>
                    <h5>Reducing Noise, Sharing Info</h5>
                    <p>Keeping chat spams low, maintaining the website, and delivering targeted updates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.aboutHighlight}>
              <div className={`${styles.highlightCard} glass`}>
                <h4 className={styles.highlightTitle}>Grounded Commitments</h4>
                <div className={styles.highlightItems}>
                  <div className={styles.hItem}>
                    <span className={styles.hDot}>●</span>
                    <p><strong>Chennai Local:</strong> Direct access for regional headcount planning.</p>
                  </div>
                  <div className={styles.hItem}>
                    <span className={styles.hDot}>●</span>
                    <p><strong>Diploma Level:</strong> Aware of the increasing coursework demands.</p>
                  </div>
                  <div className={styles.hItem}>
                    <span className={styles.hDot}>●</span>
                    <p><strong>Async Mindset:</strong> Respecting your study time and avoiding group tag spams.</p>
                  </div>
                  <div className={styles.hItem}>
                    <span className={styles.hDot}>●</span>
                    <p><strong>Website Maintenance:</strong> Ensuring all critical info and resources are cataloged.</p>
                  </div>
                  <div className={styles.hItem}>
                    <span className={styles.hDot}>●</span>
                    <p><strong>Query Volunteers:</strong> A small group dedicated to helping members get quick answers.</p>
                  </div>
                </div>
                <div className={styles.ctaWrapper}>
                  <a href="#vision" className="btn btn-primary">How We Start</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <Vision />

      {/* Detailed Manifesto */}
      <Manifesto />

      {/* FAQ & Contact Feedback Form */}
      <QAForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
