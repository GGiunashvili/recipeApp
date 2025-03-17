interface FoodDetailsProps {
  foodId: string;
}

export default function FoodDetails({ foodId }: FoodDetailsProps) {
  return (
    <div>
      <h1>{foodId}</h1>
    </div>
  );
}
