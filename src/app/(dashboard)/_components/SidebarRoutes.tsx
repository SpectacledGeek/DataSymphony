"use client"

import { BarChart, Compass, Layout, List } from "lucide-react"
import SidebarItem from "./SidebarItem"
import { usePathname } from "next/navigation"

const guestRoutes = [
    {
        icon: Layout,
        name: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        name: "Browse",
        href: "/search",
    }
]

const teacherRoutes = [
    {
        icon: List,
        name: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        name: "Analytics",
        href: "/teacher/analytics",
    }
]

export const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

    return (
        <div className="flex flex-col w-full h-full" >
            {routes.map((route, index) => (
                <SidebarItem
                    key={index}
                    icon={route.icon}
                    lable={route.name}
                    href={route.href}
                />
            ))}
        </div>
    )
}