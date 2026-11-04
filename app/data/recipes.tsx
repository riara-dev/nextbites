export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕",
    minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  // ...more recipes
];