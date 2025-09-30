import { resumeContent } from "@data/resume/content";

export const resumeNavigation = [
  { name: resumeContent.personalInfo.name, href: "#header" },
  { name: resumeContent.professionalProfile.title, href: "#profile" },
  { name: resumeContent.experience.title, href: "#experience" },
  { name: resumeContent.education.title, href: "#education" },
  { name: resumeContent.skills.title, href: "#skills" },
  { name: resumeContent.softSkills.title, href: "#soft-skills" },
];