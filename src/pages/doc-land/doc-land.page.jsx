import React from "react";
import DocLandHeaderLayout from "../../layout/doc-land/header/header.layout";
import FColumnLayout from "../../layout/doc-land/fcolumn/fcolumn.layout";
import SColumnLayout from "../../layout/doc-land/scolumn/scolumn.layout";
import TColumnLayout from "../../layout/doc-land/tcolumn/tcolumn.layout";
import "./doc-land.style.css";

function DocLandPage() {
  return (
    <React.Fragment>
      <DocLandHeaderLayout />
      <div className="DocLandContainer">
        <FColumnLayout />
        <SColumnLayout />
        <TColumnLayout />
      </div>
    </React.Fragment>
  );
}

export default DocLandPage;
