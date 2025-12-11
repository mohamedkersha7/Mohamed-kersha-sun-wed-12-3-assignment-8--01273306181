
    const recipeBox = document.getElementById("recipe-box");
    const warningBox = document.getElementById("warningBox");

    
    function toMinutes(str) {
      if (!str) return 0;
      const s = String(str).toLowerCase();


      
      const hourMatch = s.match(/([\d\.]+)\s*hour|([\d\.]+)\s*hr/);
      if (hourMatch && hourMatch[1]) return parseFloat(hourMatch[1]) * 60;
      
      const num = parseFloat(s.replace(',', '.'));
      if (isNaN(num)) return 0;
      
      return num;
    }

   
    function colorClassForLabel(label) {
      label = (label || '').toLowerCase();
      if (label.includes('calor') || label.includes('cal')) return 'c-orange';
      if (label.includes('protein')) return 'c-blue';
      if (label.includes('carb') || label.includes('carbo')) return 'c-yellow';
      if (label.includes('fat')) return 'c-pink';
      if (label.includes('fiber') || label.includes('fibre')) return 'c-green';
      if (label.includes('sodium')) return 'c-magenta';
      return 'c-orange';
    }

    const meals = [
     // meal1
      {
        name: "Creamy Spaghetti Carbonara",
        img: "./images/Creamy Spaghetti Carbonara.avif",
        desc: "Classic Italian pasta with eggs, cheese & pancetta.",
        rating: 4.8,
        reviews: 234,
        prep: "15 min",
        cook: "20 min",
        servings: "4 peaple",
        difficulty: "Easy",
        category: "Italian",
        ingredients: ["400g spaghetti pasta", "200g pancetta or guanciale, diced", "4 large eggs", "100g Pecorino Romano cheese, grated",
          "50g Parmesan cheese, grated", "Freshly ground black pepper", "Salt for pasta water"
        ],
        instructions: ["Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
          "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
          "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
          "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
          "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
          "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "520 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "28g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "62g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "18g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "3g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "680mg" },
        ],
        tips: ["Use room temperature eggs for a smoother sauce consistency",
          "Work quickly when mixing eggs with hot pasta to avoid scrambling",
          "Reserve extra pasta water - it's the secret to perfect creaminess",
          "Freshly grated cheese makes all the difference in flavor",
          "Never add cream - authentic carbonara is made with eggs only"]
      },
      

      // meal2
       {
        name: "Vegetable Curry",
        img: "./images/Vegetable Curry.avif",
        desc: "Hearty vegetarian curry with coconut milk",
        rating: 4.6,
        reviews: 289,
        prep: "20 min",
        cook: "30 min",
        servings: "4 peaple",
        difficulty: "Easy",
        category: "Asian",
        ingredients: ["2 potatoes, cubed", "1 cauliflower, florets", "2 carrots, sliced", "1 can chickpeas",
          "400ml coconut milk", "3 tablespoons curry powder", "1 onion, diced", "3 cloves garlic, minced","Fresh spinach" 
        ],
        instructions: ["Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
          "Add potatoes and carrots, cook for 5 minutes.",
          "Pour in coconut milk and 1 cup water. Bring to simmer.",
          "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
          "Stir in fresh spinach and cook until wilted.",
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "380 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "14g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "48g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "16g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "12g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "480mg" },
        ],
        tips: ["Add vegetables in order of cooking time needed",
          "Adjust curry powder amount to taste",
          "Use full-fat coconut milk for creamier curry",
          "Add protein like tofu or paneer if desired",
          ]
      },
      


      // meal3
       {
        name: "Honey Garlic Salmon",
        img: "./images/Honey Garlic Salmon.avif",
        desc: "Pan-seared salmon with a sweet and savory glaze",
        rating: 4.9,
        reviews: 187,
        prep: "10 min",
        cook: "15 min",
        servings: "2 peaple",
        difficulty: "Easy",
        category: "Seafood",
        ingredients: ["2 salmon fillets (6oz each)", "3 tablespoons honey", "2 tablespoons soy sauce", "4 cloves garlic, minced",
          "1 tablespoon olive oil", "1 teaspoon fresh ginger, grated", "Sesame seeds for garnish", "Green onions, sliced" 
        ],
        instructions: ["Pat salmon fillets dry with paper towels. Season with salt and pepper.",
          "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
          "Heat olive oil in a large skillet over medium-high heat.",
          "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
          "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
          "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "380 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "35g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "28g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "14g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "0g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "720mg" },
        ],
        tips: ["Don't overcook salmon - it should be slightly pink in the center",
          "Use wild-caught salmon for best flavor and nutrition",
          "Let the sauce caramelize slightly for deeper flavor",
          "Pair with steamed broccoli or asparagus for a complete meal",
          ]
      },




      // meal4
       {
        name: "Lasagna Bolognese",
        img: "./images/Lasagna Bolognese.avif",
        desc: "Layered Italian pasta with rich meat sauce and béchamel",
        rating: 4.9,
        reviews: 478,
        prep: "30 min",
        cook: "90 min",
        servings: "4 peaple",
        difficulty: "Intermediate",
        category: "Italian",
        ingredients: ["12 lasagna sheets", "500g ground beef", "400g canned tomatoes", "1 onion, diced",
          "2 carrots, diced", "500ml béchamel sauce", "200g mozzarella, grated", "100g parmesan cheese","Fresh basil" 
        ],
        instructions: ["Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
          "Cook lasagna sheets according to package directions. Drain and set aside.",
          "Preheat oven to 180°C (350°F).",
          "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
          "Top final layer with béchamel, mozzarella, and parmesan cheese.",
          "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "680 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "42g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "58g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "28g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "6g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "920mg" },
        ],
        tips: ["Make bolognese sauce a day ahead for better flavor",
          "Don't skip the resting time after baking",
          "Use fresh pasta sheets for best texture",
          "Freeze leftovers in individual portions",
          ]
      },


      // meal5
       {
        name: "Chicken Stir-Fry",
        img: "./images/Chicken Stir-Fry.avif",
        desc: "Quick and healthy stir-fry with colorful vegetables",
        rating: 4.5,
        reviews: 324,
        prep: "15 min",
        cook: "15 min",
        servings: "4 peaple",
        difficulty: "Easy",
        category: "Asian",
        ingredients: ["500g chicken breast, sliced", "2 bell peppers, sliced", "1 broccoli head, florets", "2 carrots, julienned",
          "3 tablespoons soy sauce", "2 tablespoons oyster sauce", "1 tablespoon sesame oil", "2 cloves garlic minced","Fresh ginger, grated" 
        ],
        instructions: ["Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
          "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
          "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
          "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
          "Serve immediately over steamed rice or noodles.",
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "320 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "34g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "18g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "12g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "5g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "840mg" },
        ],
        tips: ["Cut all ingredients before starting to cook",
          "Keep heat high for authentic stir-fry texture",
          "Keep heat high for authentic stir-fry texture",
          "Add cashews or peanuts for extra crunch",
          ]
      },   


      // meal6
       {
        name: "BBQ Pulled Pork",
        img: "./images/BBQ Pulled Pork.avif",
        desc: "Slow-cooked tender pork in smoky barbecue sauce",
        rating: 4.7,
        reviews: 412,
        prep: "15 min",
        cook: "240 min",
        servings: "4 peaple",
        difficulty: "Easy",
        category: "American",
        ingredients: ["1kg pork shoulder", "1 cup BBQ sauce", "1/2 cup apple cider vinegar", "2 tablespoons brown sugar",
          "1 tablespoon paprika", "1 tablespoon garlic powder", "Burger buns", "Coleslaw for serving" 
        ],
        instructions: ["Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
          "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
          "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
          "Remove pork and shred with two forks. Discard excess fat.",
          "Return shredded pork to slow cooker, mix with BBQ sauce.",
          "Serve on toasted buns with coleslaw on top."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "620 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "48g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "52g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "22g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "3g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "1180mg" },
        ],
        tips: ["Use pork shoulder for best results - it stays moist",
          "Let pork rest before shredding for juicier meat",
          "Make your own BBQ sauce for better flavor",
          "Leftovers freeze well for up to 3 months",
          ]
      },




      // meal7
       {
        name: "Shrimp Scampi",
        img: "./images/Shrimp Scampi.avif",
        desc: "Garlicky shrimp in white wine butter sauce",
        rating: 4.8,
        reviews: 356,
        prep: "10 min",
        cook: "15 min",
        servings: "2 peaple",
        difficulty: "Easy",
        category: "Seafood",
        ingredients: ["400g large shrimp, peeled", "300g linguine pasta", "6 cloves garlic, minced", "1/2 cup white wine",
          "4 tablespoons butter", "2 tablespoons olive oil", "Fresh parsley, chopped", "Lemon juice and zest","Red pepper flakes" 
        ],
        instructions: ["Cook linguine according to package directions. Reserve 1 cup pasta water.",
          "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
          "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
          "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
          "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
          "Garnish with parsley, lemon zest, and serve immediately."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "520 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "36g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "54g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "18g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "3g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "620mg" },
        ],
        tips: ["Don't overcook shrimp - they cook very quickly",
          "Use good quality white wine for best flavor",
          "Toss pasta in sauce for maximum flavor absorption",
          "Add extra lemon for bright, fresh taste",
          ]
      },




      // meal8
       {
        name: "Chicken Tikka Masala",
        img: "./images/Chicken Tikka Masala.avif",
        desc: "Rich and creamy Indian curry with tender chicken pieces",
        rating: 4.7,
        reviews: 389,
        prep: "20 min",
        cook: "30 min",
        servings: "4 peaple",
        difficulty: "Intermediate",
        category: "Asian",
        ingredients: ["600g chicken breast, cubed", "1 cup plain yogurt", "2 tablespoons tikka masala paste", "400ml coconut cream",
          "1 onion, diced", "4 cloves garlic, minced", "2 tablespoons ginger, grated", "400g canned tomatoes","Fresh cilantro for garnish" 
        ],
        instructions: ["Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
          "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
          "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
          "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
          "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
          "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "450 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "38g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "24g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "22g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "4g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "720mg" },
        ],
        tips: ["Marinate chicken overnight for deeper flavor",
          "Use full-fat coconut cream for richest sauce",
          "Adjust spice level by varying the tikka paste amount",
          "Serve with naan bread and basmati rice",
          ]
      },



      // meal9
       {
        name: "Classic Beef Burger",
        img: "./images/Classic Beef Burger.avif",
        desc: "Juicy homemade burger with all the fixings",
        rating: 4.6,
        reviews: 421,
        prep: "15 min",
        cook: "20 min",
        servings: "4 peaple",
        difficulty: "Easy",
        category: "American",
        ingredients: ["500g ground beef (80/20)", "4 burger buns", "4 slices cheddar cheese", "Lettuce leaves",
          "Tomato slices", "Red onion, sliced", "Pickles", "Burger sauce or condiments" 
        ],
        instructions: ["Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
          "Season patties generously with salt and pepper on both sides.",
          "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
          "Add cheese slices in the last minute of cooking and cover to melt.",
          "Toast burger buns lightly on the grill or in a pan.",
          "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "450 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "38g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "42g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "35g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "2g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "920mg" },
        ],
        tips: ["Don't press down on burgers while cooking - keeps them juicy",
          "Make indent in center to prevent burger from puffing up",
          "Let patties rest for 2-3 minutes before serving",
          "Toast buns for better texture and flavor",
          ]
      },




      // meal10
       {
        name: "Beef Tacos",
        img: "./images/Beef Tacos.avif",
        desc: "Flavorful Mexican tacos with seasoned ground beef",
        rating: 4.6,
        reviews: 278,
        prep: "15 min",
        cook: "20 min",
        servings: "4 peaple",
        difficulty: "Easy",
        category: "American",
        ingredients: ["500g ground beef", "8 taco shells", "1 onion, diced", "2 tablespoons taco seasoning",
          "Shredded lettuce", "Diced tomatoes", "Shredded cheddar cheese", "Sour cream","Salsa" 
        ],
        instructions: ["Heat a large skillet over medium-high heat. Cook ground beef until browned.",
          "Add diced onion and cook until softened, about 5 minutes.",
          "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
          "Warm taco shells according to package directions.",
          "Fill each shell with seasoned beef.",
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "420 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "26g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "32g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "20g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "4g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "780mg" },
        ],
        tips: ["Drain excess fat from beef for healthier tacos",
          "Warm shells in oven for better texture",
          "Prepare all toppings before cooking beef",
          "Use ground turkey for a lighter option",
          ]
      },



      // meal11
       {
        name: "Thai Green Curry",
        img: "./images/Thai Green Curry.avif",
        desc: "Vibrant and aromatic curry with vegetables and coconut milk",
        rating: 4.7,
        reviews: 312,
        prep: "15 min",
        cook: "25 min",
        servings: "4 peaple",
        difficulty: "Intermediate",
        category: "Asian",
        ingredients: ["2 tablespoons green curry paste", "400ml coconut milk", "300g chicken breast, sliced", "1 red bell pepper, sliced",
          "100g green beans", "1 eggplant, cubed", "2 tablespoons fish sauce", "1 tablespoon palm sugar","Fresh Thai basil leaves" 
        ],
        instructions: ["Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
          "Add half the coconut milk and stir to combine with the curry paste.",
          "Add sliced chicken and cook until no longer pink, about 5 minutes.",
          "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
          "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
          "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "420 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "26g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "22g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "26g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "5g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "890mg" },
        ],
        tips: ["Adjust spice level by using more or less curry paste",
          "Add vegetables in stages based on cooking time needed",
          "Fresh Thai basil is essential for authentic flavor",
          "Use full-fat coconut milk for richest, creamiest sauce",
          ]
      },




      // meal12
       {
        name: "Teriyaki Chicken Bowl",
        img: "./images/Teriyaki Chicken Bowl.avif",
        desc: "Sweet and savory chicken over rice with vegetables",
        rating: 4.7,
        reviews: 367,
        prep: "15 min",
        cook: "20 min",
        servings: "2 peaple",
        difficulty: "Easy",
        category: "Asian",
        ingredients: ["400g chicken thighs, sliced", "1/2 cup teriyaki sauce", "2 cups cooked rice", "1 broccoli head, florets",
          "1 carrot, julienned", "Sesame seeds", "Green onions, sliced", "1 tablespoon sesame oil" 
        ],
        instructions: ["Heat sesame oil in a pan. Cook chicken until browned on all sides.",
          "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
          "Meanwhile, steam broccoli and carrots until tender-crisp.",
          "Divide rice between bowls.",
          "Top with teriyaki chicken and steamed vegetables.",
          "Garnish with sesame seeds and green onions. Serve hot."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "540 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "42g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "58g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "14g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "4g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "1240mg" },
        ],
        tips: ["Use chicken thighs for juicier meat",
          "Make homemade teriyaki sauce for better flavor control",
          "Add edamame for extra protein",
          "Meal prep by cooking rice and chicken ahead",
          ]
      },



      // meal13
       {
        name: "French Onion Soup",
        img: "./images/French Onion Soup.avif",
        desc: "Rich beef broth with caramelized onions and melted cheese",
        rating: 4.7,
        reviews: 267,
        prep: "15 min",
        cook: "60 min",
        servings: "4 peaple",
        difficulty: "Intermediate",
        category: "Mediterranean",
        ingredients: ["4 large onions, thinly sliced", "4 tablespoons butter", "1 liter beef broth", "1/2 cup white wine",
          "2 bay leaves", "Fresh thyme", "Baguette slices", "200g Gruyère cheese, grated" 
        ],
        instructions: ["Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
          "Add white wine and deglaze the pot, scraping up brown bits.",
          "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
          "Meanwhile, toast baguette slices until golden.",
          "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
          "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "380 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "18g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "36g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "18g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "4g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "980mg" },
        ],
        tips: ["Patience is key - don't rush the onion caramelization",
          "Use good quality beef broth for best flavor",
          "Gruyère can be substituted with Swiss cheese",
          "Watch carefully when broiling to avoid burning",
          ]
      },



      // meal14
       {
        name: "Pad Thai",
        img: "./images/Pad Thai.avif",
        desc: "Popular Thai stir-fried noodles with shrimp and peanuts",
        rating: 4.8,
        reviews: 445,
        prep: "20 min",
        cook: "15 min",
        servings: "2 peaple",
        difficulty: "Intermediate",
        category: "Asian",
        ingredients: ["200g rice noodles", "200g shrimp, peeled", "2 eggs", "3 tablespoons tamarind paste",
          "2 tablespoons fish sauce", "1 tablespoon palm sugar", "Bean sprouts", "Crushed peanuts","Lime wedges and cilantro" 
        ],
        instructions: ["Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
          "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
          "Heat wok over high heat. Scramble eggs and set aside.",
          "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
          "Add scrambled eggs and bean sprouts. Toss everything together.",
          "Serve topped with crushed peanuts, lime wedges, and cilantro."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "5400 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "32g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "62g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "16g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "4g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "1120mg" },
        ],
        tips: ["Don't oversoak noodles or they'll be mushy",
          "Cook on high heat for authentic wok flavor",
          "Balance sweet, sour, and salty flavors",
          "Prepare all ingredients before starting to cook",
          ]
      },



      // meal15
       {
        name: "Caesar Salad",
        img: "./images/Caesar Salad.avif",
        desc: "Classic salad with crispy romaine and creamy dressing",
        rating: 4.4,
        reviews: 198,
        prep: "15 min",
        cook: "0 min",
        servings: "2 peaple",
        difficulty: "Easy",
        category: "Mediterranean",
        ingredients: ["1 large romaine lettuce", "1/2 cup Caesar dressing", "1/2 cup parmesan cheese, shaved", "1 cup croutons",
          "2 anchovy fillets (optional)", "Lemon wedges", "Black pepper"
        ],
        instructions: ["Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
          "Place lettuce in a large salad bowl.",
          "Add Caesar dressing and toss until evenly coated.",
          "Add croutons and half the parmesan cheese. Toss gently.",
          "Top with remaining parmesan shavings and anchovies if using.",
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "320 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "12g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "18g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "22g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "3g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "680mg" },
        ],
        tips: ["Use cold, crisp lettuce for best texture",
          "Make homemade croutons for better flavor",
          "Add grilled chicken for a complete meal",
          "Don't dress salad until ready to serve",
          ]
      },



      // meal16
       {
        name: "Caprese Sandwich",
        img: "./images/Caprese Sandwich.avif",
        desc: "Fresh Italian sandwich with mozzarella, tomato, and basil",
        rating: 4.5,
        reviews: 189,
        prep: "10 min",
        cook: "5 min",
        servings: "2 peaple",
        difficulty: "Easy",
        category: "Italian",
        ingredients: ["1 ciabatta bread", "200g fresh mozzarella, sliced", "2 large tomatoes, sliced", "Fresh basil leaves",
          "3 tablespoons pesto", "2 tablespoons balsamic glaze", "Olive oil", "Salt and pepper"
        ],
        instructions: ["Slice ciabatta bread in half horizontally.",
          "Toast bread lightly until just crispy.",
          
          "Spread pesto on both sides of bread.",
          "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
          "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
          "Close sandwich, cut in half, and serve immediately."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "480 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "22g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "48g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "22g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "3g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "680mg" },
        ],
        tips: ["Use ripe, in-season tomatoes for best flavor",
          "Buffalo mozzarella is traditional but harder to slice",
          "Toast bread lightly - not too crispy",
          "Add prosciutto or salami for a heartier sandwich",
          ]
      },


      // meal17
       {
        name: "Mediterranean Quinoa Bowl",
        img: "./images/Mediterranean Quinoa Bowl.avif",
        desc: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        rating: 4.5,
        reviews: 156,
        prep: "20 min",
        cook: "35 min",
        servings: "2 peaple",
        difficulty: "Easy",
        category: "Mediterranean",
        ingredients: ["1 cup quinoa", "Cherry tomatoes, halved", "Cucumber, diced", "Red onion, sliced",
          "Kalamata olives", "Feta cheese, crumbled", "Fresh parsley", "Tahini dressing" 
        ],
        instructions: ["Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
          "While quinoa cooks, prepare all vegetables and set aside.",
          "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
          "Fluff cooked quinoa with a fork and let cool slightly.",
          "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
          "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "480 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "18g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "58g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "20g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "10g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "540mg" },
        ],
        tips: ["Rinse quinoa well to remove bitter coating",
          "Let quinoa cool before adding fresh ingredients",
          "Make extra tahini dressing - it keeps well in the fridge",
          "Add grilled chicken or chickpeas for extra protein",
          ]
      },



      // meal18
       {
        name: "Greek Moussaka",
        img: "./images/Greek Moussaka.avif",
        desc: "Traditional layered eggplant casserole with lamb",
        rating: 4.8,
        reviews: 234,
        prep: "30 min",
        cook: "60 min",
        servings: "4 peaple",
        difficulty: "Intermediate",
        category: "Mediterranean",
        ingredients: ["3 large eggplants, sliced", "500g ground lamb", "400g canned tomatoes", "1 onion, diced",
          "3 cloves garlic, minced", "500ml béchamel sauce", "100g parmesan cheese", "Cinnamon and oregano","Olive oil" 
        ],
        instructions: ["Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
          "Brush eggplant slices with olive oil, grill or bake until softened.",
          "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
          "Preheat oven to 180°C (350°F).",
          "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "580 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "36g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "32g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "32g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "8g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "820mg" },
        ],
        tips: ["Salt eggplant to remove bitterness",
          "Don't skip the resting time - it helps set the layers",
          "Use ground beef if lamb is unavailable",
          "Make ahead and reheat for easier serving",
          ]
      },



      // meal19
       {
        name: "Margherita Pizza",
        img: "./images/Margherita Pizza.avif",
        desc: "Classic Italian pizza with fresh mozzarella and basil",
        rating: 4.9,
        reviews: 512,
        prep: "90 min",
        cook: "12 min",
        servings: "2 peaple",
        difficulty: "Intermediate",
        category: "Italian",
        ingredients: ["300g pizza dough", "200g crushed tomatoes", "250g fresh mozzarella", "Fresh basil leaves",
          "2 tablespoons olive oil", "2 cloves garlic, minced", "Salt and pepper to taste", "Parmesan cheese for topping" 
        ],
        instructions: ["Let pizza dough come to room temperature and rest for 1 hour.",
          "Preheat oven to maximum temperature (usually 250°C/480°F).",
          "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
          "Roll out dough on a floured surface to desired thickness.",
          "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
          "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."
          ],

        nutrition: [
          { slogan: `<i class="fa-solid fa-fire"></i>`, label: "Calories", value: "580 kcal" },
          { slogan: `<i class="fa-solid fa-dumbbell"></i>`, label: "Protein", value: "24g" },
          { slogan: `<i class="fa-solid fa-wheat-awn-circle-exclamation"></i>`, label: "Carbohydrates", value: "68g" },
          { slogan: `<i class="fa-solid fa-droplet"></i>`, label: "Fat", value: "22g" },
          { slogan: `<i class="fas fa-seedling"></i>`, label: "Fiber", value: "4g" },
          { slogan: `<i class="fa-solid fa-cube"></i>`, label: "Sodium", value: "920mg" },
        ],
        tips: ["Use a pizza stone for crispier crust",
          "Don't overload with toppings - less is more",
          "Add basil after baking to keep it fresh",
          "Let dough rest properly for best texture",
          ]
      },


    ];

   

    function renderNutritionCards(nutArray) {
      const nutList = document.getElementById("nut-list");
      nutList.innerHTML = "";
      nutArray.forEach(n => {
        const cls = colorClassForLabel(n.label);
        
        const iconHTML = n.slogan || '<i class="fa-solid fa-fire"></i>';
        nutList.innerHTML += `
          <div class="col-6">
            <div class="nut-card">
              <div class="nut-left">
                <div class="nut-icon ${cls}">${iconHTML}</div>
                <div><div class="nut-label">${n.label}</div></div>
              </div>
              <div class="nut-value fw-bold">${n.value}</div>
            </div>
          </div>
        `;
      });
    }

    function loadRandomMeal() {
      
      const meal = meals[Math.floor(Math.random() * meals.length)];

      
      document.getElementById("meal-img").src = meal.img;
      document.getElementById("meal-name").textContent = meal.name;
      document.getElementById("meal-desc").textContent = meal.desc;
      document.getElementById("rating").textContent = meal.rating;
      document.getElementById("reviews").textContent = `(${meal.reviews} reviews)`;

      document.getElementById("prep").textContent = meal.prep;
      document.getElementById("cook").textContent = meal.cook;
      document.getElementById("serve").textContent = meal.servings;

      document.getElementById("difficulty").textContent = meal.difficulty;
      document.getElementById("category").textContent = meal.category;

      
      const totalMinutes = toMinutes(meal.prep) + toMinutes(meal.cook);
      if (totalMinutes > 45) {
        warningBox.style.display = 'block';
      } else {
        warningBox.style.display = 'none';
      }

      // INGREDIENTS
      const ingList = document.getElementById("ing-list");
      ingList.innerHTML = "";
      meal.ingredients.forEach((i, index) => ingList.innerHTML += `<li class='list-group-item d-flex align-items-center'><span>${index+1}</span> ${i}</li>`);

      // INSTRUCTIONS
      const instList = document.getElementById("inst-list");
      instList.innerHTML = "";
      meal.instructions.forEach((i, index) => instList.innerHTML += `<li class='list-group2-item d-flex align-items-center'><span>${index+1}</span> ${i}</li>`);

      // NUTRITION
      renderNutritionCards(meal.nutrition);

      // TIPS 
      const tipsList = document.getElementById("tips-list");
      tipsList.innerHTML = "";
      meal.tips.forEach(t => tipsList.innerHTML += `<li class='list-grou-item d-flex align-items-center'> <span> <i class="fa-solid fa-circle-check"></i> </span>${t}</li>`);

     
      recipeBox.classList.remove("d-none");
     
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll('.tab-content-box').forEach(box => box.classList.add('d-none'));
      const nutBtn = document.querySelector('.tab-btn[data-target="nut"]');
      if (nutBtn) nutBtn.classList.add('active');
      const nutBox = document.getElementById('nut');
      if (nutBox) nutBox.classList.remove('d-none');
    }

    
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        document.querySelectorAll('.tab-content-box').forEach(box => box.classList.add('d-none'));
        const target = document.getElementById(btn.dataset.target);
        if (target) target.classList.remove("d-none");
      });
    });

    document.getElementById("try-btn").addEventListener("click", loadRandomMeal);

    
    if (typeof meals !== 'undefined' && Array.isArray(meals) && meals.length > 0) {
      loadRandomMeal();
    } else {
      console.error('Meals array not found. Paste your meals dataset into the file.');
    }