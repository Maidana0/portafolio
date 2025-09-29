import { type FC } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Self-contained icon mapping to avoid server-side processing issues.
import {
  FaReact, FaNodeJs, FaDatabase, FaFigma, FaSass, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiNextdotjs, SiVite, SiTailwindcss, SiMui, SiExpress, SiNestjs,
  SiSqlite, SiSequelize, SiPrisma, SiMongodb, SiStyledcomponents,
  SiPostman, SiShadcnui
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { VscTypeHierarchy } from "react-icons/vsc";
import { Bolt } from "lucide-react";
import type { SkillIcon } from '@/pages/resume.astro';

const ICON_MAP: Record<SkillIcon, typeof FaReact> = {
  'react': FaReact,
  'nextjs': SiNextdotjs,
  'vite': SiVite,
  'tailwind': SiTailwindcss,
  'material-ui': SiMui,
  'shadcn': SiShadcnui,
  'nodejs': FaNodeJs,
  'express': SiExpress,
  'nestjs': SiNestjs,
  'sql': FaDatabase,
  'sqlite': SiSqlite,
  'sequelize': SiSequelize,
  'prisma': SiPrisma,
  'mongodb': SiMongodb,
  'figma': FaFigma,
  'styled-components': SiStyledcomponents,
  'sass': FaSass,
  'git': FaGitAlt,
  'github': FaGithub,
  'postman': SiPostman,
  'thunderclient': Bolt,
  'scrum': DiScrum,
  'mvc': VscTypeHierarchy,
};

interface SkillPillProps {
  name: string;
  icon: SkillIcon;
  colorClasses: string;
}

const SkillPill: FC<SkillPillProps> = ({ name, icon, colorClasses }) => {
  const IconComponent = ICON_MAP[icon];
  const baseClasses = "flex items-center justify-center rounded-full p-2 text-xs font-semibold leading-5 transition-colors duration-200";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={cn(baseClasses, colorClasses)}>
          {IconComponent && <IconComponent className="size-5" />}
          <span className="sr-only">{name}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default SkillPill;