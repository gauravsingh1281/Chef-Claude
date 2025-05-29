export default function GetRecipe({ generateRecipe, ref }) {
  return (
    <>
      <div className="get-recipe-container">
        <div ref={ref}>
          <h3 className="font-inter text-[#141413] text-lg font-[500] ">
            Ready for a recipe?
          </h3>
          <p className="text-[#6B7280] text-sm font-inter font-[400]">
            Generate a recipe from your list of ingredients.
          </p>
        </div>
        <button onClick={generateRecipe}>Get a recipe</button>
      </div>
    </>
  );
}
