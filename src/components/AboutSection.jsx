import React, { useState, useEffect, useRef } from "react";
import "./AboutSection.css";

// CountUp Component
function CountUp({ from, to, duration }) {
  const [count, setCount] = useState(from);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const increment = (to - from) / (duration * 60);
    let current = from;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, from, to, duration]);

  return (
    <span ref={ref} className="count-up-about">
      {count.toLocaleString()}+
    </span>
  );
}

export default function AboutSection({ t, lang }) {
  const [activeSkill, setActiveSkill] = useState(0);

  // Récupération des données depuis data.jsx via props t
  const aboutData = t.about;
  const stats = aboutData.stats;

  const skills = aboutData.skillCategories;

  return (
    <section id="about" className="about-section">
      {/* Header */}
      <div className="about-header">
        <span className="about-section-label">01 — {aboutData.title}</span>
        <h2 className="about-title">{aboutData.title}</h2>
      </div>

      {/* Introduction */}
      <div className="about-intro-grid">
        {/* Image placeholder with gradient */}
        <img className="about-image-wrapper" src="/border-Keni.png" alt="" />
        <div>
          <h2 className="hello">{aboutData.hello}</h2>
          <p className="about-intro-text">{aboutData.intro}</p>
        </div>
      </div>
      <div className="btn-div-cv">
        <button className="Bouton-Cv">
          {lang === "fr" ? "Télécharger mon CV" : "Download my CV"}
        </button>
      </div>
      {/* Skills Section */}
      <div>
        <h3 className="about-skills-title">{aboutData.skillsTitle}</h3>

        {/* Skill Categories */}
        <div className="skill-categories">
          {skills.map((skill, i) => (
            <button
              key={i}
              onClick={() => setActiveSkill(i)}
              className={`skill-category-btn ${
                activeSkill === i ? "active" : ""
              }`}
            >
              {skill.category}
            </button>
          ))}
        </div>

        {/* Skill Items */}
        <div className="skill-items-grid">
          {skills[activeSkill].items.map((item, i) => (
            <div key={i} className="skill-item">
              <span className="skill-item-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
