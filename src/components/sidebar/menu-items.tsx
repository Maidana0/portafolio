import { Home, User, FolderOpen, FileText, Mail } from "lucide-react"

const portfolioNavItems = [
  {
    title: "Inicio",
    url: "/",
    icon: Home,
  },
  {
    title: "Sobre mí",
    url: "/about",
    icon: User,
  },
  {
    title: "Proyectos",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "CV",
    url: "/resume",
    icon: FileText,
  },
  {
    title: "Contacto",
    url: "/contact",
    icon: Mail,
  },
]

const menuItems = {
  navigation: portfolioNavItems,
}


export default menuItems;