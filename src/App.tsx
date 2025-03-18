import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import FoodDetails from "./components/FoodDetails";

interface FoodItem {
  id: number;
  title: string;
  image: string;
}

function App() {
  const [foodData, setFoodData] = useState<FoodItem[]>([]); // Explicitly define the type
  const [foodId, setFoodId] = useState<string>("53086");

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-1 text-start">
          <h1>menu</h1>
          {foodData.map((item: any, index: number) => {
            // Define the handler inline within the map callback
            return <p>{item.strMeal}</p>;
          })}
        </div>

        <Search
          foodId={foodId}
          setFoodId={setFoodId}
          foodData={foodData}
          setFoodData={setFoodData}
        />

        <FoodDetails foodId={foodId} />
      </div>
    </>
  );
}

export default App;
