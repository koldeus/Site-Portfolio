import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import "./ContactSection.css";

export default function ContactSection({ t }) {
  const contactData = t.contact;

  return (
    <section id="contact" className="contact-section">
      {/* Header */}
      <div className="about-header">
        <span className="about-section-label">03 — {contactData.title}</span>
        <h2 className="about-title">{contactData.title}</h2>
      </div>

      {/* Contact Grid */}
      <div className="contact-grid">
        {/* Email */}
        <a href="mailto:kenimottin@gmail.com" className="contact-card">
          <div className="contact-icon-wrapper">
            <Mail size={24} />
          </div>
          <div className="contact-info">
            <h3 className="contact-label">Email</h3>
            <p className="contact-value">kenimottin@gmail.com</p>
          </div>
        </a>

        {/* Phone */}
        <a href="tel:+33603683298" className="contact-card">
          <div className="contact-icon-wrapper">
            <Phone size={24} />
          </div>
          <div className="contact-info">
            <h3 className="contact-label">Téléphone</h3>
            <p className="contact-value">+33 6 03 68 32 98</p>
          </div>
        </a>

        {/* Location */}
        <div className="contact-card contact-card-location">
          <div className="contact-icon-wrapper">
            <MapPin size={24} />
          </div>
          <div className="contact-info">
            <h3 className="contact-label">Localisation</h3>
            <p className="contact-value">Amboise, France</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="contact-social-section">
        <h3 className="contact-social-title">{contactData.socialTitle}</h3>
        <div className="contact-social-links">

          <a
            href="https://github.com/Koldeus"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link social-github"
          >
            <div className="social-icon-wrapper">
              <Github size={20} />
            </div>
            <div className="social-info">
              <p className="social-platform">GitHub</p>
              <p className="social-handle">@Koldeus</p>
            </div>
            <ExternalLink size={14} className="social-arrow" />
          </a>

          <a
            href="https://www.linkedin.com/in/kéni-mottin/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link social-linkedin"
          >
            <div className="social-icon-wrapper">
              <Linkedin size={20} />
            </div>
            <div className="social-info">
              <p className="social-platform">LinkedIn</p>
              <p className="social-handle">Kéni Mottin</p>
            </div>
            <ExternalLink size={14} className="social-arrow" />
          </a>

        </div>
      </div>
    </section>
  );
}