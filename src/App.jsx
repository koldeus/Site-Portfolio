import React, { useState, useEffect, useRef } from "react";
import { content } from "./Data";
import Navbar from "./components/Navbar";
import SectionDev from "./components/Hero";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import LogoLoop from "./components/LogoLoop";
import HeroPortfolio from "./components/Hero-banner";
import ContactSection from "./components/Contact";
import LoadingPage from "./components/LoadingPage";
import GoTop from "./components/scroll-to-top";

import "./App.css";

export default function App() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
    const browserLang = navigator.language.split("-")[0];
    return ["fr", "en"].includes(browserLang) ? browserLang : "fr";
  });
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [heroSticky, setHeroSticky] = useState(false);
  const heroRef = useRef(null);
  const t = content[lang];

  useEffect(() => {
    const meta = {
      fr: {
        title: "Kéni Mottin - Développeur Web",
        description: "Bienvenue sur mon portfolio je suis kéni mottin, un développeur web passionné par la création de solutions innovantes et performantes. Découvrez mes projets variés, allant du développement d'applications web à l'exploration de l'intelligence artificielle, en passant par la vidéo et la photo. Mon portfolio reflète ma polyvalence et mon engagement à repousser les limites de la technologie pour offrir des expériences utilisateur exceptionnelles.",
        lang: "fr",
      },
      en: {
        title: "Kéni Mottin - Web Developer",
        description: "Welcome to my portfolio I am Kéni Mottin, a web developer passionate about creating innovative and high-performance solutions. Explore my diverse projects, ranging from web application development to artificial intelligence exploration, as well as video and photo work. My portfolio reflects my versatility and commitment to pushing the boundaries of technology to deliver exceptional user experiences.",
        lang: "en",
      },
    };

    const m = meta[lang];
    document.documentElement.lang = m.lang;
    document.title = m.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", m.description);

    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > 5) {
        setHeroSticky(true);
      } else {
        setHeroSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const handleLoad = () => {
      setProgress(100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const handleLanguageChange = (newLang) => {
    setIsLoading(true);
    setProgress(0);
    setHeroSticky(false);

    setTimeout(() => {
      setLang(newLang);
      setIsLoading(false);
    }, 3000);
  };

  const [showGoTop, setshowGoTop] = useState("goTopHidden");
  const refScrollUp = useRef();

  useEffect(() => {
    const handleVisibleButton = () => {
      const position = window.pageYOffset;
      if (position > 200) {
        setshowGoTop("goTop");
      } else {
        setshowGoTop("goTopHidden");
      }
    };

    window.addEventListener("scroll", handleVisibleButton);

    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  const handleScrollUp = () => {
    refScrollUp.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="content-wrapper" ref={refScrollUp}>
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onLanguageChange={handleLanguageChange}
      />

      {/*
        hero-animation-wrapper : garde la place du hero dans le flux
        pour que le contenu en-dessous ne "saute" pas quand le hero devient sticky.
      */}
      <div
        className={`hero-animation-wrapper ${heroSticky ? "is-sticky" : ""}`}
      >
        <div
          ref={heroRef}
          className={`hero-animation ${heroSticky ? "hero-sticky hero-behind" : ""}`}
        >
          <HeroPortfolio t={t} isSticky={heroSticky} />
        </div>
      </div>

      <div className="main-part">
        <main>
          <SectionDev t={t} />
          <AboutSection t={t} lang={lang} />
          <LogoLoop
            icons={[
              "react",
              "node",
              "typescript",
              "javascript",
              "vue",
              "angular",
              "python",
              "docker",
            ]}
            speed={30}
          />
          <ProjectList t={t} />
          <ContactSection t={t} />
        </main>
        <Footer lang={lang} />
      </div>
    </div>
  );
}
