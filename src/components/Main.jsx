import { MdAdd } from "react-icons/md";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import IngredientList from "./IngredientList";
import { useContext, useEffect, useRef, useState, useTransition } from "react";
import { ingredientContext } from "../context/IngredientContext";
import GetRecipe from "./GetRecipe";
import { getRecipeFromMistral } from "../huggingFaceAi";
import RecipeResult from "./RecipeResult";
export default function Main() {
  const { ingredientsList, setIngredientsList } = useContext(ingredientContext);
  const [ingredient, setIngredient] = useState("");
  const [generatedRecipe, setGeneratedRecipe] = useState("");
  const generatedRecipeSection = useRef(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (generatedRecipe !== "" && generatedRecipeSection !== null) {
      generatedRecipeSection?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [generatedRecipe]);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (!ingredient) return;
    setIngredientsList((prevValue) => [...prevValue, ingredient]);
    setIngredient("");
  };

  const generateRecipe = async () => {
    startTransition(async () => {
      const recipeMarkdown = await getRecipeFromMistral(ingredientsList);
      setGeneratedRecipe(recipeMarkdown);
    });
  };

  const generateNewRecipe = () => {
    setGeneratedRecipe("");
    setIngredientsList([]);
  };
  return (
    <main>
      <form onSubmit={handleAddIngredient} className="add-ingredient-form">
        <input
          type="text"
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
              generatedRecipe={generatedRecipe}
              generateNewRecipe={generateNewRecipe}
            />
          )}
        </section>
      ) : (
        ""
      )}
      {isPending && !generatedRecipe ? (
        <div className="loader-overlay">
          <DotLottieReact
            style={{ width: "70%", height: "70%" }}
            src="https://lottie.host/09e7978f-4e18-4a32-9d00-eee172301835/m2Ls3syoPD.lottie"
            loop
            autoplay
          />
        </div>
      ) : (
        generatedRecipe && <RecipeResult generatedRecipe={generatedRecipe} />
      )}
    </main>
  );
}
