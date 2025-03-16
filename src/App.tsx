import { useState } from "react";
import "./App.css";
import Search from "./components/Search";

interface FoodItem {
  id: number;
  title: string;
  image: string;
}

function App() {
  const [foodData, setFoodData] = useState<FoodItem[]>([]); // Explicitly define the type

  return (
    <>
      <h1>hi</h1>
      <Search foodData={foodData} setFoodData={setFoodData} />
    </>
  );
}

export default App;
