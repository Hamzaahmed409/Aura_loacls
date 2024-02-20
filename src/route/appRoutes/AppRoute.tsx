import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/authPages/Login";
import DashBoard from "@/pages/appPages/DashBoard";
import NewUserProfile from "@/pages/appPages/NewUserProfile";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<NewUserProfile />} />

      </Routes>
    </BrowserRouter>
  );
}