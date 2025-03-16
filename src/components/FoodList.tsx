import React from "react";

export default function FoodList({ foodData }: { foodData: any[] }) {
  return (
    <ul>
      {foodData.map((item: any, index: number) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}
