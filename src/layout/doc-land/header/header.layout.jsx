import React from "react";
import HeaderLogo from "../../../components/logo/header-logo";
import "./header.style.css";

function DocLandHeaderLayout() {
  return (
    <div className="DocLandHeaderLayout">
      <div className="HeaderLogoContainer">
        <HeaderLogo />
      </div>
    </div>
  );
}

export default DocLandHeaderLayout;
