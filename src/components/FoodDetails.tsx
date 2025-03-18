import { useEffect, useState } from "react";

interface FoodDetailsProps {
  foodId: string;
}

export default function FoodDetails({ foodId }: FoodDetailsProps) {
  const [fud, setFud] = useState<any>(null);
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php";

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${url}?i=${foodId}`);
        const data = await res.json();
        console.log("API Response:", data);
        setFud(data.meals?.[0] || null);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    }

    if (foodId) fetchFood();
  }, [foodId]);

  if (!fud) return <p>Loading...</p>;

  const youtubeEmbedUrl = fud?.strYoutube
    ? fud.strYoutube.replace("watch?v=", "embed/")
    : "";

  return (
    <div className="col-span-8 relative h-full bg-purple-100  ">
      <div className="sticky top-0 overflow-scroll h-screen">
        <div className="flex items-left mb-[40px]">
          <img
            className="max-w-[400px] max-h-[400px] mx-auto"
            src={fud?.strMealThumb}
            alt={fud?.strMeal}
          />
          <div className="p-[16px]">
            <h1 className="text-2xl mb-[16px]">{fud?.strMeal}</h1>

            <div className="flex gap-[20px] mb-[16px] items-start">
              <p className="text-xl">Ingredients:</p>
              <div className="flex gap-[10px] flex-wrap">
                {Array.from(
                  { length: 20 },
                  (_, i) => `strIngredient${i + 1}`
                ).map((key) =>
                  fud && fud[key] ? (
                    <p className="whitespace-nowrap" key={key}>
                      {fud[key]}
                    </p>
                  ) : null
                )}
              </div>
            </div>
            <div className="text-start">
              <p className=" text-2xl mb-[8px]">Cooking Instructions</p>
              <p className="mb-[30px]">{fud?.strInstructions}</p>
              <p className="whitespace-nowrap">{fud?.strArea} Dish</p>
            </div>
          </div>
        </div>

        <div className="text-left">
          <iframe
            width="560"
            height="315"
            src={youtubeEmbedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
