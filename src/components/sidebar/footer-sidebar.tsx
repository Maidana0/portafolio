import { Github, Instagram, Linkedin } from "lucide-react"
import { SidebarFooter } from "@/components/ui/sidebar"

const socialLinks = [
  { href: "https://github.com/Maidana0", icon: Github },
  { href: "https://www.linkedin.com/in/maidana-franco07", icon: Linkedin },
  { href: "https://instagram.com/franco_maidana07", icon: Instagram },
]

const FooterSidebar = () => {
  return (
    <SidebarFooter className="py-6 flex justify-evenly items-center gap-4 mt-auto">
      <div className="flex gap-4 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center">
        {socialLinks.map(({ href, icon: Icon }) => (
          <a key={href}
            aria-label={Icon.displayName}
            aria-labelledby={Icon.displayName}
            aria-describedby={Icon.displayName + " link"}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-110 p-2 text-muted-foreground
            hover:bg-accent/85 hover:text-accent-foreground rounded-full flex items-center justify-center"
          >
            <Icon className="size-5" />
          </a>
        ))}
      </div>
    </SidebarFooter>
  )
}

export default FooterSidebar