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
      <h1>hi</h1>
      <div style={{ display: "flex" }}>
        <Search
          foodId={foodId}
          setFoodId={setFoodId}
          foodData={foodData}
          setFoodData={setFoodData}
        />
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        >
          <FoodDetails foodId={foodId} />
        </div>
      </div>
    </>
  );
}

export default App;
