"use client"

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon;
    lable: string;
    href: string;
}

const SidebarItem = ({
    icon :Icon,
    lable,
    href
}: SidebarItemProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive = 
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname.startsWith(`${href}/`)

    const onClick = () => {
        router.push(href)
    }

    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-medium pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
                isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon 
                    size={22} 
                    className={cn(
                        "text-slate-500",
                        isActive && "text-sky-700"
                    )}
                />
                {lable}
            </div>
            <div
                className={cn(
                    "ml-auto opacity-0 border-2 border-sky-700 h-full transistion-all",
                    isActive && "opacity-100"
                )}
            />
        </button>
    )
}

export default SidebarItem