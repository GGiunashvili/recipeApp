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
  const [foodId, setFoodId] = useState<string>("");

  return (
    <>
      <h1>hi</h1>
      <Search
        foodId={foodId}
        setFoodId={setFoodId}
        foodData={foodData}
        setFoodData={setFoodData}
      />
      <FoodDetails foodId={foodId} />
    </>
  );
}

export default App;
