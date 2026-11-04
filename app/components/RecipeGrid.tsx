"use client";

import { useMemo, useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const filteredRecipes = useMemo(() => {
    const searchTerm = query.trim().toLocaleLowerCase();
    if (!searchTerm) return recipes;

    return recipes.filter((recipe) =>
      [
        recipe.title,
        recipe.cuisine,
        recipe.description,
        recipe.difficulty,
      ].some((value) => value.toLocaleLowerCase().includes(searchTerm)),
    );
  }, [query, recipes]);

  return (
    <>
      <label className="search-box">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 4.5 4.5" />
        </svg>
        <span className="visually-hidden">Search recipes or cuisines</span>
        <input
          type="search"
          placeholder="Search recipes or cuisines..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      {filteredRecipes.length > 0 ? (
        <section className="recipe-grid" id="recipes" aria-label="Recipes">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      ) : (
        <p className="empty-state" role="status">
          No recipes match “{query}”. Try a dish name or cuisine.
        </p>
      )}
    </>
  );
}
