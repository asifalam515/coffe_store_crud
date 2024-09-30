import { useLoaderData } from "react-router-dom";
import "./App.css";
import CaffeeCard from "./components/CaffeeCard";
import { useState } from "react";

function App() {
  const loadedData = useLoaderData();
  const [coffees, setCoffees] = useState(loadedData);

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        {loadedData.map((data) => (
          <CaffeeCard
            key={data._id}
            coffee={data}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CaffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
