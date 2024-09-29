import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const { photo, _id, name, quantity, supplier, taste, details } = loadedData;
  return (
    <div>
      <h1>Update Your Coffee {name} </h1>
    </div>
  );
};

export default UpdateCoffee;
