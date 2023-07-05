import React, { useState } from "react";
import Input from "./Input";

const INITIAL_INPUT = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: ""
};

export default function UserInputs() {
  const [inputData, setInputData] = useState(INITIAL_INPUT);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...
    console.log("SUBMIT");
  }
  const handleReset = () => {
    // console.log("RESET");
    setInputData(INITIAL_INPUT)
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    // console.log(id, value);
    setInputData((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  };

  React.useEffect(() => {
    console.log(inputData)
  }, [inputData]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <Input
          id={"current-savings"}
          label={"Current Savings ($)"}
          enteredValue={inputData["current-savings"]}
          handleChange={handleChange}
        />
        <Input
          id={"yearly-contribution"}
          label={"Yearly Savings ($)"}
          enteredValue={inputData["yearly-contribution"]}
          handleChange={handleChange}
        />
      </div>
      <div className="input-group">
        <Input
          id={"expected-return"}
          label={"Expected Interest (%, per year)"}
          enteredValue={inputData["expected-return"]}
          handleChange={handleChange}
        />
        <Input
          id={"duration"}
          label={"Investment Duration (years)"}
          enteredValue={inputData.duration}
          handleChange={handleChange}
        />
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}