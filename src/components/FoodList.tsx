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
            <li key={index}>
              <p>{item.strMeal}</p>
              <img
                style={{ width: "100px" }}
                src={item.strMealThumb}
                alt="food image"
              />
              <button onClick={handleClick}>view recipe</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
