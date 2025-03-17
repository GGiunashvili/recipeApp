import { useState } from "react";
import "./App.css";
import Search from "./components/Search";

interface FoodItem {
  id: number;
  title: string;
  image: string;
}

interface NameProps {
  foodId: string;
  setFoodId: React.Dispatch<React.SetStateAction<string>>;
}

interface FoodDataProps {
  foodData: FoodItem[];
  setFoodData: React.Dispatch<React.SetStateAction<FoodItem[]>>;
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
    </>
  );
}

export default App;
