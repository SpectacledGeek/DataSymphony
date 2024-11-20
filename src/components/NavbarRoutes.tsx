"use client"

import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import SearchInput from "./SearchInput";

const NavbarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/courses");
    const isSearchPage = pathname === "/search";

    return ( 
        <>
            {isSearchPage && (
                <div className="hidden md:block" >
                    <SearchInput />
                </div>
            )}
            <div className="flex gap-x-2 ml-auto" >
                {isTeacherPage || isPlayerPage ? (
                    <Link href="/" >
                        <Button size="sm" variant="ghost" >
                            <LogOut className="h-4 w-4 mr-2" />
                            <p>Exit</p>
                        </Button>
                    </Link>
                ) : (
                    <Link href="/teacher/courses" >
                        <Button size="sm" variant="ghost" >
                            Teacher Mode
                        </Button>
                    </Link>
                )}
                <UserButton />
            </div>
        </>
    );
}

export default NavbarRoutes;