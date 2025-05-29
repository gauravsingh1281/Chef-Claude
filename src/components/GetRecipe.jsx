export default function GetRecipe({
  generateRecipe,
  ref,
  generatedRecipe,
  generateNewRecipe,
}) {
  return (
    <>
      <div className="get-recipe-container">
        <div className="get-desc" ref={ref}>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={generatedRecipe ? generateNewRecipe : generateRecipe}>
          {generatedRecipe ? "Generate new recipe" : "Get a recipe"}
        </button>
      </div>
    </>
  );
}
