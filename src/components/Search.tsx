import { useState, useEffect } from "react";
import FoodList from "./FoodList";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "4083b1ed5c8a4a74a02b304995eced78";

interface SearchProps {
  foodData: any[]; // Replace `any` with the specific type of your food data
  setFoodData: React.Dispatch<React.SetStateAction<any[]>>; // Replace `any` with the specific type
}

export default function Search({ foodData, setFoodData }: SearchProps) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results || []); // Update foodData with API results
    }
    fetchFood();
  }, [query, setFoodData]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Controlled input
        placeholder="Search for food..."
      />
      <FoodList foodData={foodData} />
    </div>
  );
}
