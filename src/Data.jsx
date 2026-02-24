import { Code, Briefcase, Award, Users, ChevronRight } from "lucide-react";

export const content = {
  fr: {
    role: "DÉVELOPPEUR CRÉATIF",
    nav: { cv: "CV" },
    contact: {
      title: "CONTACT",
      socialTitle: "Réseaux Sociaux",
    },
    about: {
      title: "À PROPOS DE MOI",
      intro:
        "Développeur web étudiant en BUT Métier du Multimédia et de L'Internet, je crée des sites et applications où le design rencontre la technique. Je navigue entre front-end et back-end, et face aux défis, je trouve toujours le moyen d'en faire des opportunités. Passionné par la transformation d'idées en projets concrets, j'apprends constamment de nouvelles technologies. Actuellement à la recherche d'opportunités pour propulser ma carrière de développeur web.",
      hello: "Salut moi c'est Kéni",
      stats: [
        {
          icon: <Code size={32} />,
          number: 900,
          label: "+ Heure de Développement",
        },
        {
          icon: <Briefcase size={32} />,
          number: 3,
          label: "Années d'Expérience",
        },
        {
          icon: <Award size={32} />,
          number: 15,
          label: "Technologies Maîtrisées",
        },
        { icon: <Users size={32} />, number: 2, label: "Clients Satisfaits" },
      ],
      skills: [
        "React",
        "Three.js",
        "Node.js",
        "UI/UX Design",
        "Motion Design",
        "WebGL",
      ],
      skillCategories: [
        {
          category: "Front-End",
          items: [
            "React",
            "Vue.js",
            "TypeScript",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
          ],
        },
        {
          category: "Back-End",
          items: [
            "Node.js",
            "PHP",
            "Python",
            "Symfony",
            "Laravel",
            "PostgreSQL",
            "MongoDB",
          ],
        },
        {
          category: "DevOps",
          items: ["Docker", "AWS", "Git", "Vite"],
        },
        {
          category: "CMS & Outils",
          items: ["WordPress", "Figma", "Adobe"],
        },
      ],
    },
    projects: [
      {
        id: 1,
        title: "Stage Lycée Léonard de Vinci",
        year: "2025",
        cats: ["Développement Web", "Graphisme"],
        desc: "Refonte Total du site web du lycée leonard de vinci en plus de la création d'une toute nouvelle identité visuelle de létablissement.",
        tech: ["Laravel", "PhpMyAdmin", "SSH", "HTML", "JS", "CSS"],
        website: "https://www.lyc-vinci-amboise.fr",
        media: [
          {
            type: "img",
            url: "/ChartGraphiqueVinci.png",
          },
        ],
      },
      {
        id: 2,
        title: "DanData",
        year: "2025",
        cats: ["Développement Web"],
        desc: "Conception d'un CMS innovant et intuitif pour l'analyse de données, avec un fort accent mis sur l'accessibilité.",
        tech: ["React", "Symphoni", "JS", "CSS", "GitHub"],
        github: "https://github.com/koldeus/DANDATA",
        media: [
          {
            type: "img",
            url: "/DanData.png",
          },
        ],
      },
      {
        id: 3,
        title: "Clip Blackened-Corvus",
        year: "2024",
        cats: ["Motage vidéo", "Montage Photo"],
        desc: "Tournage et montage d'un clip pour le groupe de metal Blackened Corvus pour le clip WMII, en plus d'un shooting photo. De plus en tant que responsable audiovisuel de mon groupe d'IUT, je me suis occupé de la communication et organisation des taches.",
        tech: ["Premiere Pro", "Photoshop", "After Effects", "Methode agile"],
        media: [
          {
            type: "Video",
            url: "https://youtu.be/Yyk3yKG4B1g",
          },
          {
            type: "img",
            url: "/Blackened-Corvus.png",
          },
        ],
      },
      {
        id: 4,
        title: "IA pour le jeu de Nim",
        year: "2023",
        cats: ["Intelligence Artificielle", "Développement"],
        desc: "Création d'une intelligence artificielle pour le jeu de Nim, permettant de jouer contre l'ordinateur avec une stratégie optimale.",
        tech: ["Python"],
        github: "https://github.com/koldeus/IA-Jeu-de-Nim",
        media: [],
      },
      {
        id: 5,
        title: "Algorithme de détection de contours d'une image",
        year: "2022",
        cats: ["Développement"],
        desc: "Création d'un algorithme de détection de contours pour une image, permettant d'identifier les bords et formes présents dans une image.",
        tech: ["Python"],
        github: "https://github.com/koldeus/Contour-Image",
        media: [
          {
            type: "img",
            url: "/papillon-fleur.jpg",
          },
          {
            type: "img",
            url: "/Papillon-Fleur.PNG",
          },
        ],
      },
    ],
  },
  en: {
    role: "CREATIVE DEVELOPER",
    nav: { cv: "RESUME" },
    contact: {
      title: "CONTACT",
      socialTitle: "Social Media",
    },
    about: {
      title: "ABOUT ME",
      intro:
        "As a web developer pursuing a bachelor's degree in multimedia and the internet, I create applications and websites where functionality and design combine. I alternate between developing for the front end and the back end, and when life drops me lemons, I always find a way to make lemonade out of it. I'm all about breathing life into ideas while soaking up new technologies on the way. Currently on the hunt for opportunities to push my web development game further.",
      hello: "Hi I'm Kéni",
      stats: [
        { icon: <Code size={32} />, number: 900, label: "+ Hours of coding" },
        {
          icon: <Briefcase size={32} />,
          number: 3,
          label: "Years of Experience",
        },
        {
          icon: <Award size={32} />,
          number: 15,
          label: "Technologies Mastered",
        },
        { icon: <Users size={32} />, number: 2, label: "Satisfied Clients" },
      ],
      skills: [
        "React",
        "Three.js",
        "Node.js",
        "UI/UX Design",
        "Motion Design",
        "WebGL",
      ],
      skillCategories: [
        {
          category: "Frontend",
          items: [
            "React",
            "Vue.js",
            "TypeScript",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
          ],
        },
        {
          category: "Backend",
          items: [
            "Node.js",
            "PHP",
            "Python",
            "Symfony",
            "Laravel",
            "PostgreSQL",
            "MongoDB",
          ],
        },
        {
          category: "DevOps",
          items: ["Docker", "AWS", "Git", "Vite"],
        },
        {
          category: "CMS & Tools",
          items: ["WordPress", "Figma", "Adobe"],
        },
      ],
    },
    projects: [
      {
        id: 1,
        title: "DanData",
        year: "2025",
        cats: ["Web Development"],
        desc: "Designing innovative and intuitive CMS for data analysis with a strong focus on accessibility.",
        tech: ["React", "Symphoni", "JS", "CSS", "GitHub"],
        github: "https://github.com/koldeus/DANDATA",
        media: [
          {
            type: "img",
            url: "/DanData.png",
          },
        ],
      },
      {
        id: 2,
        title: "Léonard de Vinci HighSchool Internship",
        year: "2025",
        cats: ["Web Development", "Graphisme"],
        desc: "Revamping of the Léonard de Vinci high school website, along with the creation of a brand new visual identity for the institution.",
        tech: ["Laravel", "PhpMyAdmin", "SSH", "HTML", "JS", "CSS"],
        website: "https://www.lyc-vinci-amboise.fr",
        media: [
          {
            type: "img",
            url: "/ChartGraphiqueVinci.png",
          },
        ],
      },
      {
        id: 3,
        title: "Blackened-Corvus Clip",
        year: "2024",
        cats: ["Video Editing", "Photo Montage"],
        desc: 'Directing and editing the "WMII" music video and photoshoot for the metal band Blackened Corvus while managing communication and task organization as my university group\'s Audiovisual Leader.',
        tech: ["Premiere Pro", "Photoshop", "After Effects", "Agile method"],
        media: [
          {
            type: "Video",
            url: "https://youtu.be/Yyk3yKG4B1g",
          },
          {
            type: "img",
            url: "/Blackened-Corvus.png",
          },
        ],
      },
      {
        id: 4,
        title: "Building an AI for the Nim Game",
        year: "2024",
        cats: ["Artificial Intelligence", "Development"],
        desc: "Building an artificial intelligence for the Nim game, allowing to play against the computer with an optimal strategy.",
        tech: ["Python"],
        media: [],
      },
      {
        id: 5,
        title: "Designing an Image Edge Detection Algorithm",
        year: "2024",
        cats: ["Development"],
        desc: "Designing an edge detection algorithm for an image, allowing to identify the edges and shapes present in an image.",
        tech: ["Python"],
        media: [
          {
            type: "img",
            url: "/papillon-fleur.jpg",
          },
          {
            type: "img",
            url: "/Papillon-Fleur.PNG",
          },
        ],
      },
    ],
  },
};
