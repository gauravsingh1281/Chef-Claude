import { useState } from "react";
import RecipeResult from "./RecipeResult";

export default function GetRecipe() {
  const [showRecipe, setShowRecipe] = useState(false);
  return (
    <>
      <div className="w-1/2 mx-auto bg-[#F0EFEB] rounded-lg flex justify-between items-center px-8 py-7 my-9">
        <div>
          <h3 className="font-inter text-[#141413] text-lg font-[500] ">
            Ready for a recipe?
          </h3>
          <p className="text-[#6B7280] text-sm font-inter font-[400]">
            Generate a recipe from your list of ingredients.
          </p>
        </div>
        <button
          onClick={() => setShowRecipe((prevState) => !prevState)}
          className=" font-inter text-sm text-[#FAFAF8] bg-[#D17557] py-[9px] px-[17px] rounded-md cursor-pointer"
        >
          Get a recipe
        </button>
      </div>
      {showRecipe && <RecipeResult />}
    </>
  );
}
