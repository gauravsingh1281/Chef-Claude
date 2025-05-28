import { createContext, useState } from "react";

export const ingredientContext = createContext(null);

export default function IngredientProvider({ children }) {
  const [ingredientsList, setIngredientsList] = useState([]);
  return (
    <>
      <ingredientContext.Provider
        value={{ ingredientsList, setIngredientsList }}
      >
        {children}
      </ingredientContext.Provider>
    </>
  );
}
