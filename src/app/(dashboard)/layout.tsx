import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

import { Toaster } from 'sonner'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div className="h-full">
            <div className="h-[80px] md:ml-56 w-full md:w-[calc(100%-224px)] fixed inset-y-0 z-50" >
                <Navbar />
            </div>
            <div className="h-full w-56 hidden md:flex flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <div className="md:pl-56 pt-[80px] h-full" >
                <Toaster />
                {children}
            </div>
        </div>
    )
}
 
export default DashboardLayout;