import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import FoodDetails from "./components/FoodDetails";
import Catalog from "./components/Catalog";
import FoodList from "./components/FoodList";
interface FoodItem {
  id: number;
  title: string;
  image: string;
}

function App() {
  const [foodData, setFoodData] = useState<FoodItem[]>([]); // Explicitly define the type
  // 53086 loading
  const [foodId, setFoodId] = useState<string>("");

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-1 h-full">
          <div className="sticky top-0">
            <Search
              foodId={foodId}
              setFoodId={setFoodId}
              foodData={foodData}
              setFoodData={setFoodData}
            />
            <Catalog foodData={foodData} setFoodId={setFoodId} />
          </div>
        </div>

        <div className="col-span-3">
          <FoodList foodId={foodId} setFoodId={setFoodId} foodData={foodData} />
        </div>

        <FoodDetails foodId={foodId} />
      </div>
    </>
  );
}

export default App;
