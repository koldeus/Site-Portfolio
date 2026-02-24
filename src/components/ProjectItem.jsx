import React, { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, Github, X, ChevronLeft } from "lucide-react";

export default function ProjectItem({ project, isOpen, toggleOpen }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  function getYouTubeEmbedUrl(url) {
    if (!url) return null;

    const regExp =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);

    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
  }

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const titleLength = project.title.length;
  let maxFontSize = "5rem";
  if (titleLength > 30) maxFontSize = "2.5rem";
  else if (titleLength > 20) maxFontSize = "3.5rem";
  else if (titleLength > 15) maxFontSize = "4rem";

  const openLightbox = (media) => {
    setCurrentMedia(media);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";

    if (window.history && window.history.pushState) {
      window.history.pushState({ lightbox: true }, "");
    }
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setCurrentMedia(null);
    document.body.style.overflow = "auto";
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && lightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox]);

  useEffect(() => {
    const handlePopState = (e) => {
      if (lightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [lightboxOpen, closeLightbox]);

  const acList = project.ac
    ? Array.isArray(project.ac)
      ? project.ac
      : [project.ac]
    : [];

  // ✅ FIX 1 : sécurise project.media si undefined
  const mediaList = project.media ?? [];

  return (
    <>
      <div className="project-row">
        <div className="project-header" onClick={toggleOpen}>
          <div>
            <span
              style={{
                color: "#555",
                fontSize: "clamp(10px, 2vw, 12px)",
                display: "flex",
                marginBottom: "5px",
              }}
            >
              {project.year}
            </span>
            <h2
              style={{
                fontSize: `clamp(1.5rem, 6vw, ${maxFontSize})`,
                margin: 0,
                fontWeight: "900",
                transition: "all 0.5s",
              }}
            >
              {project.title}
            </h2>
          </div>
          <div style={{ textAlign: "right", paddingRight: "50px" }}>
            {project.cats.map((cat, index) => (
              <React.Fragment key={index}>
                <p
                  style={{
                    color: "#6d28d9",
                    fontWeight: "900",
                    fontSize: "clamp(8px, 2vw, 10px)",
                    marginBottom: "10px",
                  }}
                >
                  {cat.toUpperCase()}
                </p>
              </React.Fragment>
            ))}
            <ArrowUpRight
              size={window.innerWidth < 768 ? 24 : 40}
              color={isOpen ? "#fde047" : "white"}
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                display: "inline-block",
              }}
            />
          </div>
        </div>

        <div className={`details ${isOpen ? "open" : ""}`}>
          <div className="details-grid">
            <div>
              <p
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.5rem)",
                  color: "#ccc",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {project.desc}
              </p>

              {acList.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {acList.map((ac, i) => (
                    <div key={i} className="ac-tag">
                      <p
                        style={{
                          fontSize: "clamp(8px, 2vw, 10px)",
                          color: "#fde047",
                          margin: "0 0 5px 0",
                        }}
                      >
                        APPRENTISSAGE CRITIQUE {acList.length > 1 ? i + 1 : ""}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "clamp(0.85rem, 2vw, 1rem)",
                        }}
                      >
                        {ac}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  marginTop: "20px",
                }}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "clamp(10px, 2vw, 12px)",
                      color: "#6d28d9",
                      fontWeight: "bold",
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "30px",
                  flexWrap: "wrap",
                }}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      background: "rgba(109, 40, 217, 0.1)",
                      border: "1px solid #6d28d9",
                      borderRadius: "8px",
                      color: "#6d28d9",
                      textDecoration: "none",
                      fontSize: "clamp(0.85rem, 2vw, 1rem)",
                      fontWeight: "700",
                      transition: "all 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#6d28d9";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(109, 40, 217, 0.1)";
                      e.currentTarget.style.color = "#6d28d9";
                    }}
                  >
                    <Github size={18} />
                    GITHUB
                  </a>
                )}

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      background: "rgba(253, 224, 71, 0.1)",
                      border: "1px solid #fde047",
                      borderRadius: "8px",
                      color: "#fde047",
                      textDecoration: "none",
                      fontSize: "clamp(0.85rem, 2vw, 1rem)",
                      fontWeight: "700",
                      transition: "all 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#fde047";
                      e.currentTarget.style.color = "black";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(253, 224, 71, 0.1)";
                      e.currentTarget.style.color = "#fde047";
                    }}
                  >
                    <ArrowUpRight size={18} />
                    VISIT SITE
                  </a>
                )}
              </div>
            </div>

            <div className="masonry-gallery">
              {mediaList.map((m, i) => (
                <div
                  key={i}
                  className="media-container"
                  onClick={() => openLightbox(m)}
                  style={{ cursor: "pointer" }}
                >
                  {m.type === "img" ? (
                    <img
                      src={m.url}
                      alt=""
                      style={{
                        height: "100%",
                        display: "block",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    <iframe
                      src={getYouTubeEmbedUrl(m.url)}
                      style={{
                        width: "80%",
                        display: "block",
                        borderRadius: "8px",
                      }}
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentMedia && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(138, 138, 138, 0.05)",
            backdropFilter: "blur(10px)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
            animation: "fadeIn 0.3s ease-out",
          }}
          onClick={closeLightbox}
        >
          {isMobile && (
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                padding: "10px 18px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.05em",
                zIndex: 10001,
                backdropFilter: "blur(6px)",
                transition: "all 0.2s",
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.background = "rgba(253, 224, 71, 0.25)";
                e.currentTarget.style.borderColor = "#fde047";
                e.currentTarget.style.color = "#fde047";
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.color = "white";
              }}
            >
              <ChevronLeft size={18} />
              Retour
            </button>
          )}

          <button
            onClick={closeLightbox}
            title="Fermer (Échap)"
            style={{
              position: "absolute",
              top: "10%",
              right: "16px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s",
              zIndex: 10001,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fde047";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
          >
            <X size={22} color="white" />
          </button>

          {!isMobile && (
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(255,255,255,0.4)",
                fontSize: "12px",
                letterSpacing: "0.08em",
                pointerEvents: "none",
                zIndex: 10001,
              }}
            >
              <kbd
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "5px",
                  padding: "2px 8px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                ESC
              </kbd>
              pour fermer
            </div>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "clamp(300px, 90vw, 900px)",
              maxHeight: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "zoomIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {currentMedia.type === "img" ? (
              <img
                src={currentMedia.url}
                alt=""
                style={{ height: "80%", borderRadius: "8px" }}
              />
            ) : (
              <iframe
                src={getYouTubeEmbedUrl(currentMedia.url)}
                style={{
                  height: "100%",
                  display: "block",
                  borderRadius: "8px",
                }}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
