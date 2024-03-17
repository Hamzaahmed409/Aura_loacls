import Nav from "@/components/Nav/Nav";
import SideMenu from "@/components/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
    return (
        <div className="dashboard block h-full bg-white p-0 m-0">
            <div className="content-area-main  block w-full h-[100svh] relative">
                {/* <div className="header-main bg-white w-full   border-gray-200">
                    <Nav /> 
                </div> */}
                <div className="content flex bg-gray-50 py-6 px-4 h-[calc(100svh)] overflow-y-auto ">
                <SideMenu />
                   <Outlet />
                </div>
                {/* footer */}
            </div>
        </div>
    );
}
