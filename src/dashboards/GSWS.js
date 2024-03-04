import React from "react";
import Header from "../header/Header";
import Navbar from "../Navbar";

const GSWS = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <iframe
          src="https://app.powerbi.com/view?r=eyJrIjoiZjY0ODlhYzYtOTgxYS00MGQ5LThkY2ItYTM2MmU1ZjZiYTdhIiwidCI6IjUzOTQ5NTkzLTBlOTQtNDAyZS05NmRmLTkwYTMyNjY0NWUwYiJ9"
          title="GSWS"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default GSWS;
