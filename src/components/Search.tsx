import { useState, useEffect } from "react";
import FoodList from "./FoodList";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php"; // TheMealDB search API

interface NameProps {
  foodId: string;
  setFoodId: React.Dispatch<React.SetStateAction<string>>;
}

interface FoodDataProps {
  foodData: any[];
  setFoodData: React.Dispatch<React.SetStateAction<any[]>>;
}

type SearchProps = NameProps & FoodDataProps; // Combine both interfaces

export default function Search({
  foodId,
  setFoodId,
  foodData,
  setFoodData,
}: SearchProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?s=${query}`); // Use 's' for searching by meal name
      const data = await res.json();
      // console.log(data.meals); // Check the data for the available meals
      setFoodData(data.meals || []); // Update foodData with API results
    }
    fetchFood();
  }, [query, setFoodData]);

  return (
    <div className="col-span-5">
      <input
        className="mb-[20px] border max-w-[250px] w-full"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Controlled input
        placeholder="Search for food..."
      />

      <FoodList foodId={foodId} setFoodId={setFoodId} foodData={foodData} />
    </div>
  );
}
