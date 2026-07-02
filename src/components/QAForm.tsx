"use client";

import { useState } from "react";
import styles from "./QAForm.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Who is eligible to vote in the house elections?",
    answer: "All active students who are officially assigned to Wayanad House in the IIT Madras BS degree program are eligible to cast their votes.",
  },
  {
    question: "How can I reach Girish on Google Chat?",
    answer: "You can find me directly on Google Chat using my student email: 25f1002053@ds.study.iitm.ac.in. Feel free to message me anytime; I will get back to you as soon as possible.",
  },
  {
    question: "What is the priority for the campaign volunteers?",
    answer: "We will establish a small group of volunteers to address queries from members promptly. This ensures queries are answered quickly without creating excessive group noise.",
  },
];

export default function QAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Academic Support",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission state
    setIsSubmitted(true);

    // Formulate mailto link so the message actually reaches Girish's email
    const emailTo = "25f1002053@ds.study.iitm.ac.in";
    const subject = encodeURIComponent(`[Wayanad Campaign] ${formData.category} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Category: ${formData.category}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormData({ name: "", email: "", category: "Academic Support", message: "" });
    }, 1500);
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <section id="qa" className={styles.qaSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* FAQ Accordion */}
          <div className={styles.faqCol}>
            <span className={styles.sectionBadge}>HAVE QUESTIONS?</span>
            <h2 className={styles.title}>Frequently Asked <span className="glow-text">FAQs</span></h2>
            <p className={styles.subtitle}>
              Quick answers about communication channels and volunteering. You can reach out to me anytime on <strong>Google Chat</strong> and I'll get back to you as soon as possible.
            </p>

            <div className={styles.faqList}>
              {faqs.map((faq, idx) => (
                <div key={idx} className={`${styles.faqCard} glass`}>
                  <button 
                    className={styles.faqQuestion} 
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={activeFaq === idx}
                  >
                    <span>{faq.question}</span>
                    <span className={`${styles.arrow} ${activeFaq === idx ? styles.arrowRotated : ""}`}>▼</span>
                  </button>
                  <div className={`${styles.faqAnswer} ${activeFaq === idx ? styles.faqAnswerOpen : ""}`}>
                    <div className={styles.answerText}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={styles.formCol}>
            <div className={`${styles.formWrapper} glass`}>
              <h3 className={styles.formTitle}>Send a Direct Email</h3>
              <p className={styles.formSubtitle}>
                Submitting this form opens your mail client to send a direct message to <strong>25f1002053@ds.study.iitm.ac.in</strong>.
              </p>

              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h4>Opening Mail Client...</h4>
                  <p>Your message has been drafted. Please hit send in your email client to send it to Girish at 25f1002053@ds.study.iitm.ac.in.</p>
                  <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary">Draft Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="e.g., Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">IITM Student Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="e.g., 25f1002053@ds.study.iitm.ac.in"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="category">Category of Inquiry</label>
                    <select 
                      id="category" 
                      name="category" 
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option>Academic Support</option>
                      <option>Google Space & Study Groups</option>
                      <option>Volunteering to Help</option>
                      <option>General Feedback</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4}
                      placeholder="Share your concerns, ideas or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">Draft Email</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
