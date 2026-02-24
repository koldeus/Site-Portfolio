import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer({ lang }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left — name + copyright */}
        <div className="footer-left">
          <span className="footer-name">Kéni Mottin</span>
          <span className="footer-copy">
            © {new Date().getFullYear()}{" "}
            {lang === "fr" ? "Tous droits réservés" : "All rights reserved"}
          </span>
        </div>

        {/* Center — social links */}
        <div className="footer-socials">
          <a
            href="https://github.com/Koldeus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-social-link"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kéni-mottin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:kenimottin@gmail.com"
            aria-label="Email"
            className="footer-social-link"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>

        {/* Right — back to top */}
        <button className="footer-top-btn" onClick={scrollToTop}>
          {lang === "fr" ? "Haut de page" : "Back to top"}
          <ArrowUpRight size={14} />
        </button>
      </div>
    </footer>
  );
}
