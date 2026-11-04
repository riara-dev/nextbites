import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <p className="eyebrow">Good food, made simple</p>
        <h1>
          Find your next <span className="highlight">bite.</span>
        </h1>
        <p className="hero-description">
          {recipes.length} recipes to browse, search, and cook. Pick one and get
          the full method.
        </p>
      </section>
      <RecipeGrid recipes={recipes} />
    </main>
  );
}
