import React, { useState } from "react";
import { IState as Props } from "../App";
import { Person } from "../types";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Person[]>>;
}

const AddToList: React.FC<IProps> = ({ setPeople, people }) => {
  const [input, setInput] = useState({
    name: "",
    age: 0,
    note: "",
    url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const addToList = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setPeople([
      ...people,
      {
        name: input.name,
        age: input.age,
        note: input.note,
        url: input.url,
      },
    ]);
  };

  return (
    <form className="AddToList" onSubmit={addToList}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="AddToList-input"
        required
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        className="AddToList-input"
        required
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="url"
        placeholder="Image Url"
        name="url"
        className="AddToList-input"
        required
        value={input.url}
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        name="note"
        className="AddToList-input"
        onChange={handleChange}
        value={input.note}
      />
      <button className="AddToList-btn">Add to List</button>
    </form>
  );
};

export default AddToList;
