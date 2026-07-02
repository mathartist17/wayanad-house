import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="vote" className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              WAYANAD<span className={styles.dot}>.</span>
              <span className={styles.subtitle}>HOUSE</span>
            </div>
            <p className={styles.brandDesc}>
              A student-driven campaign aimed at creating academic networks, fostering connections, and bringing positive change to Wayanad House in the IIT Madras Online Degree program.
            </p>
          </div>

          <div className={styles.linksCol}>
            <h4>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Girish</a></li>
              <li><a href="#vision">Vision</a></li>
              <li><a href="#manifesto">Manifesto</a></li>
              <li><a href="#qa">Connect & QA</a></li>
            </ul>
          </div>

          <div className={styles.ctaCol}>
            <h4>Support the Campaign</h4>
            <p className={styles.ctaDesc}>Your support determines our shared future. Vote for active representation, clarity, and growth.</p>
            <div className={styles.voteBox}>
              <span className={styles.voteText}>VOTE FOR PROGRESS</span>
              <span className={styles.candidateName}>GIRISH FOR SECRETARY</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Girish's Election Campaign. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            Disclaimer: This is a student election campaign page. This website is run independently by candidate Girish and is not an official portal of IIT Madras.
          </p>
        </div>
      </div>
    </footer>
  );
}
