// Color palette definition for skill categories
const SKILL_COLORS: Record<string, string> = {
  Frontend: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  Backend: "bg-green-100 text-green-800 hover:bg-green-200",
  "Bases de Datos": "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  "Databases": "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  Diseño: "bg-purple-100 text-purple-800 hover:bg-purple-200",
  Design: "bg-purple-100 text-purple-800 hover:bg-purple-200",
  Metodologías: "bg-pink-100 text-pink-800 hover:bg-pink-200",
  Methodologies: "bg-pink-100 text-pink-800 hover:bg-pink-200",
  Herramientas: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  Tools: "bg-gray-100 text-gray-800 hover:bg-gray-200",
};

const resumeContentES = {
  personalInfo: {
    name: "Franco Gabriel Maidana",
    role: "Desarrollador Full Stack",
    location: "La Matanza, Buenos Aires, Argentina",
    linkedin: "https://www.linkedin.com/in/maidana-franco07",
    github: "https://github.com/Maidana0",
    instagram: "https://www.instagram.com/franco_maidana07/",
  },
  professionalProfile: {
    title: "Perfil Profesional",
    paragraphs: [
      "Estudiante de la Tecnicatura en Desarrollo Web (UNLaM). Experiencia en proyectos académicos, colaborativos y personales utilizando Next.js, React, TypeScript, Node.js, Express, Prisma/Sequelize y TailwindCSS.",
      "Participé en equipos multidisciplinares bajo metodología SCRUM, aportando en el diseño, desarrollo y documentación de aplicaciones web. Busco incorporarme a un equipo que permita seguir creciendo profesionalmente y aportar mis conocimientos en el desarrollo de software integral.",
    ]
  },
  education: {
    title: "Educación",
    items: [
      {
        degree: "Tecnicatura En Web",
        institution: "Universidad Nacional De La Matanza",
        date: "2024 - Presente",
        details: "Cantidad de materias aprobadas: 7/25",
      },
      {
        degree: "Desarrollador Web Full Stack",
        institution: "Coderhouse",
        date: "2022 - 2024",
        details:
          "Desarrollo Web, JavaScript, React. Backend con JavaScript y TypeScript (Node.js / Express). Python / Django.",
      },
      {
        degree: "Bachiller En Economía Y Administración",
        institution: "Inst. Santa Teresa De J.",
        date: "2013 - 2018",
      },
    ]
  },
  experience: {
    title: "Experiencia",
    // "Experiencia en Equipo y Proyectos Relevantes"
    items: [
      {
        role: "Cotzia: Gestión de materia prima y costos",
        company: "Organización Simulada - Foo Talent Group",
        date: "2025",
        description: [
          "Gestión de materia prima y costos de laboratorio. (Next.js 15, TypeScript, Tailwind, Shadcn, Zustand, RHF)",
        ],
      },
      {
        role: "Proyectos Colaborativos",
        company: "Organización Simulada – No Country",
        date: "2024",
        description: [
          "<strong>PopcornPass:</strong> Plataforma de venta de entradas de cine. (Next.js, TypeScript, Zustand, RHF, Material UI, Figma)",
          "<strong>CashFly:</strong> App de préstamos e inversiones. (Vite, CSS, Figma)",
          "<strong>GoEvent:</strong> API de gestión de eventos. (Node.js, Express, Sequelize, middlewares)",
          "<strong>AdoPet:</strong> App para adopción de mascotas. (Next.js, TS, Tailwind)",
        ],
      },
      {
        role: "MaidaVision (Proyecto Personal)",
        company: "En progreso",
        date: "Actual",
        description: [
          "App para gestión de películas/series con APIs externas (TheMovieDB, YouTube). Autenticación con NextAuth (Google/GitHub) y base de datos con Prisma + SQLite. Validaciones con Zod + RHF, manejo de estados globales con Zustand. Interfaz desarrollada en Tailwind + Shadcn.",
        ],
      },
    ]
  },
  skills: {
    title: "Habilidades Técnicas",
    items: {
      Frontend: [
        { name: "Next.js", icon: "nextjs" },
        { name: "React", icon: "react" },
        { name: "Vite", icon: "vite" },
        { name: "TailwindCSS", icon: "tailwind" },
        { name: "Shadcn/UI", icon: "shadcn" },
        { name: "Material UI", icon: "material-ui" },
      ],
      Backend: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "NestJS (básico)", icon: "nestjs" },
      ],
      "Bases de Datos": [
        { name: "SQL", icon: "sql" },
        { name: "SQLite", icon: "sqlite" },
        { name: "Sequelize", icon: "sequelize" },
        { name: "Prisma", icon: "prisma" },
        { name: "MongoDB", icon: "mongodb" },
      ],
      Diseño: [
        { name: "Figma", icon: "figma" },
        { name: "Styled Components", icon: "styled-components" },
        { name: "Sass", icon: "sass" },
      ],
      Metodologías: [
        { name: "SCRUM", icon: "scrum" },
        { name: "MVC", icon: "mvc" },
      ],
      Herramientas: [
        { name: "Git/GitHub", icon: "git" },
        { name: "Postman", icon: "postman" },
        { name: "ThunderClient", icon: "thunderclient" },
      ],
    }
  },
  softSkills: {
    title: "Habilidades Blandas",
    items: [
      "Trabajo en equipo en entornos ágiles",
      "Documentación clara y seguimiento de tareas",
      "Adaptación rápida a nuevas tecnologías",
      "Orientación a buenas prácticas de código",
    ]
  },
};

const resumeContentEN = {
  personalInfo: {
    name: "Franco Gabriel Maidana",
    role: "Full Stack Developer",
    location: "La Matanza, Buenos Aires, Argentina",
    linkedin: "https://www.linkedin.com/in/maidana-franco07",
    github: "https://github.com/Maidana0",
    instagram: "https://www.instagram.com/franco_maidana07/",
  },
  professionalProfile: {
    title: "Professional Profile",
    paragraphs: [
      "Web Development student at Universidad Nacional de La Matanza (UNLaM). Experience in academic, collaborative, and personal projects using Next.js, React, TypeScript, Node.js, Express, Prisma/Sequelize, and TailwindCSS.",
      "Participated in multidisciplinary teams using SCRUM methodology, contributing to the design, development, and documentation of web applications. Looking to join a team that allows continued professional growth and contribute my knowledge in comprehensive software development.",
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Web Development Technician",
        institution: "Universidad Nacional De La Matanza",
        date: "2024 - Present",
        details: "Subjects completed: 7/25",
      },
      {
        degree: "Full Stack Web Developer",
        institution: "Coderhouse",
        date: "2022 - 2024",
        details:
          "Web Development, JavaScript, React. Backend with JavaScript and TypeScript (Node.js / Express). Python / Django.",
      },
      {
        degree: "Bachelor in Economics and Administration",
        institution: "Inst. Santa Teresa De J.",
        date: "2013 - 2018",
      },
    ]
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Cotzia: Raw Material and Cost Management",
        company: "Simulated Organization - Foo Talent Group",
        date: "2025",
        description: [
          "Laboratory raw material and cost management. (Next.js 15, TypeScript, Tailwind, Shadcn, Zustand, RHF)",
        ],
      },
      {
        role: "Collaborative Projects",
        company: "Simulated Organization – No Country",
        date: "2024",
        description: [
          "<strong>PopcornPass:</strong> Cinema ticket sales platform. (Next.js, TypeScript, Zustand, RHF, Material UI, Figma)",
          "<strong>CashFly:</strong> Loans and investments app. (Vite, CSS, Figma)",
          "<strong>GoEvent:</strong> Event management API. (Node.js, Express, Sequelize, middlewares)",
          "<strong>AdoPet:</strong> Pet adoption app. (Next.js, TS, Tailwind)",
        ],
      },
      {
        role: "MaidaVision (Personal Project)",
        company: "In Progress",
        date: "Current",
        description: [
          "Movie/series management app with external APIs (TheMovieDB, YouTube). Authentication with NextAuth (Google/GitHub) and database with Prisma + SQLite. Validations with Zod + RHF, global state management with Zustand. Interface developed with Tailwind + Shadcn.",
        ],
      },
    ]
  },
  skills: {
    title: "Technical Skills",
    items: {
      Frontend: [
        { name: "Next.js", icon: "nextjs" },
        { name: "React", icon: "react" },
        { name: "Vite", icon: "vite" },
        { name: "TailwindCSS", icon: "tailwind" },
        { name: "Shadcn/UI", icon: "shadcn" },
        { name: "Material UI", icon: "material-ui" },
      ],
      Backend: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "NestJS (basic)", icon: "nestjs" },
      ],
      Databases: [
        { name: "SQL", icon: "sql" },
        { name: "SQLite", icon: "sqlite" },
        { name: "Sequelize", icon: "sequelize" },
        { name: "Prisma", icon: "prisma" },
        { name: "MongoDB", icon: "mongodb" },
      ],
      Design: [
        { name: "Figma", icon: "figma" },
        { name: "Styled Components", icon: "styled-components" },
        { name: "Sass", icon: "sass" },
      ],
      Methodologies: [
        { name: "SCRUM", icon: "scrum" },
        { name: "MVC", icon: "mvc" },
      ],
      Tools: [
        { name: "Git/GitHub", icon: "git" },
        { name: "Postman", icon: "postman" },
        { name: "ThunderClient", icon: "thunderclient" },
      ],
    }
  },
  softSkills: {
    title: "Soft Skills",
    items: [
      "Teamwork in agile environments",
      "Clear documentation and task tracking",
      "Quick adaptation to new technologies",
      "Focus on code best practices",
    ]
  },
};

// Export main content (Spanish by default, following the same pattern as about)
export const resumeContent = resumeContentES;
export { resumeContentEN, resumeContentES, SKILL_COLORS };