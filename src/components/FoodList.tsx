export default function FoodList({
  foodData,
  setFoodId,
}: {
  foodData: any[];
  foodId: any;
  setFoodId: (name: string) => void;
}) {
  return (
    <>
      <ul>
        {foodData.map((item: any, index: number) => {
          const handleClick = () => setFoodId(item.idMeal); // Define the handler inline within the map callback
          return (
            <li
              className="max-w-[250px] w-fit mx-auto flex gap-[10px] flex-col justify-center items-center border mb-4 pb-[20px] pt-0 rounded-xl overflow-hidden border-gray-300"
              key={index}
            >
              <img
                className="max-w-[250px]"
                src={item.strMealThumb}
                alt="food image"
              />
              <p>{item.strMeal}</p>

              <button
                className="bg-purple-400 text-white p-[8px] rounded-md hover:cursor-pointer"
                onClick={handleClick}
              >
                view recipe
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
