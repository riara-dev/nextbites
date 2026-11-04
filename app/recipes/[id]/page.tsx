import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { recipes } from "../../data/recipes";

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { id } = await params;
  const recipe = recipes.find((item) => item.id === id);

  return {
    title: recipe ? `${recipe.title} | NextBites` : "Recipe not found | NextBites",
    description: recipe?.description ?? "Find your next favorite recipe.",
  };
}

async function RecipeContent({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) notFound();

  return (
    <main className="detail-page">
      <Link className="back-link" href="/#recipes">
        <span aria-hidden="true">←</span> All recipes
      </Link>

      <header className="detail-hero">
        <div
          className={`detail-art recipe-art-${recipe.id}`}
          aria-hidden="true"
        >
          <span>{recipe.emoji}</span>
        </div>
        <div className="detail-intro">
          <p className="eyebrow">A little something delicious</p>
          <h1>{recipe.title}</h1>
          <p className="detail-description">{recipe.description}</p>
          <div className="detail-meta">
            <span>◷ {recipe.minutes} min</span>
            <span>{recipe.difficulty}</span>
            <span className="detail-cuisine">{recipe.cuisine}</span>
          </div>
        </div>
      </header>

      <div className="recipe-instructions">
        <section className="instruction-section">
          <p className="eyebrow">What you’ll need</p>
          <h2>Ingredients</h2>
          <ul className="ingredient-list">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section className="instruction-section">
          <p className="eyebrow">Let’s make it</p>
          <h2>Instructions</h2>
          <ol className="method-list">
            {recipe.method.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}

export default function RecipePage({ params }: RecipePageProps) {
  return (
    <Suspense
      fallback={
        <main className="detail-page">
          <p className="eyebrow">Loading your recipe…</p>
        </main>
      }
    >
      <RecipeContent params={params} />
    </Suspense>
  );
}
