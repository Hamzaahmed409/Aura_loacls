import SideMenu from "@/components/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
    return (
        <div className="dashboard block  bg-white p-0 m-0">
            <div className="content-area-main  block w-full  relative">
                <div className="content flex bg-gray-50 py-6 px-4  overflow-y-auto ">
                    <SideMenu />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
