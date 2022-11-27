import React from "react";
import "../css/ProfileButton.css";
import pic from "../assets/student-pic.png";
import bell from "../assets/notification-bell.png";

const ProfileButton = () => {
  return (
    <div className="profile-button">
      <img src={pic} alt="" />
      <text className="profile-name">Nitesh Patel</text>
      <img className="profile-image" src={bell} alt="" />
    </div>
  );
};

export default ProfileButton;
