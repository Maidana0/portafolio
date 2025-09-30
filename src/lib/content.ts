import { Award, BookOpen, Code, Dumbbell, GraduationCap, Heart, Rocket } from "lucide-react";

export const aboutContent = {
  hero: {
    name: "Franco Maidana",
    origin: "Buenos Aires, Argentina",
    role: "Frontend Engineer specialized in Astro",
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
        icon: GraduationCap,
      },
      {
        degree: "Profesorado en Educación Física",
        institution: "Universidad Nacional de La Matanza (Almost Graduated)",
        icon: Dumbbell,
      },
    ],
    description: "My diverse academic background in both technology and physical education has equipped me with a unique blend of discipline, teamwork, and adaptability, which I apply to every project.",
  },
  achievements: {
    title: "Achievements & Certifications",
    items: [
      {
        icon: Award,
        title: "Open Source Contributor",
        description: "Actively contributing to the Astro documentation and various community projects.",
      },
      {
        icon: Rocket,
        title: "Project Launch: AstroVerse",
        description: "Successfully launched a personal project showcasing advanced Astro features.",
      },
      {
        icon: BookOpen,
        title: "Tech Talk: Modern Frontend",
        description: "Presented a talk on performance patterns at a local developer meetup.",
      },
      {
        icon: Code,
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
        icon: Heart,
        text: "I'm a huge fan of classic rock music.",
      },
      {
        icon: Dumbbell,
        text: "I enjoy calisthenics and staying active.",
      },
      {
        icon: BookOpen,
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