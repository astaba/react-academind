import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "./Button";
import Card from "./Card";

const INITIAL_INPUTS = {
  name: "",
  age: "",
};

export default function AddUser(props) {
  const [inputsData, setInputsData] = useState(INITIAL_INPUTS);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "age" && (isNaN(value.trim()) || +value <= 0)) {
      props.displayModal(
        "Invalid age",
        "Please enter a valid age strictly greater than zero."
      );
    }
    setInputsData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = "";
    if (!inputsData.name.trim()) {
      errorMessage = "Please enter a valid name.";
    }
    if (errorMessage) {
      props.displayModal("Invalid name", errorMessage);
    } else {
      props.addNewUser(inputsData);
      setInputsData(INITIAL_INPUTS)
    }
  };
  
  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            value={inputsData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            value={inputsData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
}
