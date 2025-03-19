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
      <div className="max-w-[1920px] m-auto px-[16px] grid grid-cols-12">
        <div className="col-span-12 h-full lg:col-span-1 mb-[20px] lg:mb-[0px]">
          <div className="sticky top-0 pt-[16px]">
            <Search foodData={foodData} setFoodData={setFoodData} />
            <Catalog foodData={foodData} setFoodId={setFoodId} />
          </div>
        </div>

        <div className="grid gap-[40px] lg:gap-x-[0] grid-cols-12 col-span-12 lg:col-span-3 mb-[60px] lg:mb-[0px] pt-[20px]">
          <FoodList foodId={foodId} setFoodId={setFoodId} foodData={foodData} />
        </div>
        <div className="col-span-12 lg:col-span-8 w-full">
          <FoodDetails foodId={foodId} />
        </div>
      </div>
    </>
  );
}

export default App;
