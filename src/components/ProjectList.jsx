import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList({ t }) {
  const [openId, setOpenId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 3;

  const toggleProject = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Obtenir les catégories uniques
  const categories = ["All", ...new Set(t.projects.flatMap((p) => p.cats))];

  // Filtrer les projets par catégorie
  const filteredProjects =
    selectedCategory === "All"
      ? t.projects
      : t.projects.filter((p) => p.cats.includes(selectedCategory));

  // Afficher seulement les premiers projets si showAll est false
  const displayedProjects = filteredProjects;

  // Déterminer le texte du bouton en fonction de la langue
  const isEnglish = t.role && t.role.includes("DEVELOPER");
  const toggleButtonText = showAll
    ? isEnglish
      ? "Show Less"
      : "Voir moins"
    : isEnglish
      ? "See More Projects"
      : "Voir plus de projets";

  return (
    <section id="projects" className="projects-section">
      <div className="about-header">
        <span className="about-section-label">
          <span>
            02 — {isEnglish ? "SELECTED WORKS" : "PROJETS SÉLECTIONNÉS"}
          </span>
        </span>
        <h2 className="about-title">
          {isEnglish ? "PROJECT DEVELOP BY ME" : "PROJETS RÉALISÉS"}
        </h2>
      </div>

      {/* Filtres de catégorie */}
      <div
        style={{
          display: "flex",
          gap: "clamp(8px, 1.5vw, 12px)",
          padding: "clamp(16px, 2.5vw, 24px) clamp(12px, 2vw, 20px)",
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setShowAll(false);
            }}
            style={{
              background:
                selectedCategory === cat
                  ? "#6d28d9"
                  : "rgba(109, 40, 217, 0.1)",
              border: `1px solid ${
                selectedCategory === cat ? "#6d28d9" : "rgba(109, 40, 217, 0.3)"
              }`,
              color: selectedCategory === cat ? "white" : "#6d28d9",
              padding: "clamp(6px, 1vw, 10px) clamp(12px, 1.8vw, 18px)",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
              fontWeight: "700",
              letterSpacing: "0.5px",
              transition: "all 0.3s",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== cat) {
                e.currentTarget.style.background = "rgba(109, 40, 217, 0.2)";
                e.currentTarget.style.borderColor = "#6d28d9";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== cat) {
                e.currentTarget.style.background = "rgba(109, 40, 217, 0.1)";
                e.currentTarget.style.borderColor = "rgba(109, 40, 217, 0.3)";
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            style={{
              opacity: index >= itemsPerPage && !showAll ? 0 : 1,
              maxHeight: index >= itemsPerPage && !showAll ? "0px" : "4000px",
              overflow: "hidden",
              transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              pointerEvents:
                index >= itemsPerPage && !showAll ? "none" : "auto",
            }}
          >
            <ProjectItem
              project={project}
              isOpen={openId === project.id}
              toggleOpen={() => toggleProject(project.id)}
            />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div
          style={{
            padding: "60px clamp(20px, 5vw, 40px)",
            textAlign: "center",
            color: "#888",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
          }}
        >
          {isEnglish
            ? "No projects in this category"
            : "Aucun projet dans cette catégorie"}
        </div>
      )}

      {filteredProjects.length > itemsPerPage && (
        <div
          className="toggle-projects-button-container"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "clamp(20px, 4vw, 40px)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              background: "#6d28d9",
              border: "1px solid #6d28d9",
              color: "white",
              padding: "clamp(8px, 1.5vw, 12px) clamp(16px, 3vw, 32px)",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
              fontWeight: "700",
              letterSpacing: "0.5px",
              transition: "all 0.3s",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(109, 40, 217, 0.8)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#6d28d9";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {toggleButtonText}
          </button>
        </div>
      )}
    </section>
  );
}
