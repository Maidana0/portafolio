import { SidebarContent } from "@/components/ui/sidebar"
import NavGroup from "./nav-group"
import menuItems from "./menu-items"

const ContentSidebar = () => {
  return (
    <SidebarContent className="gap-2">
      <NavGroup items={menuItems.navigation} header="Navegación" />
    </SidebarContent>
  )
}

export default ContentSidebar
