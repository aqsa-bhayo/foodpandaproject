import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Burger from "../../../assets/burger.jpg";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { addFavorite } from "../../../redux/productsSlice";
import { addToCart } from "../../../redux/cartSlice";
import sandwichImage from '../../../assets/sendwichch.jpg';
import cheesyFriesImage from '../../../assets/cheesy fries.jpg';
import chickenWingsImage from '../../../assets/chicken wings.jpg';
import vegBurgerImage from '../../../assets/vg burger.jpg';
import onionRingsImage from '../../../assets/onion rings.jpg';
import cheesyNachosImage from '../../../assets/cheesy nochos.jpg';
import garlicBreadImage from '../../../assets/garlic bread.jpg';
import mozzarellaSticksImage from '../../../assets/moxrela sticks.jpg';
import springRollsImage from '../../../assets/spring rolls.jpg';
import bbqBurgerImage from '../../../assets/bbq burger1.jpg';
import mushroomBurgerImage from '../../../assets/mashroom burger.jpg';
import spicyBurgerImage from '../../../assets/spicy burger.jpg';
import classicBurgerImage from '../../../assets/classic burger.jpg';
import veggieBurgerImage from '../../../assets/veggie burger.jpg';
import curlyFriesImage from '../../../assets/curly fries.jpg';
import sweetPotatoFriesImage from '../../../assets/potato fries.jpg';
import chocolateShakeImage from '../../../assets/chocklate shake.jpg';
import vanillaShakeImage from '../../../assets/vanila shake.jpg';
import strawberryShakeImage from '../../../assets/strawberry shake.jpg';
import cocoColaImage from '../../../assets/coco cola.jpg';
import spriteImage from '../../../assets/sprite.jpg';
import fantaImage from '../../../assets/fanta.jpg';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from "@mui/material";
import { Snackbar, Alert } from '@mui/material';


const RestaurantFood = () => {

  const AddToCart = (product) => {
    const items = JSON.stringify(product);
    localStorage.setItem("products", items)
    navigate('/delivery')
  }
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const restaurants = [
    {
      id: 1,
      name: "Roobi's Kitchen",
      products: [
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: '625.50', oldPrice: '700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: '350', oldPrice: '400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: '400', oldPrice: '450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: '300', oldPrice: '350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: '150', oldPrice: '200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: '350', oldPrice: '400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: '250', oldPrice: '300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: '280', oldPrice: '320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: '200', oldPrice: '250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: '850', oldPrice: '900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: '780', oldPrice: '850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: '600', oldPrice: '650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: '500', oldPrice: '550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: '350', oldPrice: '400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: '180', oldPrice: '220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: '220', oldPrice: '250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: '350', oldPrice: '400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: '300', oldPrice: '350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: '320', oldPrice: '370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: '100', oldPrice: '120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: '100', oldPrice: '120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: '100', oldPrice: '120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
      ],
    },

    // 2nd resturant 
    {
      "id": 2,
      "name": "Sitto's Kitchen",
      products: [
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: '850', oldPrice: '900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: '780', oldPrice: '850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: '600', oldPrice: '650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: '500', oldPrice: '550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: '350', oldPrice: '400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: '625.50', oldPrice: '700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: '350', oldPrice: '400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: '400', oldPrice: '450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: '300', oldPrice: '350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: '150', oldPrice: '200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: '180', oldPrice: '220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: '220', oldPrice: '250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: '350', oldPrice: '400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: '300', oldPrice: '350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: '320', oldPrice: '370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: '100', oldPrice: '120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: '100', oldPrice: '120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: '100', oldPrice: '120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: '350', oldPrice: '400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: '250', oldPrice: '300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: '280', oldPrice: '320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: '200', oldPrice: '250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
      ]
    },


    // 3rd retaurant
    {
      id: 3,
      name: "Quetta Paratha Center",
      products: [
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: '180', oldPrice: '220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: '220', oldPrice: '250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: '850', oldPrice: '900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: '780', oldPrice: '850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: '600', oldPrice: '650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: '500', oldPrice: '550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: '350', oldPrice: '400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: '625.50', oldPrice: '700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: '350', oldPrice: '400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: '400', oldPrice: '450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: '300', oldPrice: '350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: '150', oldPrice: '200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: '350', oldPrice: '400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: '300', oldPrice: '350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: '320', oldPrice: '370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: '100', oldPrice: '120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: '100', oldPrice: '120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: '100', oldPrice: '120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: '350', oldPrice: '400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: '250', oldPrice: '300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: '280', oldPrice: '320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: '200', oldPrice: '250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
      ]
    },

    // restuarant
    {
      id: 4,
      name: "Spicy Burger Center",
      products: [
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: '625.50', oldPrice: '700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: '350', oldPrice: '400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: '400', oldPrice: '450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: '300', oldPrice: '350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: '150', oldPrice: '200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: '350', oldPrice: '400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: '300', oldPrice: '350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: '320', oldPrice: '370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: '850', oldPrice: '900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: '780', oldPrice: '850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: '600', oldPrice: '650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: '100', oldPrice: '120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: '100', oldPrice: '120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: '100', oldPrice: '120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: '180', oldPrice: '220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: '220', oldPrice: '250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: '350', oldPrice: '400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: '250', oldPrice: '300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: '280', oldPrice: '320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: '200', oldPrice: '250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: '500', oldPrice: '550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: '350', oldPrice: '400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
      ]
    },
    {
      id: 5,
      name: "Traditional Roti Salan Restaurant",
      products: [
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: '180', oldPrice: '220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: '220', oldPrice: '250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: '350', oldPrice: '400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: '250', oldPrice: '300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: '280', oldPrice: '320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: '200', oldPrice: '250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: '350', oldPrice: '400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: '300', oldPrice: '350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: '320', oldPrice: '370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: '625.50', oldPrice: '700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: '350', oldPrice: '400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: '400', oldPrice: '450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: '300', oldPrice: '350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: '150', oldPrice: '200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: '100', oldPrice: '120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: '100', oldPrice: '120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: '100', oldPrice: '120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: '500', oldPrice: '550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: '350', oldPrice: '400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: '850', oldPrice: '900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: '780', oldPrice: '850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: '600', oldPrice: '650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
      ]

    },
    {
      id: 6,
      name: "AA-2 Food Center",
      products: [
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: '350', oldPrice: '400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: '250', oldPrice: '300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: '280', oldPrice: '320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: '200', oldPrice: '250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: '625.50', oldPrice: '700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: '350', oldPrice: '400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: '400', oldPrice: '450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: '300', oldPrice: '350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: '150', oldPrice: '200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: '850', oldPrice: '900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: '780', oldPrice: '850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: '600', oldPrice: '650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: '350', oldPrice: '400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: '300', oldPrice: '350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: '320', oldPrice: '370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: '500', oldPrice: '550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: '350', oldPrice: '400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: '180', oldPrice: '220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: '220', oldPrice: '250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: '100', oldPrice: '120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: '100', oldPrice: '120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: '100', oldPrice: '120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
      ]

    },
  ];

  const restaurant = restaurants.find((rest) => rest.id === parseInt(id));

  const [activeTab, setActiveTab] = useState('All');
  const [cartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {

    const storedCart = JSON.parse(localStorage.getItem("cartList"));
    if (storedCart) {
      setCartList(storedCart);
    }
  }, []);

  const handleAddToCart = (item) => {
    // Format the item to match the cart structure
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image
    };

    dispatch(addToCart(cartItem));
    setOpenAlert(true);
  };

  if (!restaurant) {
    return (
      <>
        <Header />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Restaurant Not Found</h1>
          <button
            onClick={() => navigate("/restaurant")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Go Back
          </button>
        </div>
      </>
    );
  }

  return (
    <>
    <Header />

    {/* Restaurant Details */}
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center" style={{ color: '#ff3366' }}>
        {restaurant.name}
      </h1>
      <p className="text-md text-gray-600">{restaurant.description}</p>
    </div>

    {/* Tabs Section */}
    <div
      className="tabs-container"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: '30px',
        marginTop: '40px',
        backgroundColor: '#f8f8f8',
        padding: '10px',
        borderRadius: '8px',
        width: '77%',
        marginLeft: '12.5%',
        marginRight: 'auto',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      {['All', 'Popular', 'Starters', 'Premium Burgers', 'Classic Burgers', 'Fries', 'Shakes', 'Beverages'].map((tab) => (
        <Button
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{
            border: 'none',
            background: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            color: '#ff3366',
            fontWeight: activeTab === tab ? 'bold' : 'normal',
            borderBottom: activeTab === tab ? '2px solid #ff3366' : 'none',
            flex: 'none',
            textAlign: 'center',
            marginRight: '10px',
          }}
        >
          {tab}
        </Button>
      ))}
    </div>

    {/* Product List */}
    <div className="p-6">
      {restaurant.products
        .filter((product) => activeTab === 'All' || product.title === activeTab)
        .map((product, productIndex) => (
          <div key={productIndex} className="mb-4">
            <Container maxWidth="xl">
              <div className="text-left">
                <h2 className="text-xl font-semibold mb-2 ms-5" style={{ color: '#ff3366' }}>
                  {product.title}
                </h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.items.map((item) => (
                  <div key={item.id} className="p-4 border rounded flex flex-col sm:flex-row justify-between">
                    <div className="sm:w-1/2">
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <div className="mt-2">
                        <p className="text-lg font-bold text-blue-500">Rs. {item.price}</p>
                        {item.oldPrice && (
                          <p className="text-sm text-gray-500 line-through">Rs. {item.oldPrice}</p>
                        )}
                      </div>

                      <Button
                        onClick={() => handleAddToCart(item)}
                        sx={{
                          minWidth: '35px',
                          height: '35px',
                          padding: '8px',
                          marginBottom: '20px',
                          backgroundColor: '#d70f64',
                          color: 'white',
                          borderRadius: '8px',
                          '&:hover': {
                            backgroundColor: '#c20c59',
                          },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <AddIcon sx={{ fontSize: 20 }} />
                      </Button>
                    </div>

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-1/2 aspect-square object-cover rounded mb-2 sm:mb-0"
                    />
                  </div>
                ))}
              </ul>
            </Container>
          </div>
        ))}
    </div>

    <Footer />

    {/* Add Snackbar */}
    <Snackbar
      open={openAlert}
      autoHideDuration={3000}
      onClose={() => setOpenAlert(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={() => setOpenAlert(false)} severity="success" sx={{ width: '100%' }}>
        Item added to cart successfully!
      </Alert>
    </Snackbar>

    {/* Add Media Query for Mobile */}
    <style jsx>{`
      @media (min-width: 390px) and (max-width: 844px) {
        .tabs-container {
          display: none;
        }
      }
    `}</style>
  </>

  );
};

export default RestaurantFood;