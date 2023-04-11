import React from "react";
import "../../styles/scss/MainContent.scss";
import Maps from "../Maps";

const MainContentPresenter = (props) => {
  return (
    <div className="MainContent">
      <Maps/>
    </div>
  );
}

export default MainContentPresenter;
