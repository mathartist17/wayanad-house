import styles from "./Vision.module.css";

const visions = [
  {
    icon: "💬",
    title: "1. Google Space & Meetups",
    description: "Our first action is setting up an accountable learning environment in Google Space for sharing progress within the house. For in-person meetings, we will survey counts first, planning meetups only when headcount warrants it.",
  },
  {
    icon: "🤝",
    title: "2. Query Support Volunteers",
    description: "We will bring together a small group of volunteers to quickly answer member queries, making sure questions get addressed fast. We will also compile step-by-step guides for processes like SCTs and lab assignments.",
  },
  {
    icon: "🌐",
    title: "3. Maintaining the House Site",
    description: "I will ensure the house website is properly maintained and all information is shared in one place. We will track hackathons and DSA stats, and highlight members' wins while minimizing overall group chat noise.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className={styles.visionSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>CAMPAIGN APPROACH</span>
          <h2 className={styles.title}>
            Three Practical <span className="glow-text">Pillars</span>
          </h2>
          <p className={styles.subtitle}>
            A simple, step-by-step method to revive participation without spamming groups or setting unachievable goals.
          </p>
        </div>
        <div className="grid-3">
          {visions.map((vision, idx) => (
            <div key={idx} className={`${styles.card} glass`}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{vision.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{vision.title}</h3>
              <p className={styles.cardText}>{vision.description}</p>
              <div className={styles.glowEffect}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
