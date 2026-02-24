import ScrollIndicator from "./scrolldown";
import "./Hero-banner.css";
import React, { useState, useEffect, useRef } from "react";

function CountUp({ from, to, duration, separator = "," }) {
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
      { threshold: 0.3 }
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
    <span
      ref={ref}
      style={{
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: "900",
        color: "#fde047",
      }}
    >
      {count.toLocaleString()}+
    </span>
  );
}

export default function HeroPortfolio({ t, isSticky }) {
  const stats = t.about.stats;

  return (
    /*
      On ajoute "hero--behind" quand isSticky=true.
      Cette classe écrase le z-index: 99 défini sur .hero
      pour que .main-part puisse glisser par-dessus.
    */
    <section className={`hero${isSticky ? " hero--behind" : ""}`}>
      <div className="hero-bg">
        <span className="span">PORTFOLIO</span>
        <span className="span">PORTFOLIO</span>
        <span className="span">PORTFOLIO</span>
        <span className="Title-front">PORTFOLIO</span>
        <img src="Keni-Mottin.png" alt="Portrait" className="Hero-Image" />
      </div>

      <div className="hero-blackbar">

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <CountUp from={0} to={stat.number} duration={2} />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}