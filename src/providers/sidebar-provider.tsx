import { SidebarProvider as Provider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import type { ReactNode } from "react";


interface Props {
  children: ReactNode;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
  currentPath: string;
}


const SidebarProvider = ({ children, headerSlot, footerSlot, currentPath }: Props) => {
  return (
    <Provider
      currentPath={currentPath}
      style={{
        "--sidebar-width-icon": "3rem",
        "--sidebar-width": "calc(var(--spacing) * 72)",
      } as React.CSSProperties}>
      <AppSidebar />

      <SidebarInset >
        <header className="flex h-19 shrink-0 align-middle content-center items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 px-4 justify-between sticky top-0">
          <SidebarTrigger className="-ml-1" />
          {/* <p className="text-lg font-semibold block md:hidden rounded-md bg-primary text-primary-foreground px-2 py-1">
            Franco Maidana
          </p> */}
          {headerSlot}
        </header>

        {children}

        {footerSlot}
      </SidebarInset>

    </Provider >
  )
}

export default SidebarProvider;
