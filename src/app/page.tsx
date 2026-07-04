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
                To make this work, I will commit to keeping our house website properly maintained so that info is always accessible. Official internship details will be updated on the house website. I also plan to form a small group of volunteers who can step up to address queries from house members quickly, making sure no student gets stuck waiting for answers.
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
                    <p><strong>Query Volunteers:</strong> A small group dedicated to helping members get answers within a day.</p>
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

      {/* Track Record Section */}
      <section id="track-record" className={styles.trackSection}>
        <div className={`${styles.container} container`}>
          <div className={styles.trackHeader}>
            <span className={styles.sectionBadge}>LAST TERM CONTRIBUTIONS</span>
            <h2 className={styles.title}>
              What I've <span className="glow-text">Done</span> for the House
            </h2>
            <p className={styles.trackSubtitle}>
              Actions speak louder than promises. Here is what I contributed to Wayanad House last term.
            </p>
          </div>

          <div className={styles.trackGrid}>
            <div className={`${styles.trackCard} glass`}>
              <span className={styles.trackIcon}>📍</span>
              <h4>Regional Coordinator</h4>
              <p>Served as the Regional Coordinator for the Chennai region, helping organize local study meetups and coordination.</p>
            </div>

            <div className={`${styles.trackCard} glass`}>
              <span className={styles.trackIcon}>📐</span>
              <h4>Maths 2 & Stats 2 Sessions</h4>
              <p>Took learning sessions for Maths 2 and Stats 2 Foundation courses to help peers understand key concepts.</p>
            </div>

            <div className={`${styles.trackCard} glass`}>
              <span className={styles.trackIcon}>🐍</span>
              <h4>Python OPPE & Buddy</h4>
              <p>Conducted sessions for Python OPPE preparation and also served as a buddy in the Python course.</p>
            </div>

            <div className={`${styles.trackCard} glass`}>
              <span className={styles.trackIcon}>🌐</span>
              <h4>Flask Sessions</h4>
              <p>Organised and led Flask web development sessions to help house members explore backend development.</p>
            </div>

            <div className={`${styles.trackCard} glass`}>
              <span className={styles.trackIcon}>🏆</span>
              <h4>Paradox Python Challenge</h4>
              <p>Won second place in the Python coding challenge during Paradox, representing Wayanad House.</p>
            </div>

            <div className={`${styles.trackCard} glass`}>
              <span className={styles.trackIcon}>📊</span>
              <h4>Strong Academic Standing</h4>
              <p>Maintaining a 10 CGPA, which helps me guide peers effectively across foundational and diploma courses.</p>
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
