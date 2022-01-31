import React from "react";
import { Person } from "../types";
import Item from "./Item";

export interface IProps {
  people: Array<Person>;
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = ():JSX.Element[] => {
    return people.map((person) => {
      return <Item person={person} />
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
