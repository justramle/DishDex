
import header_img from './logo.jpeg'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.jpeg'
import menu_2 from './menu_2.jpeg'
import menu_3 from './menu_3.jpeg'
import menu_4 from './menu_4.jpeg'
// import menu_5 from './menu_5.jpeg'
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
    // {
    //     menu_name: "Cake",
    //     menu_image: menu_5
    // },
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
        description: "This easy Greek salad recipe is our new favorite summer side dish. Refreshing & delicious.",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Fruity Balsamic Tofu Salad",
        image: food_2,
        time: "30 mins",
        description: "Perfect way to usher in the new season! gluten-free and of course: vegan",
        category: "Salad"
    }, {
        _id: "3",
        name: "Rainbow Chopped Salad with Basil & Mozzarella",
        image: food_3,
        time: "30 mins",
        description: "Fresh and colorful chopped salad. Classic caprese salad.",
        category: "Salad"
    }, {
        _id: "4",
        name: "Garlic-and-Herb Potato Salad",
        image: food_4,
        time: "45 mins",
        description: "Mayo and potatoes. This gorgeous vinegar-based potato salad for you.",
        category: "Salad"
    },{
        _id: "5",
        name: "Vegetarian Breakfast Burrito",
        image: food_5,
        time: "10 mins",
        description: "Tasty mix of ingredients. A great way to get your day off to a good start.",
        category: "Burritos"
    }, {
        _id: "6",
        name: "Easy Beef Burrito",
        image: food_6,
        time: "15 mins",
        description: "This is truly the easiest burrito recipe to make at home — and they're freezer-friendly!",
        category: "Burritos"
    }, {
        _id: "7",
        name: "7-layer Chicken Burrito",
        image: food_7,
        time: "25 mins",
        description: "This easy chicken burrito recipe has all the makings of the classic layered party dip.",
        category: "Burritos"
    }, {
        _id: "8",
        name: "Shredded Chicken Burrito",
        image: food_8,
        time: "30 mins",
        description: "This Shredded Chicken Burrito comes together in about 30 minutes but also makes a great freezer meal.",
        category: "Burritos"
    }, {
        _id: "9",
        name: "Black Bean and Veggie Burrito",
        image: food_9,
        time: "45 mins",
        description: "Black bean and veggie burrito stuffed with green chile rice, sautéed peppers and onions, black beans, and a creamy guacamole.",
        category: "Burritos"
    }, {
        _id: "10",
        name: "Tiramisu",
        image: food_10,
        time: "35 mins",
        description: "Delicate ladyfinger biscuits soaked in a coffee syrup and creamy mascarpone cheese filling.",
        category: "Desserts"
    }, {
        _id: "11",
        name: "Honeycomb Candy",
        image: food_11,
        time: "43 mins",
        description: "A crunchy treat with irresistible honey flavor and a hint of vanilla.",
        category: "Desserts"
    }, {
        _id: "12",
        name: "Cranberry Bars",
        image: food_12,
        time: "50 mins",
        description: "A sweet and buttery shortbread crust, cranberry filling, and delicious crumble topping.",
        category: "Desserts"
    }, {
        _id: "13",
        name: "Honey Cake",
        image: food_13,
        time: "5 hrs",
        description: "Delicious and moist honey cake, with a tangy sour cream frosting and prominent honey flavor.",
        category: "Desserts"
    }, {
        _id: "14",
        name: "Creamy Tomato Pasta",
        image: food_14,
        time: "25 mins",
        description: "Penne pasta tossed in a creamy tomato sauce, topped with a mix of Romano and parmesan cheese.",
        category: "Pasta"
    }, {
        _id: "15",
        name: "Chicken Marsala Pasta",
        image: food_15,
        time: "30 mins",
        description: "Tender chicken, mushrooms, and a creamy marsala sauce.",
        category: "Pasta"
    }, {
        _id: "16",
        name: "Garlic Butter Noodles",
        image: food_16,
        time: "20 mins",
        description: "Noodles tossed in a light garlic sauce, sprinkled with parmesan cheese.",
        category: "Pasta"
    }, {
        _id: "17",
        name: "Creamy Lemon Pasta",
        image: food_17,
        time: "25 mins",
        description: "Your choice of pasta in a creamy lemon and parmesan sauce.",
        category: "Pasta"
    }, {
        _id: "18",
        name: "Lemon Chicken Orzo Soup",
        image: food_18,
        time: "50 mins",
        description: "This lemon chicken orzo soup is light, healthy, and cozy, with celery, carrots, onion, and garlic.",
        category: "Soup"
    }, {
        _id: "19",
        name: "Chicken Tetrazzini Soup",
        image: food_19,
        time: "40 mins",
        description: "A soup made with tender chicken, mushrooms, pasta, and an amazing, creamy broth.",
        category: "Soup"
    }, {
        _id: "20",
        name: "Chicken Fajita Soup",
        image: food_20,
        time: "40 mins",
        description: "A simple chicken fajita soup that has all your favorite fajita flavors in a warming and cozy soup!",
        category: "Soup"
    }, {
        _id: "21",
        name: "Buffalo Chicken Soup",
        image: food_21,
        time: "35 mins",
        description: "A hearty soup made with chicken, buffalo sauce, cream cheese, and celery, finished with (optional) bleu cheese.",
        category: "Soup"
    }, {
        _id: "22",
        name: "Vegan Thai Lemongrass Coconut Curry Soup",
        image: food_22,
        time: "30 mins",
        description: "A light and fresh soup with spiralized sweet potato, zucchini, and celery root vegetable noodles.",
        category: "Vegan"
    }, {
        _id: "23",
        name: "Creamy Vegan Mac n Cheese",
        image: food_23,
        time: "20 mins",
        description: "Macaroni in a creamy sauce made from a blend of coconut milk, veggies, and cashews with a blend of seasonings.",
        category: "Vegan"
    }, {
        _id: "24",
        name: "Vegan Rainbow Peanut Noodle Bowl",
        image: food_24,
        time: "20 mins",
        description: "Linguine rice noodles in a peanut sauce, with kale, broccoli, avocado, carrots, red bell pepper, purple cabbage, seaweed, and tofu.",
        category: "Vegan"
    }, {
        _id: "25",
        name: "Vegan Tofu Egg Salad Sandwiche",
        image: food_25,
        time: "10 mins",
        description: "Vegan mayonnaise, pickle relish, and celery, with uncooked tofu egg, seasoned with onion powder, garlic powder, and turmeric.",
        category: "Vegan"
    }, {
        _id: "25",
        name: "Vegan Tofu Egg Salad Sandwich",
        image: food_25,
        time: "10 mins",
        description: "Vegan mayonnaise, pickle relish, and celery, with uncooked tofu egg, seasoned with onion powder, garlic powder, and turmeric.",
        category: "Sandwiches"
    },  {
        _id: "26",
        name: "The Best Rotisserie Chicken Sandwich",
        image: food_26,
        time: "10 mins",
        description: "This rotisserie chicken sandwich is flavored with a dressing inspired by muhammara—a Middle Eastern sauce made from roasted red peppers, breadcrumbs, walnuts and spices.",
        category: "Sandwiches"
    }, {
        _id: "27",
        name: "Jalapeño-Marinated Steak Sandwich",
        image: food_27,
        time: "60 mins",
        description: "Spicy and beefy jalapeño-marinated hanger steak is paired with salty cotija mayo, charred onions, and fresh cilantro, which come together in one incredibly flavorful sandwich.",
        category: "Sandwiches"
    }, {
        _id: "28",
        name: "Chicken Club",
        image: food_28,
        time: "5 mins",
        description: "This chicken club is perfectly fresh with tender chicken, crisp produce, yummy bacon, and a fun twist that brings it all together.",
        category: "Sandwiches"
    }, {
        _id: "29",
        name: "Katsu Sando",
        image: food_29,
        time: "35 mins",
        description: "In Japan, a popular way to serve the fried pork cutlet known as tonkatsu is between thick slices of fluffy milk bread with julienned green cabbage and tonkatsu sauce.",
        category: "Sandwiches"
    }, // {
    //     _id: "",
    //     name: " ",
    //     image: food_,
    //     time: " mins",
    //     description: " ",
    //     category: " "
    // }, {
    //     _id: "",
    //     name: " ",
    //     image: food_,
    //     time: " mins",
    //     description: " ",
    //     category: " "
    // }, {
    //     _id: "",
    //     name: " ",
    //     image: food_,
    //     time: " mins",
    //     description: " ",
    //     category: " "
    // }, {
    //     _id: "",
    //     name: " ",
    //     image: food_,
    //     time: " mins",
    //     description: " ",
    //     category: " "
    // }, {
    //     _id: "",
    //     name: " ",
    //     image: food_,
    //     time: " mins",
    //     description: " ",
    //     category: " "
    // },
    
]
