import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/Store.js'; // Ensure the correct path to the store
import App from './App';
import SignIn from './components/auth/Sign-in/SignIn.jsx';
import SignUp from './components/auth/Sign-up/SignUp.jsx';
import Restaurants from './components/SectionTwo/Resturants/Resturants.jsx';
import RestaurantFood from './components/SectionTwo/RestaurantFood/RestaurantFood.jsx';
import Favourite from './components/SectionTwo/Favourite/Favourite.jsx';
import MyProfile from './components/myProfile/MyProfile.jsx';
import DeliveryPage from './components/Deliverypage/DeliveryPage.jsx';
import Error from './components/ErrorFolder/Error.jsx';
// import FootDetailPage from './components/SectionTwo/FootDetailPage/FootDetailPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/restaurants",
    element: <Restaurants />,
  },
  {
    path: "/restaurants/:cityName",
    element: <Restaurants />,
  },
  {
    path: "/RestaurantFood",
    element: <RestaurantFood />,
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantFood />,
  },
  {
    path: "/favourite",
    element: <Favourite />,
  },
  {
    path: "/profile",
    element: <MyProfile />,
  },
  {
    path: "/delivery",
    element: <DeliveryPage />,
  },
  {
    path: "*", // Catch-all route for undefined paths
    element: <Error />, // Your Error component
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);