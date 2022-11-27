import React, { useEffect, useState } from "react";
import OldOpportunityCard from "./OldOpportunityCard";
import "../css/Applications.css";
import NewOpportunityCard from "./NewOpportunityCard";
import ProfileButton from "./ProfileButton";
import {db} from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Applications=()=>{
    const [dataApplication, setDataApplication] = useState([]);
    let navigate = useNavigate();
    if (localStorage.getItem('isLoggedIn') !== 'true'){
      navigate("/login", { replace: true });
    }

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, "applications"))
        let data_list = []
        querySnapshot.forEach((doc) => {
            data_list.push(doc.data());
        });
        setDataApplication(data_list);
    }

    useEffect(()=>{
        fetchPost();
    },[])

    return(
        <div className="main-applications" >
            <div className="application-header">
                <span className="on-campus">
                    <text>On Campus</text>
                </span>
                <span className="apply-filters">
                    <text>Apply Filters</text>
                </span>
                <ProfileButton/>
            </div>
            <div className="application-cards">
                {/* <NewOpportunityCard />
                <br />
                <NewOpportunityCard />
                <br />
                <NewOpportunityCard />
                <br /> */}

                {dataApplication.map((item)=>{
                    return(
                        <>
                            <NewOpportunityCard info={item}/>
                            <br />
                        </>
                    )
                })}
                
            </div>
            <text className="finish">Yay, You have seen it all!</text>
        </div>
    )
}

export default Applications;