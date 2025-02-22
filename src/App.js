import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import GSWS from "../src/dashboards/GSWS";
import MedicalDepartment from "../src/dashboards/MedicalDepartment";
import ReSurvey from "../src/dashboards/ReSurvey";
import Contact from "../src/contact/Contact";
import Login from "./login/Login";
import BookYourSlot from "././slotbooking/BookYourSlot";
import Register from "./register/Register";
import PendingAppointments from "./pendingAppointments/PendingAppointments";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/gsws" element={<GSWS />} />
        <Route path="/resurvey" element={<ReSurvey />} />
        <Route path="/medicaldepartment" element={<MedicalDepartment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookyourslot" element={<BookYourSlot />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pending" element={<PendingAppointments />} />
      </Routes>
    </div>
  );
}

export default App;
