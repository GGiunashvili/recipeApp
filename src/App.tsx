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
