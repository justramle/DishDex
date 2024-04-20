
import header_img from './logo.jpeg'
import search_icon from './search_icon.png'


import menu_1 from './menu_1.jpeg'
import menu_2 from './menu_2.jpeg'
import menu_3 from './menu_3.jpeg'
import menu_4 from './menu_4.jpeg'
import menu_6 from './menu_6.jpeg'
import menu_7 from './menu_7.jpeg'
import menu_8 from './menu_8.jpeg'

import food_1 from './food_1.jpg'
import food_2 from './food_2.jpeg'
import food_3 from './food_3.webp'
import food_4 from './food_4.webp'
import food_5 from './food_5.webp'
import food_6 from './food_6.jpeg'
import food_7 from './food_7.jpeg'
import food_8 from './food_8.jpeg'
import food_9 from './food_9.jpeg'
import food_10 from './food_10.jpg'
import food_11 from './food_11.jpg'
import food_12 from './food_12.jpg'
import food_13 from './food_13.jpg'
import food_14 from './food_14.jpg'
import food_15 from './food_15.jpg'
import food_16 from './food_16.jpg'
import food_17 from './food_17.jpg'
import food_18 from './food_18.jpg'
import food_19 from './food_19.jpg'
import food_20 from './food_20.jpg'
import food_21 from './food_21.jpg'
import food_22 from './food_22.jpg'
import food_23 from './food_23.jpg'
import food_24 from './food_24.jpg'
import food_25 from './food_25.jpg'
import food_26 from './food_26.jpeg'
import food_27 from './food_27.jpeg'
import food_28 from './food_28.jpeg'
import food_29 from './food_29.jpeg'

import add_icon_white from './add_icon_like.jpeg'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'


export const assets = {
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    profile_icon,
   
}

export const menu_list = [
    {
        menu_name: "Salads",
        menu_image: menu_1
    },
    {
        menu_name: "Burritos",
        menu_image: menu_2
    },
    {
        menu_name: "Desserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwiches",
        menu_image: menu_4
    },
    
    {
        menu_name: "Vegan",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Soups",
        menu_image: menu_8
    }]

export const food_list = [
    {
        _id: "1",
        name: "Greek salad",
        image: food_1,
        time: "15 mins",
        category: "Salads",
        creator: "Robert",
        rating: 70,
        likes: 117,
        prepTime: 15,
        totalTime: 15,
        serves: 4,
        description: "This easy Greek salad recipe is our new favorite summer side dish. Refreshing & delicious.",
        completeDes: "This easy Greek salad recipe is our new favorite summer side dish! If you make it ahead for a gathering, save a few mint leaves to add right before serving.",
        ingredients: [
            { title: 'Dressing', items: ['¼ cup extra-virgin olive oil', '3 tablespoons red wine vinegar', '1 garlic clove, minced', '½ teaspoon dried oregano', '¼ teaspoon Dijon mustard', '¼ teaspoon sea salt', 'Freshly ground black pepper'] },
            { title: 'For the salad', items: ['1 English cucumber, cut lengthwise', '1 green bell pepper, chopped', '2 cups halved cherry tomatoes', '5 ounces feta cheese', '⅓ cup thinly sliced red onion', '⅓ cup pitted Kalamata olives', '⅓ cup fresh mint leaves'] },
          ],
        instructions: [
            "Make the dressing: In a small bowl, whisk together the olive oil, vinegar, garlic, oregano, mustard, salt, and several grinds of pepper.",
            "On a large platter, arrange the cucumber, green pepper, cherry tomatoes, feta cheese, red onions, and olives. Drizzle with the dressing and very gently toss. Sprinkle with a few generous pinches of oregano and top with the mint leaves. Season to taste and serve."
          ],
    },
    {
        _id: "2",
        name: "Fruity Balsamic Tofu Salad",
        image: food_2,
        time: "30 mins",
        category: "Salads",
        creator: "John",
        description: "Perfect way to usher in the new season! gluten-free and of course: vegan",
        completeDes: "A vibrant mix of fresh fruits and hearty tofu, all brought together with a tangy balsamic dressing. Ideal for those who love a sweet and savory combination.",
        rating: 85, // Assuming a rating out of 100
        likes: 95, // Assuming number of likes
        prepTime: 30,
        totalTime: 30,
        serves: 2,
        ingredients: [
            { title: 'For the salad', items: ['1 block firm tofu, pressed and cubed', '2 cups mixed greens', '1 cup fresh strawberries, sliced', '1 orange, peeled and segmented', '¼ cup almonds, toasted', '1 tablespoon sesame seeds'] },
            { title: 'Balsamic Dressing', items: ['3 tablespoons balsamic vinegar', '1 tablespoon maple syrup', '1 teaspoon Dijon mustard', '⅓ cup extra-virgin olive oil', 'Salt and pepper to taste'] },
        ],
        instructions: [
            "In a bowl, combine the balsamic vinegar, maple syrup, and Dijon mustard. Gradually whisk in the olive oil until the dressing is emulsified. Season with salt and pepper.",
            "In a large bowl, toss the mixed greens, strawberries, orange segments, and tofu with the dressing until well coated.",
            "Transfer the salad to a serving platter, sprinkle with toasted almonds and sesame seeds, and serve immediately.",
        ],
    }, {
        _id: "3",
        name: "Rainbow Chopped Salad with Basil & Mozzarella",
        image: food_3,
        time: "30 mins",
        category: "Salads",
        creator: "David",
        description: "Fresh and colorful chopped salad. Classic caprese salad.",
        completeDes: "A delightful salad packed with the colors of the rainbow, featuring ripe tomatoes, fresh basil, and creamy mozzarella. A perfect dish to brighten up any meal.",
        rating: 90, 
        likes: 75, 
        prepTime: 20,
        totalTime: 30,
        serves: 4,
        ingredients: [
            { title: 'For the salad', items: ['2 cups cherry tomatoes, halved', '1 cup mozzarella balls', '1 yellow bell pepper, diced', '1 small red onion, thinly sliced', '1/2 cup fresh basil leaves, torn', '1/2 cup mixed olives', 'Salt and pepper to taste'] },
            { title: 'Balsamic Glaze', items: ['1/2 cup balsamic vinegar', '2 tablespoons honey'] },
        ],
        instructions: [
            "For the balsamic glaze: In a small saucepan, combine balsamic vinegar and honey. Simmer over medium heat until reduced by half and the mixture coats the back of a spoon.",
            "In a large mixing bowl, combine the tomatoes, mozzarella balls, yellow bell pepper, red onion, and olives. Season with salt and pepper.",
            "Drizzle the balsamic glaze over the salad and gently toss to combine.",
            "Garnish with fresh basil leaves just before serving. Serve as a refreshing starter or a light main course."
        ],
    }, {
        _id: "4",
        name: "Garlic-and-Herb Potato Salad",
        image: food_4,
        time: "45 mins",
        category: "Salads",
        creator: "Marry",
        description: "Mayo and potatoes. This gorgeous vinegar-based potato salad for you.",
        completeDes: "A tangy and herby potato salad that's a perfect side for barbecues or picnics. Garlic and fresh herbs combine to give a punch of flavor.",
        rating: 85,     
        likes: 92,  
        prepTime: 20,
        totalTime: 45,
        serves: 6,
        ingredients: [
            { title: 'For the potato salad', items: ['2 pounds baby potatoes, halved', '1/4 cup olive oil', '3 tablespoons apple cider vinegar', '1 tablespoon Dijon mustard', '2 cloves garlic, minced', '1/2 cup chopped fresh parsley', '1/4 cup chopped fresh dill', 'Salt and pepper to taste'] },
        ],
        instructions: [
            "Place the potatoes in a large pot of salted water. Bring to a boil and cook until the potatoes are tender, about 15 minutes. Drain and let cool slightly.",
            "In a large bowl, whisk together olive oil, apple cider vinegar, Dijon mustard, and minced garlic.",
            "Add the potatoes to the dressing while still warm, then add parsley and dill. Toss to coat evenly.",
            "Season with salt and pepper to taste. Serve warm or at room temperature."
        ],
    },{
        _id: "5",
        name: "Vegetarian Breakfast Burrito",
        image: food_5,
        time: "10 mins",
        category: "Burritos",
        creator: "Joseph",
        description: "Tasty mix of ingredients. A great way to get your day off to a good start.",
        completeDes: "Loaded with eggs, cheese, and veggies, these burritos are both nutritious and delicious. Wrap up your morning with a burst of flavor!",
        rating: 88,
        likes: 103,
        prepTime: 5,
        totalTime: 10,
        serves: 2,
        ingredients: [
            { title: 'Ingredients', items: ['2 large flour tortillas', '4 eggs, beaten', '1/2 cup shredded cheddar cheese', '1/4 cup diced red bell pepper', '1/4 cup diced green bell pepper', '1/4 cup diced onion', '1/4 cup chopped spinach', 'Salt and pepper to taste', 'Salsa, for serving'] }
        ],
        instructions: [
            "Heat a non-stick skillet over medium heat. Add the onions and bell peppers, and sauté until soft, about 3 minutes.",
            "Add the beaten eggs and chopped spinach to the skillet. Scramble the eggs until they are just set. Stir in the cheese and cook until melted. Season with salt and pepper.",
            "Warm the tortillas in the microwave or on another skillet to make them pliable.",
            "Divide the egg mixture evenly among the tortillas. Fold the bottom of each tortilla up over the filling, then fold in the sides and roll up tightly.",
            "Serve the burritos warm, with salsa on the side for dipping."
        ],
    }, {
        _id: "6",
        name: "Easy Beef Burrito",
        image: food_6,
        time: "15 mins",
        category: "Burritos",
        creator: "Christopher",
        description: "This is truly the easiest burrito recipe to make at home — and they're freezer-friendly!",
        completeDes: "Simple yet delicious, these beef burritos are perfect for quick dinners or make-ahead meals. Packed with savory ground beef, rice, and beans, they’re hearty and satisfying.",
        rating: 92,
        likes: 200,
        prepTime: 5,
        totalTime: 15,
        serves: 4,
        ingredients: [
            { title: 'Beef filling', items: ['1 lb ground beef', '1 onion, chopped', '2 cloves garlic, minced', '1 packet taco seasoning', '1/2 cup water'] },
            { title: 'Assembly', items: ['4 large flour tortillas', '1 cup cooked rice', '1 cup canned black beans, rinsed and drained', '1 cup shredded cheddar cheese', '1/2 cup salsa', 'Sour cream, for serving', 'Guacamole, for serving'] }
        ],
        instructions: [
            "In a skillet over medium heat, cook the ground beef until browned. Add the onion and garlic, and cook until soft. Stir in taco seasoning and water. Simmer for 5 minutes until the mixture thickens.",
            "Lay out the tortillas on a flat surface. Divide the cooked rice evenly among the tortillas, followed by the beef mixture, black beans, and cheese.",
            "Fold the bottom of each tortilla up over the filling, then fold in the sides and roll up tightly.",
            "Heat a large skillet over medium heat. Place burritos seam side down and cook until golden, about 2 minutes per side.",
            "Serve hot with salsa, sour cream, and guacamole."
        ],
    }, {
        _id: "7",
        name: "7-layer Chicken Burrito",
        image: food_7,
        time: "25 mins",
        category: "Burritos",
        creator: "William",
        description: "This easy chicken burrito recipe has all the makings of the classic layered party dip.",
        completeDes: "Packed with layers of flavor, this 7-layer chicken burrito is perfect for a filling meal or a hearty snack. With layers of chicken, beans, rice, veggies, and more, it's a delicious twist on traditional burritos.",
        rating: 95,
        likes: 150,
        prepTime: 10,
        totalTime: 25,
        serves: 4,
        ingredients: [
            { title: 'Chicken', items: ['2 chicken breasts, cooked and shredded', '1 tsp chili powder', '1 tsp cumin', 'Salt and pepper to taste'] },
            { title: 'Layers', items: ['4 large flour tortillas', '1 cup refried beans, warmed', '1 cup Mexican rice', '1 cup guacamole', '1 cup sour cream', '1 cup salsa', '1 cup shredded lettuce', '1 cup shredded cheddar cheese'] }
        ],
        instructions: [
            "Season the shredded chicken with chili powder, cumin, salt, and pepper. Set aside.",
            "To assemble the burritos, lay out the tortillas on a flat surface. Spread each with a layer of refried beans, followed by a layer of Mexican rice.",
            "Add a layer of seasoned chicken to each tortilla, then top with guacamole, sour cream, salsa, lettuce, and shredded cheese.",
            "Fold the bottom of the tortilla up over the filling, then fold in the sides and roll up tightly.",
            "Grill the burritos on a hot skillet for about 2 minutes on each side until the tortillas are golden brown and crispy.",
            "Serve hot, sliced in half to show off the layers."
        ],
        
    }, {
        _id: "8",
        name: "Shredded Chicken Burrito",
        image: food_8,
        time: "30 mins",
        category: "Burritos",
        creator: "Jennifer",
        description: "This Shredded Chicken Burrito comes together in about 30 minutes but also makes a great freezer meal.",
        completeDes: "Enjoy a deliciously easy and versatile shredded chicken burrito, filled with juicy chicken, beans, and rice, topped with cheese and your favorite salsa. Perfect for a quick meal or a make-ahead freezer-friendly option.",
        rating: 90,
        likes: 125,
        prepTime: 10,
        totalTime: 30,
        serves: 4,
        ingredients: [
            { title: 'Chicken', items: ['2 cups shredded cooked chicken', '1 tsp garlic powder', '1 tsp onion powder', '1/2 tsp smoked paprika'] },
            { title: 'Burrito Assembly', items: ['4 large flour tortillas', '1 cup cooked black beans', '1 cup cooked rice', '1 cup shredded Monterey Jack cheese', '1/2 cup salsa', 'Sour cream (optional)', 'Cilantro (optional)'] }
        ],
        instructions: [
            "Season the shredded chicken with garlic powder, onion powder, and smoked paprika.",
            "Lay out the tortillas and evenly distribute rice, black beans, and seasoned chicken among them.",
            "Top each with shredded cheese and a spoonful of salsa.",
            "Fold the tortillas over the filling, tucking in the ends, then roll them up tightly.",
            "Heat a skillet over medium heat and cook each burrito until golden brown on both sides, about 3-4 minutes per side.",
            "Serve warm with additional salsa, sour cream, and cilantro if desired."
        ],
    }, {
        _id: "10",
        name: "Tiramisu",
        image: food_10,
        time: "35 mins",
        category: "Desserts",
        creator: "Linda",
        description: "Delicate ladyfinger biscuits soaked in a coffee syrup and creamy mascarpone cheese filling.",
        completeDes: "This classic Italian dessert combines espresso-dipped ladyfingers with a creamy lightly sweetened mascarpone cheese mixture. Layered and dusted with cocoa, it’s a timeless favorite.",
        rating: 95,
        likes: 180,
        prepTime: 15,
        totalTime: 35,
        serves: 8,
        ingredients: [
            { title: 'Coffee Syrup', items: ['2 cups strong brewed coffee, cooled', '1/3 cup coffee liqueur'] },
            { title: 'Mascarpone Filling', items: ['4 large egg yolks', '1/2 cup granulated sugar', '1/3 cup milk', '1 cup heavy cream', '1 pound mascarpone cheese'] },
            { title: 'Assembly', items: ['24 ladyfingers', 'Unsweetened cocoa powder, for dusting'] }
        ],
        instructions: [
            "Mix the brewed coffee and coffee liqueur in a shallow dish. Set aside to cool.",
            "For the filling, whisk egg yolks, sugar, and milk in a saucepan over medium heat until combined. Cook while stirring until the mixture coats the back of a spoon, approximately 5 minutes. Remove from heat, cool, then blend in mascarpone cheese.",
            "In a separate bowl, whip the heavy cream to stiff peaks. Gently fold into the mascarpone mixture.",
            "Dip each ladyfinger briefly into the coffee mixture and line them in a single layer in a 9x13 inch dish. Spread half of the mascarpone mixture over the ladyfingers.",
            "Repeat with another layer of soaked ladyfingers and top with the remaining mascarpone mixture. Smooth the top and dust with cocoa powder.",
            "Chill in the refrigerator for at least 4 hours or overnight to set.",
            "Serve chilled, dusted with more cocoa powder if desired."
        ],
       
    }, {
        _id: "11",
        name: "Honeycomb Candy",
        image: food_11,
        time: "43 mins",
        category: "Desserts",
        creator: "Alizebeth",
        description: "A crunchy treat with irresistible honey flavor and a hint of vanilla.",
        completeDes: "This honeycomb candy, also known as cinder toffee, features a light, airy texture with deep caramel notes enhanced by a touch of vanilla.",
        rating: 88,
        likes: 105,
        prepTime: 15,
        totalTime: 43,
        serves: 8,
        ingredients: [
            { title: 'Main', items: ['1 cup sugar', '5 tablespoons golden syrup', '2 teaspoons baking soda', '1 teaspoon vanilla extract'] }
        ],
        instructions: [
            "Grease a baking sheet or line it with parchment paper.",
            "In a large heavy saucepan, combine sugar and golden syrup over medium heat. Cook, stirring constantly, until sugar dissolves and mixture starts to boil.",
            "Stop stirring and boil until the mixture reaches 300°F (hard crack stage) on a candy thermometer.",
            "Remove from heat and carefully stir in baking soda and vanilla extract. The mixture will foam up.",
            "Pour immediately onto the prepared baking sheet and do not spread. Allow to cool and harden.",
            "Break into pieces once completely cooled."
        ],
        
    }, {
        _id: "12",
        name: "Cranberry Bars",
        image: food_12,
        time: "50 mins",
        category: "Desserts",
        creator: "Sussan",
        description: "A sweet and buttery shortbread crust, cranberry filling, and delicious crumble topping.",
        completeDes: "These cranberry bars are the perfect blend of tart and sweet, featuring a buttery shortbread crust, a rich cranberry filling, and a crumbly topping. Ideal for holiday gatherings or as a delightful treat any time of year.",
        rating: 92,
        likes: 120,
        prepTime: 20,
        totalTime: 50,
        serves: 16,
        ingredients: [
          { title: 'Shortbread Crust', items: ['1 cup unsalted butter, softened', '2 cups all-purpose flour', '1/2 cup granulated sugar'] },
          { title: 'Cranberry Filling', items: ['4 cups fresh cranberries', '1 cup sugar', '1 teaspoon orange zest', '1/2 cup orange juice'] },
          { title: 'Crumble Topping', items: ['1/2 cup rolled oats', '1/2 cup brown sugar', '1/4 cup all-purpose flour', '1/4 cup butter, melted'] }
        ],
        instructions: [
          "Preheat oven to 350°F (175°C). Line a 9x13 inch baking pan with parchment paper.",
          "For the crust: In a medium bowl, cream together butter and sugar until smooth. Mix in flour until dough comes together. Press into the bottom of the prepared pan.",
          "Bake the crust for 15 minutes in the preheated oven, until golden.",
          "For the filling: In a saucepan over medium heat, combine cranberries, sugar, orange zest, and orange juice. Cook, stirring occasionally, until the cranberries burst and the mixture thickens, about 15 minutes.",
          "Spread the cranberry mixture over the hot crust.",
          "For the topping: In a bowl, combine oats, brown sugar, flour, and melted butter until crumbly. Sprinkle over the cranberry layer.",
          "Bake in the preheated oven for 25 minutes, or until the top is golden brown.",
          "Allow to cool completely before cutting into bars."
        ],
    }, {
        _id: "13",
        name: "Honey Cake",
        image: food_13,
        time: "5 hrs",
        category: "Desserts",
        creator: "Daniel",
        description: "Delicious and moist honey cake, with a tangy sour cream frosting and prominent honey flavor.",
        completeDes: "This rich honey cake is made with authentic honey, layered with sour cream frosting for a delightful contrast that enhances its flavor, making it a favorite for special occasions or as a seasonal treat.",
        rating: 93,
        likes: 130,
        prepTime: 60,
        totalTime: 300,
        serves: 12,
        ingredients: [
            { title: 'Honey Cake', items: ['3 cups all-purpose flour', '1 tablespoon baking powder', '1 teaspoon baking soda', '2 teaspoons cinnamon', '1/2 teaspoon cloves', '1/2 teaspoon allspice', '1 cup vegetable oil', '1 cup honey', '1 1/2 cups granulated sugar', '1/2 cup brown sugar', '3 large eggs', '1 teaspoon vanilla extract', '1 cup warm coffee', '1/2 cup orange juice'] },
            { title: 'Sour Cream Frosting', items: ['3 cups sour cream', '1 cup confectioner\'s sugar', '1 teaspoon vanilla extract'] }
        ],
        instructions: [
            "Preheat the oven to 350°F (175°C). Grease and flour a 9x13 inch cake pan or two round cake pans.",
            "In a large bowl, whisk together flour, baking powder, baking soda, cinnamon, cloves, and allspice.",
            "Make a well in the center, and add oil, honey, white sugar, brown sugar, eggs, vanilla, coffee, and orange juice. Mix well to combine all ingredients into a smooth batter.",
            "Pour the batter into the prepared pan(s) and smooth the top.",
            "Bake in the preheated oven for about 50 minutes or until a toothpick inserted into the center comes out clean. Allow to cool in the pan for 15 minutes, then turn out onto a wire rack to cool completely.",
            "For the frosting: In a medium bowl, mix sour cream, confectioner's sugar, and vanilla until smooth. Spread evenly over the cooled cake.",
            "Chill the frosted cake in the refrigerator for at least 4 hours, preferably overnight, to set the frosting and flavors.",
            "Slice and serve chilled."
        ],
    }, {
        _id: "14",
        name: "Creamy Tomato Pasta",
        image: food_14,
        time: "25 mins",
        category: "Pasta",
        creator: "Emily",
        description: "Penne pasta tossed in a creamy tomato sauce, topped with a mix of Romano and parmesan cheese.",
        completeDes: "This comforting dish combines al dente penne pasta with a rich and creamy tomato sauce, enhanced with the sharp flavors of Romano and parmesan cheeses. It's quick to prepare and perfect for a satisfying weeknight dinner.",
        rating: 88,
        likes: 120,
        prepTime: 10,
        totalTime: 25,
        serves: 4,
        ingredients: [
            { title: 'Pasta', items: ['12 oz penne pasta'] },
            { title: 'Creamy Tomato Sauce', items: ['1 tbsp olive oil', '2 cloves garlic, minced', '1 small onion, finely chopped', '1 can (14 oz) crushed tomatoes', '1/2 cup heavy cream', '1/2 tsp salt', '1/4 tsp black pepper', '1/2 cup grated Romano cheese', '1/2 cup grated Parmesan cheese'] }
        ],
        instructions: [
            "Cook the penne pasta in a large pot of salted boiling water according to package instructions until al dente. Drain and set aside.",
            "In a large skillet, heat the olive oil over medium heat. Add the garlic and onion, and sauté until the onion becomes translucent, about 5 minutes.",
            "Add the crushed tomatoes, salt, and pepper. Simmer for 10 minutes, stirring occasionally.",
            "Reduce the heat to low and stir in the heavy cream, Romano cheese, and Parmesan cheese until well combined and the cheese is melted.",
            "Add the cooked pasta to the sauce and toss to coat evenly.",
            "Serve hot, garnished with additional grated cheese if desired."
        ],
    }, {
        _id: "15",
        name: "Chicken Marsala Pasta",
        image: food_15,
        time: "30 mins",
        category: "Pasta",
        creator: "Donna",
        description: "Tender chicken, mushrooms, and a creamy marsala sauce.",
        completeDes: "This Chicken Marsala Pasta is a delightful blend of tender chicken, earthy mushrooms, and a rich marsala wine sauce. Combined with pasta, it makes for a hearty and satisfying meal that's perfect for any night of the week.",
        rating: 90,
        likes: 135,
        prepTime: 15,
        totalTime: 30,
        serves: 4,
        ingredients: [
            { title: 'Chicken and Pasta', items: ['2 chicken breasts, thinly sliced', '8 oz fettuccine pasta', 'Salt and pepper to taste', '2 tbsp olive oil'] },
            { title: 'Marsala Sauce', items: ['1/2 lb mushrooms, sliced', '3 cloves garlic, minced', '3/4 cup Marsala wine', '1 cup chicken broth', '1 cup heavy cream', '1 tsp dried thyme'] }
        ],
        instructions: [
            "Season the chicken slices with salt and pepper. In a large skillet, heat the olive oil over medium-high heat. Add the chicken and cook until golden brown on both sides. Remove from the skillet and set aside.",
            "In the same skillet, add the mushrooms and garlic. Sauté until the mushrooms are browned and the garlic is fragrant.",
            "Deglaze the pan with Marsala wine, scraping up any browned bits from the bottom of the pan. Add chicken broth and thyme, and simmer until reduced by half.",
            "Stir in the heavy cream and return the chicken to the skillet. Simmer until the sauce thickens and the chicken is cooked through.",
            "While the sauce cooks, boil the fettuccine pasta in a pot of salted water according to package instructions until al dente. Drain.",
            "Toss the cooked pasta with the chicken and marsala sauce. Serve immediately, garnished with fresh parsley if desired."
        ],
    }, {
        _id: "16",
        name: "Garlic Butter Noodles",
        image: food_16,
        time: "20 mins",
        category: "Pasta",
        creator: "Michelle",
        description: "Noodles tossed in a light garlic sauce, sprinkled with parmesan cheese.",
        completeDes: "Simple yet irresistibly delicious, these garlic butter noodles are a quick comfort food dish. Made with just a few ingredients, they're perfect for a busy weeknight dinner or as a side dish to complement any meal.",
        rating: 87,
        likes: 110,
        prepTime: 5,
        totalTime: 20,
        serves: 4,
        ingredients: [
            { title: 'Main Ingredients', items: ['8 oz spaghetti or any long pasta', '4 tablespoons unsalted butter', '5 cloves garlic, minced', 'Salt to taste'] },
            { title: 'Finishing Touches', items: ['1/4 cup grated parmesan cheese', '2 tablespoons chopped fresh parsley', 'Black pepper to taste'] }
        ],
        instructions: [
            "Cook the pasta according to the package instructions until al dente. Drain, reserving some of the pasta water.",
            "While the pasta cooks, melt butter in a large skillet over medium heat. Add the minced garlic and sauté until fragrant but not browned, about 2 minutes.",
            "Add the drained pasta to the skillet with the garlic butter. Toss to coat the noodles thoroughly.",
            "If the pasta seems dry, add a little reserved pasta water to help the sauce coat the noodles.",
            "Stir in the grated parmesan cheese and continue to toss until the cheese is melted and the pasta is well coated.",
            "Season with salt and black pepper to taste. Garnish with chopped parsley before serving."
        ],
    }, {
        _id: "17",
        name: "Creamy Lemon Pasta",
        image: food_17,
        time: "25 mins",
        category: "Pasta",
        creator: "Kim",
        description: "Your choice of pasta in a creamy lemon and parmesan sauce.",
        completeDes: "Bright and refreshing, this creamy lemon pasta combines a silky parmesan sauce with a zest of lemon to create a beautifully balanced dish. Perfect for a light lunch or a comforting dinner.",
        rating: 89,
        likes: 123,
        prepTime: 10,
        totalTime: 25,
        serves: 4,
        ingredients: [
            { title: 'Pasta', items: ['12 oz spaghetti or your preferred pasta'] },
            { title: 'Lemon Parmesan Sauce', items: ['2 tablespoons unsalted butter', '1 tablespoon olive oil', '3 cloves garlic, minced', '1 cup heavy cream', 'Zest and juice of 1 lemon', '1 cup grated parmesan cheese', 'Salt and pepper to taste'] }
        ],
        instructions: [
            "Cook the pasta according to package instructions until al dente. Drain and set aside, reserving some of the pasta water.",
            "In a skillet, heat butter and olive oil over medium heat. Add minced garlic and sauté until fragrant, about 1 minute.",
            "Lower the heat and add the heavy cream, lemon zest, and lemon juice. Bring to a gentle simmer.",
            "Stir in the grated parmesan cheese until melted and the sauce begins to thicken. If the sauce is too thick, adjust the consistency with the reserved pasta water.",
            "Add the cooked pasta to the sauce, tossing to coat all the strands evenly.",
            "Season with salt and pepper. Serve immediately, garnished with additional parmesan and a sprinkle of fresh herbs if desired."
        ],
    }, {
        _id: "18",
        name: "Lemon Chicken Orzo Soup",
        image: food_18,
        time: "50 mins",
        category: "Soups",
        creator: "Joss",
        description: "This lemon chicken orzo soup is light, healthy, and cozy, with celery, carrots, onion, and garlic.",
        completeDes: "Perfect for chilly evenings, this lemon chicken orzo soup is a comforting blend of tender chicken, aromatic vegetables, and pasta, all simmered in a savory broth with a splash of lemon for added zest.",
        rating: 92,
        likes: 140,
        prepTime: 15,
        totalTime: 50,
        serves: 6,
        ingredients: [
            { title: 'Soup Base', items: ['2 tablespoons olive oil', '1 large onion, chopped', '2 garlic cloves, minced', '3 carrots, peeled and diced', '3 celery stalks, diced', '8 cups chicken broth', '2 bay leaves'] },
            { title: 'Add-ins', items: ['1 pound cooked chicken breast, shredded', '1 cup orzo pasta', 'Juice of 2 lemons', '2 tablespoons chopped fresh parsley', 'Salt and pepper to taste'] }
        ],
        instructions: [
            "In a large pot, heat olive oil over medium heat. Add onion, garlic, carrots, and celery, and sauté until the vegetables are softened, about 10 minutes.",
            "Pour in the chicken broth and add bay leaves. Bring to a boil, then reduce heat and simmer for 30 minutes.",
            "Add the shredded chicken and orzo to the pot. Continue to simmer until the orzo is tender, about 10 minutes.",
            "Remove from heat, discard bay leaves, and stir in lemon juice and fresh parsley. Season with salt and pepper to taste.",
            "Serve hot, with extra lemon slices and parsley for garnish if desired."
        ],
        
    }, {
        _id: "19",
        name: "Chicken Tetrazzini Soup",
        image: food_19,
        time: "40 mins",
        category: "Soups"   ,
        creator: "Andrew",
        description: "A soup made with tender chicken, mushrooms, pasta, and an amazing, creamy broth.",
        completeDes: "Chicken Tetrazzini Soup transforms the classic pasta dish into a comforting soup, incorporating creamy broth with chicken, mushrooms, and pasta, perfect for any season.",
        rating: 91,
        likes: 155,
        prepTime: 10,
        totalTime: 40,
        serves: 6,
        ingredients: [
          { title: 'Soup Base', items: ['1 tablespoon olive oil', '1 medium onion, diced', '2 garlic cloves, minced', '8 ounces mushrooms, sliced', '1/4 cup all-purpose flour', '6 cups chicken broth'] },
          { title: 'Main Ingredients', items: ['2 cups cooked chicken breast, shredded', '1 cup spaghetti or linguine, broken into pieces', '1/2 cup heavy cream', '1/4 cup grated Parmesan cheese', 'Salt and pepper to taste'] }
        ],
        instructions: [
          "In a large pot, heat olive oil over medium heat. Add onion and garlic, cook until softened. Add mushrooms and sauté until they start to release their juices.",
          "Sprinkle flour over the vegetables and stir to coat. Slowly pour in chicken broth, stirring continuously to prevent lumps.",
          "Bring the mixture to a boil, then reduce heat and let simmer for 20 minutes, or until the soup begins to thicken.",
          "Add the cooked chicken and broken pasta to the pot. Continue to simmer until the pasta is tender, about 10 minutes.",
          "Stir in heavy cream and Parmesan cheese until well combined and the cheese is melted. Season with salt and pepper to taste.",
          "Serve hot, garnished with additional Parmesan cheese and chopped parsley if desired."
        ],
    }, {
        _id: "20",
        name: "Chicken Fajita Soup",
        image: food_20,
        time: "40 mins",
        category: "Soups",
        creator: "Donna",
        description: "A simple chicken fajita soup that has all your favorite fajita flavors in a warming and cozy soup!",
        completeDes: "This Chicken Fajita Soup captures the zesty and colorful appeal of fajitas in a rich, comforting broth, loaded with chicken, peppers, and spices. It's easy to make and perfect for a hearty meal.",
        rating: 90,
        likes: 130,
        prepTime: 10,
        totalTime: 40,
        serves: 6,
        ingredients: [
          { title: 'Soup Base', items: ['1 tablespoon vegetable oil', '1 large onion, chopped', '3 bell peppers (red, yellow, green), sliced', '3 garlic cloves, minced', '2 teaspoons chili powder', '1 teaspoon cumin', '1 teaspoon paprika'] },
          { title: 'Main Ingredients', items: ['2 pounds chicken breasts, thinly sliced', '6 cups chicken broth', '1 can (14.5 oz) diced tomatoes', '1 can (15 oz) black beans, drained and rinsed', '1 cup frozen corn'] },
          { title: 'Finishing Touches', items: ['1/4 cup chopped fresh cilantro', 'Juice of 1 lime', 'Salt and pepper to taste'] }
        ],
        instructions: [
          "Heat oil in a large pot over medium heat. Add onion and bell peppers, cook until soft, about 5 minutes. Add garlic, chili powder, cumin, and paprika, and cook for another 1 minute until fragrant.",
          "Increase heat to medium-high, add chicken and cook until browned.",
          "Add chicken broth, diced tomatoes, black beans, and corn. Bring to a boil, then reduce heat and simmer for 20 minutes, or until the chicken is cooked through and the flavors are melded together.",
          "Stir in cilantro and lime juice. Season with salt and pepper to taste.",
          "Serve hot, with tortilla chips, shredded cheese, sour cream, and avocado slices for garnish if desired."
        ],
    }, {
        _id: "21",
        name: "Buffalo Chicken Soup",
        image: food_21,
        time: "35 mins",
        category: "Soups",
        creator: "Pretty",
        description: "A hearty soup made with chicken, buffalo sauce, cream cheese, and celery, finished with (optional) bleu cheese.",
        completeDes: "This Buffalo Chicken Soup combines the classic flavors of Buffalo wings into a creamy, spicy soup that's both comforting and exhilarating. Perfect for those who love a little heat with their comfort food.",
        rating: 85,
        likes: 100,
        prepTime: 10,
        totalTime: 35,
        serves: 4,
        ingredients: [
          { title: 'Soup Base', items: ['2 tablespoons unsalted butter', '1 onion, diced', '2 celery stalks, diced', '2 garlic cloves, minced', '1/3 cup buffalo wing sauce', '4 cups chicken broth'] },
          { title: 'Main Ingredients', items: ['1 pound cooked chicken breast, shredded', '1 cup heavy cream', '8 oz cream cheese, cubed', 'Salt and pepper to taste'] },
          { title: 'For Garnish', items: ['Crumbled bleu cheese (optional)', 'Chopped fresh parsley'] }
        ],
        instructions: [
          "In a large pot, melt butter over medium heat. Add onion and celery, and sauté until they begin to soften, about 5 minutes. Add garlic and sauté for another minute until fragrant.",
          "Stir in buffalo wing sauce and cook for 1 minute, then pour in chicken broth and bring to a simmer.",
          "Add shredded chicken and cream cheese to the pot. Stir until the cream cheese is melted and incorporated into the soup.",
          "Pour in heavy cream and stir to combine. Allow to simmer for 20 minutes, stirring occasionally, until the soup is heated through and flavors are well blended.",
          "Season with salt and pepper to taste. Serve hot, garnished with crumbled bleu cheese and chopped parsley if desired."
        ],
    }, {
        _id: "22",
        name: "Vegan Thai Lemongrass Coconut Curry Soup",
        image: food_22,
        time: "30 mins",
        category: "Vegan",
        creator: "Kevin",
        description: "A light and fresh soup with spiralized sweet potato, zucchini, and celery root vegetable noodles.",
        completeDes: "This vibrant Vegan Thai Lemongrass Coconut Curry Soup is bursting with natural flavors and vibrant colors, making it a delightful treat. Infused with aromatic Thai spices and creamy coconut milk, this soup offers a perfect balance of sweetness and spice.",
        rating: 95,
        likes: 150,
        prepTime: 15,
        totalTime: 30,
        serves: 4,
        ingredients: [
          { title: 'Soup Base', items: ['1 tablespoon coconut oil', '1 small onion, finely chopped', '2 garlic cloves, minced', '1 tablespoon freshly grated ginger', '2 stalks lemongrass, tough outer layers removed, finely chopped', '1 red bell pepper, sliced', '3 tablespoons Thai red curry paste', '4 cups vegetable broth', '1 can (14 oz) coconut milk'] },
          { title: 'Vegetable Noodles', items: ['1 medium sweet potato, spiralized', '1 large zucchini, spiralized', '1 medium celery root, spiralized'] },
          { title: 'Additional Ingredients', items: ['Juice of 1 lime', '2 tablespoons soy sauce or tamari', '1/4 cup chopped fresh cilantro', 'Sliced red chili (optional)', 'Salt to taste'] }
        ],
        instructions: [
          "Heat coconut oil in a large pot over medium heat. Add onion, garlic, ginger, and lemongrass. Cook until onion is translucent, about 5 minutes.",
          "Add red bell pepper and curry paste, stirring to combine with the aromatics. Cook for an additional 3 minutes until fragrant.",
          "Pour in vegetable broth and bring to a boil. Reduce heat and simmer for 10 minutes to let the flavors meld.",
          "Add coconut milk and bring back to a gentle simmer. Add the spiralized sweet potato, zucchini, and celery root. Cook until the vegetables are just tender, about 5 minutes.",
          "Stir in lime juice, soy sauce, and cilantro. Season with salt and add sliced red chili if using.",
          "Serve hot, garnished with additional cilantro and lime wedges on the side."
        ],
    }, {
        _id: "23",
        name: "Creamy Vegan Mac n Cheese",
        image: food_23,
        time: "20 mins",
        category: "Vegan",
        creator: "Brian",
        description: "Macaroni in a creamy sauce made from a blend of coconut milk, veggies, and cashews.",
        completeDes: "Indulge in this dairy-free Creamy Vegan Mac n Cheese, which features a rich and smooth sauce crafted from coconut milk, nutritious vegetables, and cashews. This dish is not only satisfying but also packs a punch of flavor, making it a favorite for both vegans and non-vegans alike.",
        rating: 88,
        likes: 135,
        prepTime: 10,
        totalTime: 20,
        serves: 4,
        ingredients: [
          { title: 'Pasta', items: ['8 oz macaroni or any small pasta shape'] },
          { title: 'Vegan Cheese Sauce', items: ['1 cup raw cashews, soaked for 4 hours and drained', '1 cup diced carrots', '1/2 cup diced onions', '2 cloves garlic', '1 cup coconut milk', '1/4 cup nutritional yeast', '1 tablespoon lemon juice', '1 teaspoon salt', '1/2 teaspoon turmeric', '1/2 teaspoon paprika'] }
        ],
        instructions: [
          "Cook the pasta according to package instructions until al dente. Drain and set aside.",
          "In a medium pot, boil the carrots, onions, and garlic until tender, about 10 minutes. Drain.",
          "In a blender, combine the boiled vegetables, soaked cashews, coconut milk, nutritional yeast, lemon juice, salt, turmeric, and paprika. Blend until the mixture is completely smooth.",
          "Return the blended sauce to the pot over low heat. Add the cooked pasta and stir until the pasta is evenly coated with the sauce and the dish is heated through.",
          "Serve hot, optionally garnished with chopped parsley or additional paprika for extra color."
        ],
    }, {
        _id: "24",
        name: "Vegan Rainbow Peanut Noodle Bowl",
        image: food_24,
        time: "20 mins",
        category: "Vegan",
        creator: "Melissa",
        description: "peanut sauce, with kale, broccoli, avocado, carrots, red bell pepper.",
        description: "Peanut sauce, with kale, broccoli, avocado, carrots, red bell pepper.",
        completeDes: "This Vegan Rainbow Peanut Noodle Bowl is as colorful as it is flavorful, featuring a vibrant mix of vegetables and noodles coated in a rich peanut sauce. It's a nutritious and satisfying meal that's perfect for a healthy lunch or dinner.",
        rating: 92,
        likes: 160,
        prepTime: 10,
        totalTime: 20,
        serves: 4,
        ingredients: [
          { title: 'Noodles', items: ['8 oz soba noodles or any preferred whole grain noodles'] },
          { title: 'Veggies', items: ['1 cup kale, chopped', '1 cup broccoli florets', '1 medium avocado, sliced', '1 large carrot, julienned', '1 red bell pepper, thinly sliced'] },
          { title: 'Peanut Sauce', items: ['1/4 cup smooth peanut butter', '2 tablespoons soy sauce', '1 tablespoon lime juice', '1 tablespoon maple syrup', '1 clove garlic, minced', '1 teaspoon grated ginger', '2-4 tablespoons warm water to thin'] }
        ],
        instructions: [
          "Cook the noodles according to the package instructions, drain, and rinse under cold water to cool. Set aside.",
          "Blanch the kale and broccoli in boiling water for about 2 minutes until bright green and slightly tender. Drain and set aside.",
          "Prepare the peanut sauce by whisking together peanut butter, soy sauce, lime juice, maple syrup, garlic, and ginger in a bowl. Gradually add warm water until the sauce reaches a pourable consistency.",
          "Assemble the bowls by dividing the noodles among four bowls. Top each with equal portions of kale, broccoli, avocado, carrot, and red bell pepper.",
          "Drizzle the peanut sauce over each bowl. Serve immediately, garnished with sesame seeds or chopped peanuts if desired."
        ],
    }, {
        _id: "25",
        name: "Vegan Tofu Egg Salad Sandwich",
        image: food_25,
        time: "10 mins",
        category: "Vegan",
        creator: "Amada",
        description: "Vegan mayonnaise, pickle relish, and celery, with uncooked tofu egg.",
        completeDes: "This Vegan Tofu Egg Salad Sandwich is a delightful twist on the classic egg salad. Using crumbled tofu in place of eggs, it's mixed with vegan mayonnaise, crunchy celery, and tangy pickle relish for a satisfying sandwich filler that's both delicious and cruelty-free.",
        rating: 86,
        likes: 125,
        prepTime: 10,
        totalTime: 10,
        serves: 4,
        ingredients: [
          { title: 'Tofu Egg Salad', items: ['14 oz firm tofu, drained and crumbled', '1/3 cup vegan mayonnaise', '2 tablespoons pickle relish', '1/4 cup finely chopped celery', '1 tablespoon mustard', '1/4 teaspoon turmeric', 'Salt and pepper to taste'] },
          { title: 'For Serving', items: ['8 slices of whole-grain bread', 'Lettuce leaves', 'Tomato slices', 'Additional vegan mayonnaise if desired'] }
        ],
        instructions: [
          "In a bowl, combine crumbled tofu with vegan mayonnaise, pickle relish, celery, mustard, turmeric, salt, and pepper. Mix well until all ingredients are evenly distributed.",
          "Toast the bread slices if desired for added texture and warmth.",
          "Spread a generous amount of tofu egg salad on half of the toasted bread slices. Add lettuce and tomato slices on top if using.",
          "Cover with the remaining bread slices, press down slightly, and slice the sandwiches in half.",
          "Serve immediately or cover and refrigerate until ready to eat."
        ],
    },  {
        _id: "26",
        name: "The Best Rotisserie Chicken Sandwich",
        image: food_26,
        time: "10 mins",
        category: "Sandwiches",
        creator: "Carol",
        description: "Middle Eastern sauce made from roasted red peppers, breadcrumbs, walnuts.",
        completeDes: "Elevate your sandwich game with 'The Best Rotisserie Chicken Sandwich,' featuring tender rotisserie chicken, enhanced with a unique Middle Eastern sauce made from roasted red peppers, breadcrumbs, walnuts, and a blend of spices. It's a gourmet twist on a classic favorite.",
        rating: 90,
        likes: 140,
        prepTime: 5,
        totalTime: 10,
        serves: 4,
        ingredients: [
          { title: 'Sauce', items: ['1 cup roasted red peppers, drained', '1/2 cup breadcrumbs', '1/2 cup walnuts, toasted', '1 garlic clove', '1 teaspoon ground cumin', '1 tablespoon lemon juice', 'Salt and pepper to taste'] },
          { title: 'Sandwich Build', items: ['4 ciabatta rolls, sliced in half', '2 cups shredded rotisserie chicken', '1/2 cup arugula', 'Sliced cucumber', 'Sliced red onion'] }
        ],
        instructions: [
          "To make the sauce, combine roasted red peppers, breadcrumbs, walnuts, garlic, cumin, lemon juice, salt, and pepper in a food processor. Blend until smooth.",
          "Spread a generous amount of the red pepper sauce on each half of the ciabatta rolls.",
          "Layer the shredded chicken on the bottom halves of the rolls. Top with arugula, cucumber slices, and red onion.",
          "Cover with the top halves of the rolls, press gently to secure the fillings.",
          "Serve immediately for the freshest taste, or wrap for a grab-and-go lunch."
        ],
    }, {
        _id: "27",
        name: "Jalapeño-Marinated Steak Sandwich",
        image: food_27,
        time: "60 mins",
        category: "Sandwiches",
        creator: "Patrick",
        description: "hanger steak is paired with salty cotija mayo, charred onions, and fresh cilantro",
        completeDes: "This Jalapeño-Marinated Steak Sandwich offers a fiery twist with a flavorful marinade that infuses the hanger steak with spicy jalapeño and lime. Topped with salty cotija mayo, charred onions, and fresh cilantro, it's a robust and satisfying meal.",
        rating: 95,
        likes: 162,
        prepTime: 30,
        totalTime: 60,
        serves: 4,
        ingredients: [
          { title: 'Marinade', items: ['2 jalapeños, seeded and chopped', '3 cloves garlic, minced', 'Juice of 2 limes', '1/4 cup olive oil', '1 teaspoon salt', '1/2 teaspoon black pepper'] },
          { title: 'Steak', items: ['2 pounds hanger steak'] },
          { title: 'Sandwich Build', items: ['1/2 cup mayonnaise', '1/4 cup crumbled cotija cheese', '4 ciabatta rolls', '1 large onion, sliced and charred', '1/4 cup chopped cilantro'] }
        ],
        instructions: [
          "Combine the jalapeños, garlic, lime juice, olive oil, salt, and pepper in a bowl. Add the steak and ensure it is fully coated in the marinade. Refrigerate for at least 30 minutes, preferably longer.",
          "Grill the marinated steak over high heat until it reaches the desired doneness, about 5-7 minutes per side for medium-rare. Let it rest for 10 minutes and then slice thinly.",
          "Mix the mayonnaise with the cotija cheese. Spread this mixture on the ciabatta rolls.",
          "Assemble the sandwiches by laying the sliced steak on the bottom halves of the rolls. Top with charred onions, chopped cilantro, and a dollop of cotija mayo.",
          "Cover with the top halves of the rolls and serve immediately, ensuring a burst of flavor in every bite."
        ],
    }, {
        _id: "28",
        name: "Chicken Club",
        image: food_28,
        time: "5 mins",
        category: "Sandwiches"   ,
        creator: "Raymond",
        description: "Perfectly fresh with tender chicken, crisp produce, yummy bacon, and a fun twist.",
        completeDes: "Elevate your sandwich game with this Chicken Club, a delightful combination of tender chicken, crispy bacon, fresh lettuce, tomato, and a special sauce that ties all the flavors together. It's a classic reinvented for maximum flavor.",
        rating: 92,
        likes: 178,
        prepTime: 5,
        totalTime: 5,
        serves: 2,
        ingredients: [
          { title: 'Main Ingredients', items: ['4 slices toasted bread', '2 tablespoons mayonnaise', '6 slices cooked bacon', '4 slices tomato', 'Lettuce leaves', '6 ounces cooked chicken breast, sliced'] },
          { title: 'Special Sauce', items: ['1/4 cup mayonnaise', '1 tablespoon ketchup', '1 teaspoon mustard', '1/2 teaspoon garlic powder', '1/2 teaspoon onion powder'] }
        ],
        instructions: [
          "Prepare the special sauce by mixing together mayonnaise, ketchup, mustard, garlic powder, and onion powder in a small bowl. Set aside.",
          "To assemble the sandwiches, spread mayonnaise on one side of each slice of toasted bread.",
          "Layer two slices of bread with lettuce, tomato slices, cooked bacon, and chicken slices. Top with a generous amount of special sauce.",
          "Cover with the remaining slices of bread, mayonnaise side down. Press lightly to adhere.",
          "Cut each sandwich diagonally and serve immediately, ensuring each bite includes a taste of all components."
        ],
       
    }, {
        _id: "29",
        name: "Katsu Sando",
        image: food_29,
        time: "35 mins",
        category: "Sandwiches",
        creator: "Helen",
        description: "In Japan, a popular way to serve the fried pork cutlet known as tonkatsu.",
        completeDes: "Katsu Sando, Japan's beloved crispy fried pork cutlet sandwich, is presented between soft slices of bread with tangy tonkatsu sauce and shredded cabbage. It’s a perfect quick meal that combines crunch, flavor, and a hint of sweetness.",
        rating: 88,
        likes: 115,
        prepTime: 15,
        totalTime: 35,
        serves: 2,
        ingredients: [
          { title: 'Tonkatsu', items: ['2 pork loin cutlets, about 1/2 inch thick', 'Salt and pepper to taste', '1/2 cup all-purpose flour', '1 egg, beaten', '1 cup panko breadcrumbs', 'Oil for frying'] },
          { title: 'Sandwich Assembly', items: ['4 slices white bread, crusts removed', '2 tablespoons tonkatsu sauce', '1 cup shredded cabbage'] }
        ],
        instructions: [
          "Season the pork cutlets with salt and pepper. Dredge each cutlet in flour, dip in beaten egg, then coat with panko breadcrumbs.",
          "Heat oil in a skillet over medium-high heat. Fry the breaded pork cutlets until golden brown and cooked through, about 3-4 minutes per side. Drain on paper towels.",
          "Spread tonkatsu sauce on one side of each bread slice. Place a layer of shredded cabbage on two slices.",
          "Place a fried pork cutlet on top of the cabbage. Cover with the remaining slices of bread, sauce side down.",
          "Cut each sandwich in half and serve immediately. Enjoy the crunchy and savory taste of this classic Japanese street food at home."
        ],
    }, 
    
]
