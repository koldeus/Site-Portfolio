import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

// Navbar Component
export default function Navbar({ lang, setLang, t, onLanguageChange }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    
    handleResize();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const handleLanguageChange = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    
    if (onLanguageChange) {
      onLanguageChange(newLang);
    } else {
      setLang(newLang);
    }
    
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled || isMobile ? "rgba(255,255,255,0.05)" : "transparent",
        backdropFilter: scrolled || isMobile ? "blur(50px)" : "none",
        padding: scrolled ? "20px 40px" : "40px",
        transition: "all 0.3s",
      }}
    >
      <div 
        onClick={() => scrollToSection("hero")} 
        style={{ 
          cursor: "pointer",
          fontSize: "1.5rem",
          fontWeight: "900",
          color: "white"
        }}
      >
        <img src="/logo_Portfolio.png" alt="Logo Portfolio" style={{ height: "50px" }} />
      </div>

      {isMobile && (
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            zIndex: 1001
          }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      <div 
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          ...(isMobile ? {
            position: "fixed",
            top: 0,
            right: menuOpen ? 0 : "-100%",
            height: "100vh",
            width: "70%",
            maxWidth: "300px",
            background: "rgba(0,0,0,0.98)",
            backdropFilter: "blur(20px)",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 1000,
            padding: "40px",
            transition: "right 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: menuOpen ? "-10px 0 30px rgba(0,0,0,0.5)" : "none"
          } : {})
        }}
      >
        <button 
          onClick={() => scrollToSection("about")}
          style={{
            background: "none",
            border: "none",
            color: activeSection === "about" ? "#fde047" : "white",
            cursor: "pointer",
            fontSize: isMobile ? "1.2rem" : "1rem",
            transition: "all 0.3s",
            fontWeight: activeSection === "about" ? "700" : "400",
            opacity: isMobile && menuOpen ? 1 : isMobile ? 0 : 1,
            transform: isMobile && menuOpen ? "translateX(0)" : isMobile ? "translateX(20px)" : "translateX(0)",
            transitionDelay: isMobile && menuOpen ? "0.1s" : "0s"
          }}
        >
          {lang === "fr" ? "À propos" : "About"}
        </button>
        <button 
          onClick={() => scrollToSection("projects")}
          style={{
            background: "none",
            border: "none",
            color: activeSection === "projects" ? "#fde047" : "white",
            cursor: "pointer",
            fontSize: isMobile ? "1.2rem" : "1rem",
            transition: "all 0.3s",
            fontWeight: activeSection === "projects" ? "700" : "400",
            opacity: isMobile && menuOpen ? 1 : isMobile ? 0 : 1,
            transform: isMobile && menuOpen ? "translateX(0)" : isMobile ? "translateX(20px)" : "translateX(0)",
            transitionDelay: isMobile && menuOpen ? "0.2s" : "0s"
          }}
        >
          {lang === "fr" ? "Projets" : "Projects"}
        </button>
        <button 
          onClick={() => scrollToSection("contact")}
          style={{
            background: "none",
            border: "none",
            color: activeSection === "contact" ? "#fde047" : "white",
            cursor: "pointer",
            fontSize: isMobile ? "1.2rem" : "1rem",
            transition: "all 0.3s",
            fontWeight: activeSection === "contact" ? "700" : "400",
            opacity: isMobile && menuOpen ? 1 : isMobile ? 0 : 1,
            transform: isMobile && menuOpen ? "translateX(0)" : isMobile ? "translateX(20px)" : "translateX(0)",
            transitionDelay: isMobile && menuOpen ? "0.3s" : "0s"
          }}
        >
          Contact
        </button>
        <button
          onClick={handleLanguageChange}
          style={{
            background: "rgba(253, 224, 71, 0.1)",
            border: "1px solid #fde047",
            color: "#fde047",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "700",
            opacity: isMobile && menuOpen ? 1 : isMobile ? 0 : 1,
            transform: isMobile && menuOpen ? "translateX(0)" : isMobile ? "translateX(20px)" : "translateX(0)",
            transition: "all 0.3s",
            transitionDelay: isMobile && menuOpen ? "0.4s" : "0s"
          }}
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </div>

      {isMobile && menuOpen && (
        <div 
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 999,
            animation: "fadeIn 0.3s ease-out"
          }}
        />
      )}
    </nav>
  );
}