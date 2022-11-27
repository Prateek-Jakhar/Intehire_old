import React, {useState, useEffect} from "react";
import CommentBox from "./CommentBox.js";
import OldOpportunityCard2 from "./OldOpportunityCard2.js";
import ResponseCard from "./ResponseCard.js";
import "../css/Forum.css";
import LeftHeader from "./LeftHeader.js";
import { db } from "./Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Forum = () => {
  let navigate = useNavigate();
  if (localStorage.getItem('isLoggedIn') !== 'true'){
    navigate("/login", { replace: true });
  }
  const {id} = useParams();
  const tempData = {
    date: '',
    description: '',
    id: '',
    experience: [],
    tags: [],
    profile:[],
    company_name:'',
    batch_year:'',
  }
  const [data, setData] = useState(tempData);
  const [isChanged, setIsChanged] = useState(false);

  const fetchPost = async () => {
      const q = query(collection(db, "forums"), where("id", "==", id));
      const querySnapshot = await getDocs(q)
      let data_list = []
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        setData(doc.data());
        setIsChanged(true);
      });
      
  }

  useEffect(()=>{
      fetchPost();
  },[])

  return (
    <div className="forumMain">
      <div style={{ width: "228px" }}>
        <LeftHeader />
      </div>
      <div className="forumMainRight">
        {isChanged ? <OldOpportunityCard2 info={data} /> : <></>}
        <div class="number-of-responses">{data.experience.length} response{data.experience.length > 1 ? 's' : ''}</div>
        <hr />
        <CommentBox />
        <br />
        <br />
        {data.experience.map((item) => {
          return(
            <ResponseCard id={item.id} />
          );
        })}
        {/* <ResponseCard /> */}
      </div>
    </div>
  );
};

export default Forum;
