// my javascript code

// mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = mobileMenuBtn.querySelector('i');

mobileMenuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('d-none');
  
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});

// recipe data
const recipes = [
  {
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    imgCover: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    rating: "4.8",
    reviews: "234",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: 35,
    servings: "4 people",
    difficulty: "Easy",
    category: "Italian",
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "28g",
      carbs: "62g",
      fat: "18g",
      fiber: "3g",
      sodium: "680mg"
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only"
    ]
  },
  {
    name: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    imgCover: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    rating: "4.9",
    reviews: "187",
    prepTime: "10 min",
    cookTime: "15 min",
    totalTime: 25,
    servings: "2 people",
    difficulty: "Easy",
    category: "Seafood",
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced"
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "35g",
      carbs: "28g",
      fat: "14g",
      fiber: "0g",
      sodium: "720mg"
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal"
    ]
  },
  {
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    imgCover: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    reviews: "312",
    prepTime: "15 min",
    cookTime: "25 min",
    totalTime: 40,
    servings: "4 people",
    difficulty: "Medium",
    category: "Asian",
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves"
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "26g",
      carbs: "22g",
      fat: "26g",
      fiber: "5g",
      sodium: "890mg"
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce"
    ]
  },
  {
    name: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    imgCover: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    reviews: "421",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: 35,
    servings: "4 people",
    difficulty: "Easy",
    category: "American",
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments"
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
    ],
    nutrition: {
      calories: "650 kcal",
      protein: "38g",
      carbs: "42g",
      fat: "35g",
      fiber: "2g",
      sodium: "920mg"
    },
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor"
    ]
  },
  {
    name: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    imgCover: "https://thf.bing.com/th/id/OIP.V9pjx0L0ps3qfPE73PXA8gHaHa?w=208&h=208&c=7&r=0&o=7&cb=thfc1falcon4&dpr=1.3&pid=1.7&rm=3",
    rating: "4.5",
    reviews: "156",
    prepTime: "20 min",
    cookTime: "35 min",
    totalTime: 55,
    servings: "2 people",
    difficulty: "Easy",
    category: "Mediterranean",
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing"
    ],
    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "18g",
      carbs: "58g",
      fat: "20g",
      fiber: "10g",
      sodium: "540mg"
    },
    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein"
    ]
  }
];

// current recipe index
let currentRecipe = 0;

// get elements
const recipeSection = document.getElementById('recipe-display-section');
const recipeImage = document.getElementById('recipe-image');
const recipeName = document.getElementById('recipe-name');
const recipeDescription = document.getElementById('recipe-description');
const ratingAverage = document.getElementById('rating-average');
const ratingQuantity = document.getElementById('rating-quantity');
const prepTimeDisplay = document.getElementById('prep-time-display');
const cookTimeDisplay = document.getElementById('cook-time-display');
const servingsDisplay = document.getElementById('servings-display');
const difficultyBadge = document.getElementById('difficulty-badge');
const categoryBadge = document.getElementById('category-badge');
const ingredientsList = document.getElementById('ingredients-list');
const instructionsList = document.getElementById('instructions-list');
const tipsList = document.getElementById('tips-list');
const caloriesValue = document.getElementById('calories-value');
const proteinValue = document.getElementById('protein-value');
const carbsValue = document.getElementById('carbs-value');
const fatValue = document.getElementById('fat-value');
const fiberValue = document.getElementById('fiber-value');
const sodiumValue = document.getElementById('sodium-value');
const timeWarning = document.getElementById('time-warning');
const tryAnotherBtn = document.getElementById('try-another-btn');

// function to show recipe
function showRecipe(index) {
  const recipe = recipes[index];
  
  recipeImage.src = recipe.imgCover;
  recipeImage.alt = recipe.name;
  recipeName.textContent = recipe.name;
  recipeDescription.textContent = recipe.description;
  ratingAverage.textContent = recipe.rating;
  ratingQuantity.textContent = "(" + recipe.reviews + " reviews)";
  prepTimeDisplay.textContent = recipe.prepTime;
  cookTimeDisplay.textContent = recipe.cookTime;
  servingsDisplay.textContent = recipe.servings;
  difficultyBadge.textContent = recipe.difficulty;
  categoryBadge.textContent = recipe.category;
  
  // update nutrition
  caloriesValue.textContent = recipe.nutrition.calories;
  proteinValue.textContent = recipe.nutrition.protein;
  carbsValue.textContent = recipe.nutrition.carbs;
  fatValue.textContent = recipe.nutrition.fat;
  fiberValue.textContent = recipe.nutrition.fiber;
  sodiumValue.textContent = recipe.nutrition.sodium;
  
  // update ingredients
  ingredientsList.innerHTML = "";
  for (let i = 0; i < recipe.ingredients.length; i++) {
    let li = document.createElement("li");
    li.className = "ingredient-item";
    li.innerHTML = '<span class="ingredient-num">' + (i + 1) + '</span><span>' + recipe.ingredients[i] + '</span>';
    ingredientsList.appendChild(li);
  }
  
  // update instructions
  instructionsList.innerHTML = "";
  for (let i = 0; i < recipe.instructions.length; i++) {
    let div = document.createElement("div");
    div.className = "instruction-step";
    div.innerHTML = '<div class="step-number">' + (i + 1) + '</div><div class="step-text"><p>' + recipe.instructions[i] + '</p></div>';
    instructionsList.appendChild(div);
  }
  
  // update tips
  tipsList.innerHTML = "";
  for (let i = 0; i < recipe.tips.length; i++) {
    let div = document.createElement("div");
    div.className = "tip-card";
    div.innerHTML = '<i class="fa-solid fa-check-circle text-warning me-3 mt-1"></i><p class="mb-0">' + recipe.tips[i] + '</p>';
    tipsList.appendChild(div);
  }
  
  // check if total time > 45 min
  if (recipe.totalTime > 45) {
    timeWarning.classList.remove("d-none");
  } else {
    timeWarning.classList.add("d-none");
  }
  
  // show the section
  recipeSection.classList.remove("d-none");
  
  // scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// try another recipe button
tryAnotherBtn.addEventListener('click', function() {
  currentRecipe = currentRecipe + 1;
  if (currentRecipe >= recipes.length) {
    currentRecipe = 0;
  }
  showRecipe(currentRecipe);
});

// tab switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = {
  ingredients: document.getElementById('ingredients-tab-content'),
  instructions: document.getElementById('instructions-tab-content'),
  nutrition: document.getElementById('nutrition-tab-content'),
  tips: document.getElementById('tips-tab-content')
};

tabBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    tabBtns.forEach(function(b) { b.classList.remove('active'); });
    this.classList.add('active');
    
    Object.keys(tabPanels).forEach(function(key) {
      tabPanels[key].classList.add('d-none');
    });
    
    let tab = this.getAttribute('data-tab');
    tabPanels[tab].classList.remove('d-none');
  });
});

// show first recipe when page loads
showRecipe(0);
