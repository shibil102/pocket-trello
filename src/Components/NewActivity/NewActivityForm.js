import React, { useState } from "react";
import "./NewActivityForm.css";

const NewActivityForm = (props) => {
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");

  const itemHandler = (e) => {
    setItem(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();

    const Activity = {
      date: new Date(date),
      value: item,
    };
    setItem("");
    setDate("");
    props.onSaveExpenseData(Activity);
  };

  return (
    <form onSubmit={FormSubmitHandler}>
      <div className="formElements">
        <input
          onChange={itemHandler}
          value={item}
          type="text"
          placeholder="What is your activity"
        />
        <input
          onChange={dateHandler}
          value={date}
          type="date"
          placeholder="dd/mm/yy"
        />
      </div>
      <button className="AddItem" type="submit">
        Add Activity
      </button>
    </form>
  );
};

export default NewActivityForm;
