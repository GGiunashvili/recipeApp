import { useState, useEffect } from "react";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php"; // TheMealDB search API

interface FoodDataProps {
  foodData: any[];
  setFoodData: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function Search({ setFoodData }: FoodDataProps) {
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
    <div>
      <input
        className="mb-[20px] border max-w-[250px] w-full"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Controlled input
        placeholder="Search for food..."
      />
    </div>
  );
}
