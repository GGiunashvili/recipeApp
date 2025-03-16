export default function FoodList({ foodData }: { foodData: any[] }) {
  return (
    <ul>
      {foodData.map((item: any, index: number) => (
        <li key={index}>
          <p>{item.strMeal}</p>
          <img
            style={{ width: "100px" }}
            src={item.strMealThumb}
            alt="food image"
          />

          <button onClick={() => console.log(item.idMeal)}>view recipe</button>
        </li>
      ))}
    </ul>
  );
}
