import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Chapter, Course, UserProgress } from "@prisma/client";
import { Menu } from "lucide-react";
import CourseSidebar from "./CourseSidebar";

interface CourseMobileNavbarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null
        })[]
    };
    progressCount: number;
}

const CourseMobileNavbar = ({
    course,
    progressCount
}: CourseMobileNavbarProps) => {
  return (
    <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75" >
            <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white w-72" >
            <CourseSidebar 
                course={course} 
                progressCount={progressCount}
            />
        </SheetContent>
    </Sheet>
  )
}

export default CourseMobileNavbar