import Markdown from "react-markdown";
export default function RecipeResult({ generatedRecipe }) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <Markdown>{generatedRecipe}</Markdown>
    </section>
  );
}
