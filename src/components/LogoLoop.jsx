import React from "react";
import {
  SiPhp,
  SiReact,
  SiJavascript,
  SiPython,
  SiDocker,
  SiGit,
  SiVite,
  SiSymfony,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiWordpress,
} from "react-icons/si";

export default function LogoLoop({ speed = 30 }) {
  const icons = [
    SiPhp,
    SiSymfony,
    SiLaravel,
    SiReact,
    SiJavascript,
    SiPython,
    SiDocker,
    SiGit,
    SiVite,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiWordpress,
  ];

  return (
    <div className="logo-ticker">
      <div
        style={{
          display: "flex",
          animation: `scroll ${speed}s linear infinite`,
          width: "fit-content",
          gap: "clamp(20px, 3vw, 40px)",
        }}
      >
        {[...icons, ...icons, ...icons].map((Icon, i) => (
          <div
            key={i}
            style={{
              width: "clamp(45px, 5vw, 65px)",
              height: "clamp(45px, 5vw, 65px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.3)",
              transition: "color 0.3s ease, transform 0.3s ease",
              flex: "0 0 auto",
              cursor: "pointer",
              minWidth: "45px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fde047";
              e.currentTarget.style.transform = "scale(1.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.3)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Icon size={40} />
          </div>
        ))}
      </div>
    </div>
  );
}
