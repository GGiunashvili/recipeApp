interface FoodItem {
  id: number;
  title: string;
  image: string;
}
interface CatalogProps {
  foodData: FoodItem[];
}
export default function Catalog({ foodData }: CatalogProps) {
  return (
    <div className=" text-start h-full bg-red-100">
      <div className="sticky top-0">
        <h1>menu</h1>
        {foodData.map((item: any) => {
          // Define the handler inline within the map callback
          return <p>{item.strMeal}</p>;
        })}
      </div>
    </div>
  );
}
