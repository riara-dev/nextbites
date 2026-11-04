export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
  ingredients: string[];
  method: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    description:
      "Blistered crust, San Marzano sauce, melty mozzarella, fresh basil.",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup San Marzano tomato sauce",
      "125g fresh mozzarella cheese",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "Salt and black pepper",
    ],
    method: [
      "Preheat the oven to its highest temperature.",
      "Roll out the pizza dough into a thin circle.",
      "Spread tomato sauce evenly over the dough.",
      "Add mozzarella cheese and drizzle with olive oil.",
      "Bake for 7 to 9 minutes until the crust is golden.",
      "Garnish with fresh basil and serve hot.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
    description: "Smoky, spiced paneer cubes grilled with peppers and onion.",
    ingredients: [
      "250g paneer, cut into cubes",
      "1/2 cup thick yogurt",
      "1 tbsp tikka masala",
      "1 red bell pepper, cut into chunks",
      "1 red onion, cut into chunks",
      "1 tbsp lemon juice",
    ],
    method: [
      "Mix the yogurt, tikka masala, and lemon juice in a bowl.",
      "Add paneer, pepper, and onion; toss to coat and marinate for 20 minutes.",
      "Thread the paneer and vegetables onto skewers.",
      "Grill on medium-high heat, turning occasionally, until lightly charred.",
      "Serve warm with lemon wedges and your favorite chutney.",
    ],
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Drinks",
    description: "Smooth, low-acid coffee steeped slow overnight.",
    ingredients: [
      "1 cup coarsely ground coffee",
      "4 cups cold, filtered water",
      "Ice, for serving",
      "Milk or sweetener, optional",
    ],
    method: [
      "Add the ground coffee and cold water to a large jar.",
      "Stir gently, cover, and refrigerate for 12 to 16 hours.",
      "Strain through a fine-mesh sieve or coffee filter.",
      "Pour over ice and dilute with water or milk to taste.",
    ],
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    emoji: "🍔",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "American",
    description: "Crispy spiced patty, soft bun, tangy sauce, crunchy veg.",
    ingredients: [
      "2 veggie burger patties",
      "2 burger buns",
      "2 lettuce leaves",
      "1 tomato, sliced",
      "2 slices of cheddar cheese",
      "2 tbsp burger sauce",
    ],
    method: [
      "Cook the veggie patties in a lightly oiled pan until crisp and golden.",
      "Toast the burger buns cut-side down until warm.",
      "Spread burger sauce over both halves of each bun.",
      "Layer lettuce, tomato, a hot patty, and cheddar on the bottom bun.",
      "Top with the other bun half and serve straight away.",
    ],
  },
];
