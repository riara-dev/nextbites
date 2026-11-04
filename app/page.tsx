import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>
          Find your next <span className="hl">bite</span>.
        </h1>
        <p>
          {recipes.length} recipes to browse, search, and cook. Pick one and
          get the full method.
        </p>
      </section>
      <RecipeGrid recipes={recipes} />
    </main>
  );
}