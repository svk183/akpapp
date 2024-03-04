import React from "react";
import Header from "../header/Header";
import Navbar from "../Navbar";

const MedicalDepartment = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <iframe
          src="https://docs.google.com/spreadsheets/d/10WA7yWH67MbqBHI64JuK5li1URLO7vbjSKHdVyk0JOg/edit?usp=sharing "
          title="Medical Department"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default MedicalDepartment;
