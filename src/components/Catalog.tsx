interface FoodItem {
  id: number;
  title: string;
  image: string;
}
interface CatalogProps {
  foodData: FoodItem[];
  setFoodId: (name: string) => void;
}
export default function Catalog({ foodData, setFoodId }: CatalogProps) {
  return (
    <>
      <h1 className="mb-[20px]">menu</h1>
      <div className="flex flex-col gap-[10px] overflow-scroll h-[290px] lg:h-[calc(100vh-110px)] mb-[20px]">
        {foodData.map((item: any) => {
          const handleClick = () => setFoodId(item.idMeal);
          // Define the handler inline within the map callback
          return (
            <button
              className="bg-purple-400 text-white p-[8px] rounded-md hover:cursor-pointer"
              onClick={handleClick}
            >
              {item.strMeal}
            </button>
          );
        })}
      </div>
    </>
  );
}
