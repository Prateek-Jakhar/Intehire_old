import React from "react";
import Applications from "./Applications";
import LeftHeader from "./LeftHeader";
import "./../css/Opportunity.css";
import { useNavigate } from "react-router-dom";

const Opportunity = () => {
  let navigate = useNavigate();
  if (localStorage.getItem('isLoggedIn') !== 'true'){
    navigate("/login", { replace: true });
  }
  return (
    <div className="opportunityMain">
      <div style={{ width: "228px" }}>
        <LeftHeader />
      </div>
      <div className="opportunityMainRight">
        <Applications />
      </div>
    </div>
  );
};

export default Opportunity;
