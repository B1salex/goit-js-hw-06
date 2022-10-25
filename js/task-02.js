const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// надо перебрать массив ingredients

const navIngredientsEl = document.querySelector("#ingredients");

const createComponents = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientsElComponents = document.createElement("li");
    ingredientsElComponents.classList.add("item");
    ingredientsElComponents.textContent = ingredient;
    return ingredientsElComponents;
  });
};

const ingredientsItem = createComponents(ingredients);

navIngredientsEl.append(...ingredientsItem);
