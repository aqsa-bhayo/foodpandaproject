import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../../redux/favouriteSlice";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconImg from "../../../assets/iconfood.webp";
import HarmainImg from "../../../assets/harmainfood.webp";
import SarerahImg from "../../../assets/sarerahfood.webp";
import KarachiImg from "../../../assets/karachinaseebfood.webp";
import KFCImg from "../../../assets/kfcfood.webp";
import ClassicImg from "../../../assets/classicfood.webp";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import heroImage from "../../../assets/refresh-hero-home-pk.webp";
import dishOne from "../../../assets/dish-1.webp";
import dishTwo from "../../../assets/dish-2.webp";
import dishThree from "../../../assets/dish-3.webp";
import dishFour from "../../../assets/dish-4.webp";
import dishFive from "../../../assets/dish-5.webp";
import dishSix from "../../../assets/dish-6.webp";

const Restaurants = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);  // Fetch favorites from Redux state

  const restaurantsSectionOne = [
    { id: 1, name: "Roobi's Kitchen", category: "Grilled", rating: "6.0", discount1: "25% off Rs. 199", discount2: "Limited Time: Free Delivery", image: dishOne },
    { id: 2, name: "Sitto's Kitchen", category: "Pasta", rating: "6.0", discount1: "Buy 1 Get 1 Free", discount2: "Flat Rs. 50 Off on First Order", image: dishTwo },
    { id: 3, name: "Quetta Paratha Center", category: "Beverages", rating: "6.0", discount1: "20% off on All Orders", discount2: "Extra Rs. 100 Off on Rs. 500+", image: dishThree },
    { id: 4, name: "Spicy Burger Center", category: "Pakistani", rating: "6.0", discount1: "Free Fries with Each Order", discount2: "Rs. 30 Cashback on Payment via Card", image: dishFour },
    { id: 5, name: "Traditional Roti Salan Restaurant", category: "Fast Food", rating: "6.0", discount1: "Flat Rs. 150 Off", discount2: "Complimentary Dessert on Orders Rs. 500+", image: dishFive },
    { id: 6, name: "AA-2 Food Center", category: "Pakistani", rating: "6.0", discount1: "15% off on Lunch Hours", discount2: "Earn Double Loyalty Points Today", image: dishSix },
  ];

  const restaurantsSectionTwo = [
    { id: 7, name: "ICON Food Court", category: "Fast Food", rating: "4.6 (100+)", discount1: "Free Coke with Every Meal", discount2: "Exclusive: Free Delivery on Weekends", image: IconImg, closedUntil: "9:00 AM" },
    { id: 8, name: "Al Haramain Foods", category: "BBQ", rating: "4.0 (100+)", discount1: "Buy 2 BBQ Platters, Get 1 Free", discount2: "Extra Rs. 50 Off on Pickup Orders", image: HarmainImg, closedUntil: "11:00 AM" },
    { id: 9, name: "Sar-e-Rah Mehran Lassi & Limca Point", category: "Beverages", rating: "4.8 (4000+)", discount1: "Flat 30% Off on Lassi", discount2: "Combo Deal: Rs. 200 for 2 Beverages", image: SarerahImg, closedUntil: "8:00 AM" },
    { id: 10, name: "Karachi Naseeb Biryani & Pulao Center", category: "Pakistani", rating: "4.4 (100+)", discount1: "20% Off on Pulao", discount2: "Welcome Deal: Free Delivery on Rs. 300+", image: KarachiImg, closedUntil: "12:00 PM" },
    { id: 11, name: "KFC - Sukkur", category: "Fast Food", rating: "4.4 (1000+)", discount1: "Bucket Meals at 15% Off", discount2: "Midnight Deal: Rs. 100 Off on Orders Rs. 500+", image: KFCImg, closedUntil: "10:00 AM" },
    { id: 12, name: "The Classic Kitchen", category: "Pakistani", rating: "4.7 (100+)", discount1: "Family Pack Rs. 300 Off", discount2: "Festive Offer: Free Delivery", image: ClassicImg, closedUntil: "7:00 AM" },
  ];


  const isFavorite = (restaurant) => favorites.some((item) => item.id === restaurant.id);
  const toggleFavorite = (restaurant) => {
    console.log("Toggling favorite for:", restaurant);
    if (isFavorite(restaurant)) {
      console.log("Removing from favorites", restaurant.id);
      dispatch(removeFavorite(restaurant.id));
    } else {
      console.log("Adding to favorites", restaurant);
      dispatch(addFavorite(restaurant));
    }

    navigate("");
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          position: "relative",
          height: { xs: "auto", sm: "310px" },
          backgroundColor: "#f7f7f7",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: 2, sm: 0 },
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            padding: { xs: 2, sm: 5 },
            textAlign: { xs: "center", sm: "left" },
            "@media (max-width: 1280px) and (min-width: 800px)": {
              padding: 3,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Open Sans", Arial, sans-serif',
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "35px", md: "38px" },
              color: "rgb(51, 51, 51)",
              lineHeight: 1.3,
              marginBottom: 3,
              marginLeft: { xs: 0, sm: "190px" },
              "@media (max-width: 1280px) and (min-width: 800px)": {
                marginLeft: "60px",
                fontSize: "32px",
                marginTop: "60px",
                whiteSpace: "nowrap",
              },
              "@media (max-width: 800px)": {
                marginLeft: 0,
              },
            }}
          >
            It's the food and groceries you love,{" "}
            <span
              style={{
                display: "inline",
                "@media (max-width: 1280px) and (min-width: 800px)": {
                  display: "none", // Hide the line break on medium screens
                },
              }}
            >
              <br />
            </span>
            delivered
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            height: { xs: "300px", sm: "310px" },
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>

      {/* Top Restaurants */}
      <div className="px-16 max-sm:px-0 pt-10">
        <Container maxWidth="xl">
          <h1 className="text-2xl font-bold mb-6">Top Restaurants</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantsSectionOne.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer relative"
              >
                {/* Image Section */}
                <div className="w-full h-60 relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                  {/* Discount 1 */}
                  <div
                    className="absolute top-2 left-2 px-2  rounded-md"
                    style={{
                      backgroundColor: "rgba(255, 20, 147, 0.9)", // Pink background
                      color: "white", // White text
                      marginBottom: "4px", // Adds space below this box
                    }}
                  >
                    <p className="text-xs font-semibold mb-2">{restaurant.discount1}</p>
                  </div>
                  {/* Discount 2 */}
                  <div
                    className="absolute top-12 left-2 px-2 py-1 rounded-md"
                    style={{
                      backgroundColor: "rgba(255, 20, 147, 0.9)", // Pink background
                      color: "white", // White text
                      lineHeight: "1", // Reduces line height for tighter spacing
                    }}
                  >
                    <p className="text-xs font-semibold m-0">{restaurant.discount2}</p>
                  </div>

                </div>
                {/* Text Section */}
                <div className="py-2 px-3">
                  <h3 className="text-sm font-semibold">{restaurant.name}</h3>
                  <div className="flex justify-between">
                    <p className="text-gray-600 text-sm">{restaurant.category}</p>
                    <p className="text-gray-600 text-xs font-light">
                      <span>⭐</span> {restaurant.rating}
                    </p>
                  </div>
                  <button
                    className="absolute top-2 right-2 bg-white hover:bg-zinc-100 p-2 rounded-full"
                    onClick={() => toggleFavorite(restaurant)}
                  >
                    {isFavorite(restaurant) ? (
                      <FavoriteIcon sx={{ fontSize: "23px", color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ fontSize: "23px" }} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Closed Restaurants */}
      <div className="px-16 max-sm:px-0 pt-10">
        <Container maxWidth="xl">
          <h1 className="text-2xl font-bold mb-6">Closed Restaurants</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantsSectionTwo.map((restaurant) => (
              <div key={restaurant.id} className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer relative">
                <div className="w-full h-60 relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                    <span className="text-lg font-bold">
                      Closed until {restaurant.closedUntil}
                    </span>
                    <button className="mt-2 px-4 py-1 bg-pink-500 text-white font-semibold rounded-md">
                      Order for later
                    </button>
                  </div>
                </div>
                <div className="py-2 px-3">
                  <h3 className="text-sm font-semibold">{restaurant.name}</h3>
                  <div className="flex justify-between">
                    <p className="text-gray-600 text-sm">{restaurant.category}</p>
                    <p className="text-gray-600 text-xs font-light">
                      <span>⭐</span> {restaurant.rating}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Restaurants;
