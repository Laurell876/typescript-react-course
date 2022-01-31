import { useState } from "react";
import { Person } from "./types";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: Array<Person>;
}

const App: React.FC = () => {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 36,
      note: "Test Note",
      url: "https://www.gannett-cdn.com/presto/2020/01/26/USAT/80802abd-a62b-4420-8e15-ac4bd08c5929-2020-01-25_LeBron1.jpg?crop=2245,1688,x476,y589&width=2560",
    },
  ]);

  return (
    <div>
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
