import React from "react";
import "../css/ProfileButton.css";
import pic from "../assets/student-pic.png";
import bell from "../assets/notification-bell.png";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";
import LogoutMenu from "./LogoutMenu";
const ProfileButton = () => {
  const [isActive, setisActive] = React.useState(false);
  function handleClick() {
    setisActive((prevState) => !prevState);
  }

  return (
    <>
      <div style={{ height: "100px" }}>
        <div onClick={handleClick} className="profile-button">
          <img src={pic} alt="" />
          <text className="profile-name">Nitesh Patel</text>
          <img
            className="profile-image"
            src={bell}
            alt=""
            height="20px"
            width="20px"
          />
          {!isActive && (
            <img
              className="profile-image"
              style={{
                margin: "auto",
                height: "20px",
                width: "20px",
                filter: "invert(100%)",
              }}
              src={plus}
              alt=""
            />
          )}
          {isActive && (
            <img
              className="profile-image"
              style={{
                margin: "auto",
                height: "20px",
                width: "20px",
                filter: "invert(100%)",
              }}
              src={minus}
              alt=""
            />
          )}
        </div>
        <div>{isActive && <LogoutMenu />}</div>
      </div>
    </>
  );
};

export default ProfileButton;
