import { MdAdd } from "react-icons/md";
import IngredientList from "./IngredientList";
import { useContext, useEffect, useRef, useState } from "react";
import { ingredientContext } from "../context/IngredientContext";
import GetRecipe from "./GetRecipe";
import { getRecipeFromMistral } from "../huggingFaceAi";
import RecipeResult from "./RecipeResult";
export default function Main() {
  const { ingredientsList, setIngredientsList } = useContext(ingredientContext);
  const [ingredient, setIngredient] = useState("");
  const [generatedRecipe, setGeneratedRecipe] = useState("");
  const generatedRecipeSection = useRef(null);

  useEffect(() => {
    if (generatedRecipe !== "" && generatedRecipeSection !== null) {
      generatedRecipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [generatedRecipe]);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (!ingredient) return;
    setIngredientsList((prevValue) => [...prevValue, ingredient]);
    setIngredient("");
  };

  const generateRecipe = async () => {
    const recipeMarkdown = await getRecipeFromMistral(ingredientsList);
    setGeneratedRecipe(recipeMarkdown);
    console.log(recipeMarkdown);
  };
  return (
    <main>
      <form onSubmit={handleAddIngredient} className="add-ingredient-form">
        <input
          type="text"
          className="py-[9px] px-[13px] border-1 border-[#D1D5DB] rounded-lg shadow-sm grow-1 min-w-[150px] max-w-[400px] outline-0"
          placeholder="e.g. oregano"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button>
          <MdAdd /> Add ingredient
        </button>
      </form>
      {ingredientsList.length ? (
        <section>
          <IngredientList />
          {ingredientsList.length > 3 && (
            <GetRecipe
              generateRecipe={generateRecipe}
              ref={generatedRecipeSection}
            />
          )}
        </section>
      ) : (
        ""
      )}
      {generatedRecipe && <RecipeResult generatedRecipe={generatedRecipe} />}
    </main>
  );
}
