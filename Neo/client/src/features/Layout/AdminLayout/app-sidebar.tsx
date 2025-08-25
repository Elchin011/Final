import { ChartBarStacked, CircleQuestionMark, Cuboid, FileUser, FolderKanban,ListTree,Palette, Ruler, Settings, Stethoscope } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { title } from "process"
import { url } from "inspector"

const items = [
    {
        title: "Products",
        url: "/admin/products",
        icon: FolderKanban ,
    },
    {
        title: "Products Sizes",
        url: "/admin/product-sizes",
        icon: Ruler,
    },
    {
        title: "Product Categories",
        url: "/admin/product-categories",
        icon: ChartBarStacked,
    },
    {
        title: "Product Colors",
        url: "/admin/product-colors",
        icon: Palette,
    },
    {
        title: " Orders",
        url: "/admin/orders",
        icon: Settings,
    },
    {
        title: "Personals",
        url: "/admin/personals",
        icon: FileUser,
    },
    {
        title: "Personal Specialties",
        url: "/admin/personal-specialties",
        icon: Stethoscope,
    },
    {
        title: "Service Levels",
        url: "/admin/service-levels",
        icon: ListTree,
    },
    {
        title: "Blog",
        url:"/admin/blog",
        icon: Cuboid,
    },
    {
        title: "Questions",
        url: "/admin/questions",
        icon: CircleQuestionMark,
    },
    {
        title: "Appointments",
        url: "/admin/appointments",
        icon: Settings,
    },
    {
        title: "Coupons",
        url: "/admin/coupons",
        icon: Settings,
    },
    
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}