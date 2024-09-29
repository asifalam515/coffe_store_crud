import { useLoaderData } from "react-router-dom";
import "./App.css";
import CaffeeCard from "./components/CaffeeCard";

function App() {
  const loadedData = useLoaderData();

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        {loadedData.map((data) => (
          <CaffeeCard key={data._id} coffee={data}></CaffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
