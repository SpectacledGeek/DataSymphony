"use client"

import { Compass, Layout } from "lucide-react"
import SidebarItem from "./SidebarItem"

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

export const SidebarRoutes = () => {
    const routes = guestRoutes

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