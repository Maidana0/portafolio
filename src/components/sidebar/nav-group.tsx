import { type LucideIcon } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Separator } from "@components/ui/separator"

type Item = {
  title: string
  url: string
  icon: LucideIcon
}
interface Props {
  items: Item[]
  header: string
}
const NavGroup = ({ items, header }: Props) => {
  const { currentPath } = useSidebar();
  const isActive = (path: string): boolean => {
    if (path === '/' && currentPath === '/') return true
    if (path !== '/' && currentPath.startsWith(path)) return true
    return false
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="group-data-[collapsible=icon]:opacity-0 transition-opacity group-data-[collapsible=icon]:mt-1.5">
        {header}
      </SidebarGroupLabel>
      {/* <Separator
        orientation="horizontal"
        className="my-5 mx-auto bg-border/20 transition-opacity group-data-[collapsible=icon]:opacity-100 opacity-0 group-data-[collapsible=icon]:block hidden"
      /> */}

      <SidebarMenu className="">
        {items.map((item) => {
          const itemIsActive = isActive(item.url)
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild
                tooltip={item.title}
                className="gap-3 text-md px-4 group-data-[collapsible=icon]:px-2  
                group-data-[collapsible=icon]:justify-center ease-linear 
                transition-[width,height,padding]"
                size={"lg"}
                isActive={itemIsActive}
              >
                <a
                  href={item.url}
                  onClick={(e) => {
                    if (itemIsActive) {
                      e.preventDefault()
                    }
                  }}
                  data-astro-prefetch="hover"
                  aria-current={itemIsActive ? 'page' : undefined}
                >
                  <item.icon />
                  <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default NavGroup