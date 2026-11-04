import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      className="recipe-card"
      href={`/recipes/${recipe.id}`}
      aria-label={`View ${recipe.title} recipe`}
    >
      <div className={`recipe-art recipe-art-${recipe.id}`} aria-hidden="true">
        <span>{recipe.emoji}</span>
      </div>
      <div className="recipe-card-content">
        <h2>{recipe.title}</h2>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span className="meta-time">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="6" />
              <path d="M8 4.5V8l2.2 1.4" />
            </svg>
            {recipe.minutes} min
          </span>
          <span>{recipe.difficulty}</span>
          <span className="cuisine-pill">{recipe.cuisine}</span>
        </div>
      </div>
    </Link>
  );
}
