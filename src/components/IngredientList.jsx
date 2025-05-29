import { useContext } from "react";
import { ingredientContext } from "../context/IngredientContext";

export default function IngredientList() {
  const { ingredientsList } = useContext(ingredientContext);
  return (
    <>
      <div>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list">
          {ingredientsList.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
