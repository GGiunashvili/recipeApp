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
      setFud(data.meals?.[0] || undefined);
      console.log(data.meals);
    }

    fetchFood();
  }, [foodId]);

  return (
    <div className="col-span-6">
      <h1>{foodId}</h1>
      <h1>{fud?.strMeal}</h1>
      <h1>{fud ? fud.strIngredient1 : "Food not found"}</h1>
      <h1>{fud ? fud.strIngredient2 : "Food not found"}</h1>
      <h1>{fud ? fud.strIngredient3 : "Food not found"}</h1>
      <img src={fud?.strMealThumb} alt={fud?.strMeal} />
    </div>
  );
}
