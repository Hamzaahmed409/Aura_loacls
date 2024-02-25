import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
    return (
        <div className="dashboard block h-full p-0 m-0">
            <div className="content-area-main  block w-full h-[100svh] relative">
                <div className="header-main bg-white w-full border-b border-gray-200">
                    <Header /> 
                </div>
                <div className="content flex bg-gray-50 py-6 px-4 h-[calc(100svh-53px)] overflow-y-auto ">
                <SideMenu />
                   <Outlet />
                </div>
            </div>
        </div>
    );
}
