import { useContext } from "react";
import { ingredientContext } from "../context/IngredientContext";

export default function IngredientList() {
  const { ingredientsList } = useContext(ingredientContext);
  return (
    <>
      <div className="w-1/2 mt-6 mx-auto flex justify-center items-start flex-col gap-4">
        <h2 className="font-inter text-3xl text-[#141413] font-semibold">
          Ingredients on hand:
        </h2>
        <ul className="list-disc ml-6 leading-[35px] text-[#475467]  text-lg">
          {ingredientsList.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
