"use client";

import { useState } from "react";
import styles from "./Manifesto.module.css";

type AgendaItem = {
  title: string;
  description: string;
  points: string[];
};

type ManifestoAgendas = {
  [key: string]: AgendaItem[];
};

const manifestoAgendas: ManifestoAgendas = {
  firstaction: [
    {
      title: "Accountable Learning in Google Space",
      description: "Setting up a dedicated Google Space designed for community learning and progress sharing.",
      points: [
        "A structured workspace to share daily or weekly learning milestones.",
        "Completely voluntary accountability checks—no pressure, just a space to stay motivated.",
        "Organizing study circles within the Space based on course registrations."
      ]
    },
    {
      title: "Maintaining the House Website",
      description: "My first technical action is taking responsibility for updating and maintaining the Wayanad House website.",
      points: [
        "Ensuring all resources, tools, and guides are organized and kept up-to-date.",
        "Providing an easy interface for any student in the house to submit links or notes.",
        "Creating a single, reliable point of reference for all announcements.",
        "Carrying forward the online game initiative started by the past UHC council."
      ]
    }
  ],
  support: [
    {
      title: "Query Support Volunteers",
      description: "Gathering a group of volunteers to answer questions from house members, with every query resolved within a day.",
      points: [
        "Structuring a rotational volunteer group to monitor and address queries from students within one day.",
        "Making sure students get answers to urgent queries quickly without having to wait.",
        "Building a small database of common issues (registration, fee timelines, courses) to reply faster."
      ]
    },
    {
      title: "Step-by-Step Documentation Guides",
      description: "Clear and straightforward walkthroughs for academic and setup processes.",
      points: [
        "Step-by-step setup guides for environment configurations like SCT.",
        "Simple checklists and common pitfalls to avoid for lab assignment submissions.",
        "Hosting all documentation on the house website for easy async lookup."
      ]
    },
    {
      title: "Open Contributions for All",
      description: "Letting every member share their knowledge on the website, while official internship details are updated there as well.",
      points: [
        "A clear contribution model allowing any member to write or update guides on the house site.",
        "Crediting contributors on the website for their help.",
        "Compiling collective house knowledge instead of relying on a single resource."
      ]
    }
  ],
  asyncwork: [
    {
      title: "Info Bites Over Group Chat Noise",
      description: "Minimizing chat noise and ensuring the right information reaches the right people.",
      points: [
        "Frequently updating the website with small info bites instead of posting large paragraphs in chat groups.",
        "Avoiding unnecessary mentions (@everyone) in groups to respect students' work and study time.",
        "Using clean category tags on the website so students can read only what is relevant to their level."
      ]
    },
    {
      title: "Count-Based Regional Meetups",
      description: "Planning physical gatherings only when headcount warrants it.",
      points: [
        "Conducting brief city polls to check the exact number of active members available.",
        "Planning meetups only if the participant count makes it practical and worthwhile.",
        "Focusing on simple, local co-working or discussions to keep them low-pressure."
      ]
    },
    {
      title: "Inter-House & Society Events",
      description: "Co-hosting events with other student houses and societies for joint value.",
      points: [
        "Partnering on workshops, DSA talks, and industry Q&As to avoid duplicating efforts.",
        "Creating collaborative events that add genuine value for dual-degree and remote professionals.",
        "Promoting house participation in larger hackathons and tracking stats on the website."
      ]
    }
  ]
};

export default function Manifesto() {
  const [activeTab, setActiveTab] = useState<string>("firstaction");

  return (
    <section id="manifesto" className={styles.manifestoSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>PLANNED ACTIONS</span>
          <h2 className={styles.title}>
            Subtle & Realistic <span className="glow-text">Manifesto</span>
          </h2>
          <p className={styles.subtitle}>
            A grounded approach centered around student commitments, dual-degree workloads, and async operations.
          </p>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tabBtn} ${activeTab === "firstaction" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("firstaction")}
          >
            🚀 First Actions
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "support" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("support")}
          >
            🙋 Query Support & Guides
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "asyncwork" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("asyncwork")}
          >
            ⚡ Async Work & Noise Control
          </button>
        </div>

        <div className={styles.tabContent}>
          <div className={styles.grid}>
            {manifestoAgendas[activeTab].map((agenda, index) => (
              <div key={index} className={`${styles.agendaCard} glass`}>
                <h3 className={styles.agendaTitle}>{agenda.title}</h3>
                <p className={styles.agendaDesc}>{agenda.description}</p>
                <ul className={styles.pointsList}>
                  {agenda.points.map((point, idx) => (
                    <li key={idx} className={styles.pointItem}>
                      <span className={styles.bullet}>✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.cardGlow}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
