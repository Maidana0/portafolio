
import ContentSidebar from "@/components/sidebar/content-sidebar"
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import FooterSidebar from "@components/sidebar/footer-sidebar"
import { Code2 } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
    >
      <SidebarHeader className="p-4 group-data-[collapsible=icon]:px-2 ease-linear transition-[width,height,padding]">
        <SidebarMenu>
          <SidebarMenuItem className="gap-3 flex items-center justify-start">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Code2 className="size-5" />
            </div>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="text-lg font-semibold">Franco Maidana</span>
              <span className="text-xs text-muted-foreground">Web Developer</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <ContentSidebar />
      <SidebarRail />

      <FooterSidebar />
    </Sidebar>
  )
}
