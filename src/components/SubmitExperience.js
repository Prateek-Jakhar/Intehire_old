import React from "react";
import "./../css/SubmitExperience.css";
export default function SubmitExperience() {
  const [formData, setFormData] = React.useState({
    whatRole: "",
    whatQuestion: "",
    whatProcess: "",
    difficulty: "",
    experience: "",
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
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>
          <div>For what role was the interview conducted?</div>
          <textarea
            name="whatRole"
            value={formData.whatRole}
            onChange={handleChange}
            rows={rows}
            cols={cols}
          />
        </label>
        <br />
        <label>
          <div>
            What questions were asked in the various rounds? <br /> You can also
            provide the answers to them.
          </div>
          <textarea
            name="whatQuestion"
            value={formData.whatQuestion}
            onChange={handleChange}
            rows={rows}
            cols={cols}
          />
        </label>
        <br />
        <label>
          <div>What was their selection and interview process like?</div>
          <textarea
            name="whatProcess"
            value={formData.whatProcess}
            onChange={handleChange}
            rows={rows}
            cols={cols}
          />
        </label>
        <fieldset style={{ width: "70%" }}>
          <legend>
            What was the Interview Difficulty Level in your opinion?
          </legend>
          <input
            type="radio"
            name="difficulty"
            id="Easy"
            checked={formData.difficulty === "Easy"}
            onChange={handleChange}
            value="Easy"
          />
          <label htmlFor="Easy">Easy</label>
          <br />
          <input
            type="radio"
            name="difficulty"
            id="Medium"
            checked={formData.difficulty === "Medium"}
            onChange={handleChange}
            value="Medium"
          />
          <label htmlFor="Medium">Medium</label>
          <br />
          <input
            type="radio"
            name="difficulty"
            id="Hard"
            checked={formData.difficulty === "Hard"}
            onChange={handleChange}
            value="Hard"
          />
          <label htmlFor="Hard">Hard</label>
          <br />
        </fieldset>
        <label>
          <div>How was the overall experience?</div>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows={rows}
            cols={cols}
          />
        </label>
        <br />
        <div className="btn">
          <button>Submit</button>
        </div>
      </form>
      <div style={{ height: "100px" }}></div>
    </div>
  );
}
