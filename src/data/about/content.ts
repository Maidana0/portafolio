import { Award, BookOpen, Code, Dumbbell, GraduationCap, Heart, Rocket } from "lucide-astro";

const aboutContentEN = {
  hero: {
    name: "Franco Maidana",
    origin: "Buenos Aires, Argentina",
    role: "Web Developer & Tech Enthusiast",
    tagline: "Transforming ideas into scalable, fast, and human-centered web experiences.",
  },
  story: {
    title: "My Journey Into Code",
    paragraphs: [
      "From a young age, I was fascinated by how things worked, which led me to programming. It started as a hobby, a way to channel my curiosity, but I quickly realized it was my calling. I knew I wanted to build things for the web.",
      "Based in Buenos Aires, I've been balancing my formal education with continuous self-learning and professional growth, a journey that has taught me the value of discipline and passion in achieving my goals.",
    ],
  },
  academics: {
    title: "Academic Background & Continuous Learning",
    education: [
      {
        degree: "Tecnicatura en Desarrollo Web",
        institution: "Universidad Nacional de La Matanza",
        Icon: GraduationCap,
      },
      {
        degree: "Profesorado en Educación Física",
        institution: "Universidad Nacional de La Matanza (Almost Graduated)",
        Icon: Dumbbell,
      },
    ],
    description: "My diverse academic background in both technology and physical education has equipped me with a unique blend of discipline, teamwork, and adaptability, which I apply to every project.",
  },
  achievements: {
    title: "Achievements & Certifications",
    items: [
      {
        Icon: Award,
        title: "Open Source Contributor",
        description: "Actively contributing to the Astro documentation and various community projects.",
      },
      {
        Icon: Rocket,
        title: "Project Launch: AstroVerse",
        description: "Successfully launched a personal project showcasing advanced Astro features.",
      },
      {
        Icon: BookOpen,
        title: "Tech Talk: Modern Frontend",
        description: "Presented a talk on performance patterns at a local developer meetup.",
      },
      {
        Icon: Code,
        title: "Advanced Astro Certification",
        description: "Completed an intensive course on advanced Astro development patterns.",
      },
    ],
  },
  philosophy: {
    title: "Values & Philosophy",
    values: [
      {
        title: "Discipline Meets Code",
        description: "The resilience and discipline from sports, applied to building robust and reliable software.",
      },
      {
        title: "Human-Centered Design",
        description: "Technology should be accessible and intuitive for everyone, regardless of their abilities.",
      },
      {
        title: "Teamwork and Collaboration",
        description: "Great things are built together. I thrive in collaborative environments where ideas flow freely.",
      },
    ],
  },
  funFacts: {
    title: "When I'm Not Coding...",
    facts: [
      {
        Icon: Heart,
        text: "I'm a huge fan of classic rock music.",
      },
      {
        Icon: Dumbbell,
        text: "I enjoy calisthenics and staying active.",
      },
      {
        Icon: BookOpen,
        text: "I love reading about history and philosophy.",
      },
    ],
  },
  cta: {
    title: "Let's Build Something Great Together",
    description: "Looking for a dedicated developer with a unique mix of technical skills and human values? I'd love to hear about your project.",
    buttonText: "Get in Touch",
  },
};


const aboutContentES = {
  hero: {
    name: "Franco Maidana",
    origin: "Buenos Aires, Argentina",
    role: "Desarrollador Web & Entusiasta de la Tecnología",
    tagline: "Transformando ideas en experiencias web escalables, rápidas y centradas en las personas.",
  },
  story: {
    title: "Mi Camino hacia el Código",
    paragraphs: [
      "Desde pequeño, me fascinaba entender cómo funcionaban las cosas, lo que me llevó a la programación. Comenzó como un pasatiempo, una forma de canalizar mi curiosidad, pero rápidamente me di cuenta de que era mi vocación. Sabía que quería construir cosas para la web.",
      "Viviendo en Buenos Aires, he estado equilibrando mi educación formal con el aprendizaje continuo y el crecimiento profesional, un viaje que me ha enseñado el valor de la disciplina y la pasión para alcanzar mis objetivos.",
    ],
  },
  academics: {
    title: "Formación Académica & Aprendizaje Continuo",
    education: [
      {
        degree: "Tecnicatura en Desarrollo Web",
        institution: "Universidad Nacional de La Matanza",
        Icon: GraduationCap,
      },
      {
        degree: "Profesorado en Educación Física",
        institution: "Universidad Nacional de La Matanza (Casi Graduado)",
        Icon: Dumbbell,
      },
    ],
    description: "Mi formación académica diversa en tecnología y educación física me ha dotado de una combinación única de disciplina, trabajo en equipo y adaptabilidad, que aplico en cada proyecto.",
  },
  achievements: {
    title: "Logros & Certificaciones",
    items: [
      {
        Icon: Award,
        title: "Contribuidor Open Source",
        description: "Contribuyendo activamente a la documentación de Astro y varios proyectos de la comunidad.",
      },
      {
        Icon: Rocket,
        title: "Lanzamiento de Proyecto: AstroVerse",
        description: "Lanzé exitosamente un proyecto personal que muestra características avanzadas de Astro.",
      },
      {
        Icon: BookOpen,
        title: "Charla Técnica: Frontend Moderno",
        description: "Presenté una charla sobre patrones de rendimiento en un meetup local de desarrolladores.",
      },
      {
        Icon: Code,
        title: "Certificación Avanzada en Astro",
        description: "Completé un curso intensivo sobre patrones avanzados de desarrollo con Astro.",
      },
    ],
  },
  philosophy: {
    title: "Valores & Filosofía",
    values: [
      {
        title: "Disciplina se Encuentra con Código",
        description: "La resistencia y disciplina del deporte, aplicadas para construir software robusto y confiable.",
      },
      {
        title: "Diseño Centrado en las Personas",
        description: "La tecnología debe ser accesible e intuitiva para todos, independientemente de sus capacidades.",
      },
      {
        title: "Trabajo en Equipo y Colaboración",
        description: "Las grandes cosas se construyen juntos. Prospero en entornos colaborativos donde las ideas fluyen libremente.",
      },
    ],
  },
  funFacts: {
    title: "Cuando No Estoy Programando...",
    facts: [
      {
        Icon: Heart,
        text: "Soy un gran fanático de la música rock clásica.",
      },
      {
        Icon: Dumbbell,
        text: "Disfruto de la calistenia y mantenerme activo.",
      },
      {
        Icon: BookOpen,
        text: "Me encanta leer sobre historia y filosofía.",
      },
    ],
  },
  cta: {
    title: "Construyamos Algo Genial Juntos",
    description: "¿Buscas un desarrollador dedicado con una mezcla única de habilidades técnicas y valores humanos? Me encantaría conocer tu proyecto.",
    buttonText: "Ponte en Contacto",
  },
}


export const aboutContent = aboutContentES;