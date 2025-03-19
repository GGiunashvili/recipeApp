import { useEffect, useState } from "react";

interface FoodDetailsProps {
  foodId: string;
}

export default function FoodDetails({ foodId }: FoodDetailsProps) {
  const [fud, setFud] = useState<any>(null);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php";
  // https://www.themealdb.com/api/json/v1/1/lookup.php?i=53086
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

  if (!fud)
    return (
      // loading
      <div className="sticky top-0 overflow-scroll h-screen pt-[20px]">
        <div className=" mx-auto text-justify">
          <h1 className="text-center text-purple-700 text-3xl mb-[40px]">
            Welcome!
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            We warmly welcome you to our vibrant and exciting world of cooking!
            Here, you'll find a vast collection of recipes from all around the
            globe, ready for you to explore.
          </p>

          <h2 className="text-3xl text-purple-600 mt-8 mb-4">
            Discover Your Favorite Dish
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            On our site, you can select your{" "}
            <span className="text-red-500 font-bold">desired dish</span> and
            learn step-by-step how to prepare it. Whether you’re a beginner or
            an experienced chef, we’ve got something for everyone.
          </p>

          <h2 className="text-3xl text-purple-600 mt-8 mb-4">Why Cooking?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Cooking isn’t just about preparing food – it’s about creating
            memories. It’s about experimenting, having fun, and sharing love
            with every meal. Our recipes will help you enhance your culinary
            skills while enjoying the process!
          </p>

          <h2 className="text-3xl text-purple-600 mt-8 mb-4">Happy Cooking!</h2>
          <p className="text-lg text-gray-700 mb-6">
            We wish you success in finding the perfect recipe. Let the cooking
            journey begin, and don’t forget to add your personal touch. Enjoy
            your time in the kitchen and treat yourself with delicious dishes!
          </p>
        </div>
      </div>
    );

  const youtubeEmbedUrl = fud?.strYoutube
    ? fud.strYoutube.replace("watch?v=", "embed/")
    : "";

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="col-span-12 lg:col-span-8 relative lg:h-full">
      <div className="sticky top-0 lg:overflow-scroll lg:h-screen pt-[20px]">
        <div className="flex flex-col lg:flex-row items-left mb-[40px]">
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
              <p className="text-2xl mb-[8px]">Cooking Instructions</p>
              <p className="mb-[30px]">
                {fud?.strInstructions.length > 500 && !expanded["instructions"]
                  ? fud.strInstructions.slice(0, 500) + "..."
                  : fud?.strInstructions}
                {fud?.strInstructions.length > 500 && (
                  <span
                    onClick={() => toggleExpand("instructions")}
                    className="text-blue-500 underline"
                  >
                    {expanded["instructions"] ? "See Less" : "See More"}
                  </span>
                )}
              </p>

              <p className="whitespace-nowrap">{fud?.strArea} Dish</p>
            </div>
          </div>
        </div>

        <div className="text-left">
          <iframe
            className="w-full h-[400px]"
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
