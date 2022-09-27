import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

import "./fcolumn.style.css";

function FColumnLayout() {
  return (
    <div className="FColumnLayout">
      <div
        style={{
          borderBottom: "var(--border-width) solid var(--border-color);",
          fontWeight: "500",
          fontSize: ".8rem",
          width: "100%",
        }}
      >
        <p style={{ paddingLeft: "2rem", color: "#646464" }}>Project Name</p>
      </div>
    </div>
  );
}

export default FColumnLayout;
