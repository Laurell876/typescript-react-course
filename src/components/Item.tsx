import { Person } from "../types";

interface IProps {
  person: Person;
}

const Item: React.FC<IProps> = ({person}) => {
  return (
    <li className="List">
      <div className="List-header">
        <img
          height="100px"
          src={person.url}
          alt={person.name}
          className="List-img"
        />
        <h2>{person.name}</h2>
      </div>
      <p>{person.age} years old</p>
      <p className="List-note"> {person.note} </p>
    </li>
  );
};

export default Item;
