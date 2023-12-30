import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/authPages/Login";
import Landing from "@/pages/authPages/Landing";
import CompanyDetails from "@/pages/authPages/CompanyDetails";
import BankDetails from "@/pages/authPages/BankDetails";
import RepresentativeDetails from "@/pages/authPages/RepresentativeDetails";
import TermsAndConditions from "@/pages/authPages/Terms&Condition";
import Success from "@/pages/authPages/Success";


export default function AuthRouter() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CompanyDetails" element={<CompanyDetails />} />
        <Route path="/company-bank-details" element={<BankDetails />} />
        <Route path="/representative-details" element={<RepresentativeDetails />} />
        <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
        <Route path="/success" element={<Success />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}
