import { useEffect, useState } from "react";

interface FoodDetailsProps {
  foodId: string;
}

export default function FoodDetails({ foodId }: FoodDetailsProps) {
  const [fud, setFud] = useState<any>(null);
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?i=${foodId}`);
      const data = await res.json();
      setFud(data.meals ? data.meals[0] : null);
    }

    fetchFood();
  }, [foodId]);

  return (
    <div>
      <h1>{foodId}</h1>
      <h1>{fud ? fud.strMeal : "Food not found"}</h1>
    </div>
  );
}
