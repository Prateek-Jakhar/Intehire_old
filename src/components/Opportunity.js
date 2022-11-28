import React, { useState, useEffect } from "react";
import Applications from "./Applications";
import LeftHeader from "./LeftHeader";
import "./../css/Opportunity.css";
import { useNavigate } from "react-router-dom";
import NewOpportunityCard from "./NewOpportunityCard";
import ProfileButton from "./ProfileButton";
import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";

const Opportunity = () => {
  const [dataApplication, setDataApplication] = useState([]);
  let navigate = useNavigate();
  if (localStorage.getItem("isLoggedIn") !== "true") {
    navigate("/login", { replace: true });
  }

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "opportunities"));
    let data_list = [];
    querySnapshot.forEach((doc) => {
      data_list.push(doc.data());
    });
    setDataApplication(data_list);
    console.log(data_list);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const tempData = {
    company_name: "ZS Associates",
    end_date: { seconds: 1668364200, nanoseconds: 318000000 },
    stipend: "50,000",
    title: "Software Developer",
    job_type: "FTE",
    date: { seconds: 1667241000, nanoseconds: 823000000 },
    status: "pending",
  };

  const Item = ({ data }) => {
    return (
      <div className="application-cards">
        <NewOpportunityCard info={data} />
      </div>
    );
  };

  return (
    <div className="opportunityMain">
      {/* <div style={{ width: "228px" }}>
        <LeftHeader />
      </div> */}
      <div className="opportunityMainRight">
        {dataApplication.map((item) => {
          return (
            <>
              <NewOpportunityCard info={item} />
              <br />
            </>
          );
        })}
        {/* <Item data={tempData}/> */}
      </div>
    </div>
  );
};

export default Opportunity;

// import React from "react";
// import Applications from "./Applications";
// import LeftHeader from "./LeftHeader";
// import "./../css/Opportunity.css";
// import { useNavigate } from "react-router-dom";

// const Opportunity = () => {
//   let navigate = useNavigate();
//   if (localStorage.getItem("isLoggedIn") !== "true") {
//     navigate("/login", { replace: true });
//   }
//   return (
//     <div className="opportunityMain">
//       {/* <div style={{ width: "228px" }}>
//         <LeftHeader />
//       </div> */}
//       <div className="opportunityMainRight">
//         <Applications />
//       </div>
//     </div>
//   );
// };

// export default Opportunity;
