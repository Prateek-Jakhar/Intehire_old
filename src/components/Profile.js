import React from "react";
import "../css/Profile.css";
import LeftHeader from "./LeftHeader";
import ProfileButton from "./ProfileButton";
const Profile = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    rollNumber: "",
    phoneNumber: "",
    email: "",
    branch: "",
    cgpa: "",
    address: "",
    driveLink: "",
  });
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
        // e.target.name = e.target.value;
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  const rows = 5,
    cols = 50;
  return (
    <div className="mainProfile">
      <div>
        <LeftHeader />
      </div>
      <div style={{ position: "absolute", right: "50px" }}>
        <ProfileButton />
      </div>
      <div className="profileLeft" style={{ marginLeft: "50px" }}>
        <h1
          style={{
            color: "#41337a",
            fontSize: "3rem",
            marginTop: "25px",
            textAlign: "center",
          }}
        >
          My Profile
        </h1>
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Name
            </div>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Roll Number
            </div>
            <input
              name="rollNumber"
              type="text"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="Enter your Roll Number"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Phone Number
            </div>
            <input
              name="phoneNumber"
              type="phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
            />
          </label>
          <br /> <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Email
            </div>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Branch
            </div>
            <input
              name="branch"
              type="string"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Enter your Branch"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <span
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              CGPA
            </span>
            <input
              name="cgpa"
              type="number"
              value={formData.cgpa}
              onChange={handleChange}
              placeholder="Enter your CGPA"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <span
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Address
            </span>
            <input
              name="address"
              type="string"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your Address"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <span
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Resume
            </span>
            <input
              name="driveLink"
              type="string"
              value={formData.driveLink}
              onChange={handleChange}
              placeholder="Enter Resume Link"
            />
          </label>
          <br />
          <br />
          <div className="btn">
            <button>Submit</button>
          </div>
        </form>
        <div style={{ height: "100px" }}></div>
      </div>

      <div className="profileRight">
        <img src={require("../assets/background.png")} alt="profileimage" />
      </div>
    </div>
  );
};

export default Profile;
