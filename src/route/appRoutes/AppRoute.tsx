import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/appPages/Dashboard";
import DashboardLayout from "@/pages/appPages/DashboardLayout";
import AllDaashboard from "@/pages/appPages/AllDaashboard";
import DashBoardRewamp from "@/pages/appPages/DashBoardRewamp";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Dashboard />} /> */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<AllDaashboard />} />
      <Route path="/dashboard/rewamp" element={<DashBoardRewamp />} />
          {/* <Route index element={<Program />} />
            <Route path="/dashboard/:locationId/setting" element={<Setting />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}