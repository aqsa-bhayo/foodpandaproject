import React from "react";
import Container from "@mui/material/Container";
import FoodPandaLogo from "../../assets/logo.webp";
import DeliveryLogo from "../../assets/delivery.jpg";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const countries = [
    "Laos", "Cambodia", "Myanmar", "Thailand", "Hong Kong", "Taiwan", 
    "Malaysia", "Philippines", "Singapore", "Bangladesh"
  ];

  const list1 = [
    "Press", "pandapay Terms and Conditions", "Security", "Careers", 
    "Cashback Terms and Conditions", "Partner with Us", "All cities", 
    "pandapro - Monthly Subscription Programme", "Ramzan deals", "Areas delivered in Lahore"
  ];

  const list2 = [
    "Help Center", "Terms and Conditions", "Download foodpanda Apps", 
    "Suggest a Restaurant", "All cuisines", "pandago - Request a Rider", 
    "Update on COVID-19 in Pakistan", "foodpanda Home Chef", 
    "Areas delivered in Karachi", "Areas delivered in Islamabad"
  ];

  const list3 = [
    "Refunds with pandapay", "Privacy policy", "Human rights policy", 
    "Corporate Customer", "foodpanda Magazine", "foodpanda Vouchers & Coupons", 
    "pandamart Grocery Delivery", "Become an Affiliate", 
    "Areas delivered in Gujranwala", "Areas delivered in Peshawar"
  ];

  const renderButtons = (items) => {
    return items.map((item, index) => (
      <button 
        key={index} 
        className="border-b border-black relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-left text-start mt-4 text-zinc-500 font-bold">
        {item}
      </button>
    ));
  };

  return (
    <div className="max-sm:mx-0 mx-16 mt-36">
      <Container maxWidth="xl">
        <hr />
        <div className="flex max-sm:overflow-auto md:overflow-auto lg:overflow-visible justify-between mt-10 mb-10">
          {countries.map((country, index) => (
            <React.Fragment key={index}>
              <button className="text-zinc-500 me-3 text-nowrap font-semibold border-b border-black relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-left">
                {country}
              </button>
              {index < countries.length - 1 && <div className="w-px h-5 bg-zinc-800"></div>}
            </React.Fragment>
          ))}
        </div>
        <hr />
        <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-10 mt-10 mb-10">
          <div>
            <p className="text-zinc-500 font-bold text-sm">© foodpanda</p>
          </div>
          <div className="flex flex-col mb-5">
            {renderButtons(list1)}
          </div>
          <div className="flex flex-col mb-5">
            {renderButtons(list2)}
          </div>
          <div className="flex flex-col mb-5">
            {renderButtons(list3)}
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center mt-10 mb-10 max-sm:flex-col">
          <div className="flex items-center h-5">
            <img
              src={FoodPandaLogo}
              className="h-fit w-[14%] max-sm:w-[50%] aspect-video object-cover"
              alt="foodpanda logo"
            />
            <div className="w-px h-9 bg-zinc-800"></div>
            <img
              src={DeliveryLogo}
              className="h-fit w-[14%] max-sm:w-[50%] aspect-video object-cover"
              alt="delivery logo"
            />
          </div>
          <div className="flex justify-between max-sm:mt-8">
            <button className="p-2 rounded-full border hover:scale-110 transition-all duration-300 border-zinc-400 me-3 ">
              <FacebookOutlinedIcon className="text-zinc-600 " />
            </button>
            <button className="p-2 rounded-full border hover:scale-110 transition-all duration-300 border-zinc-400">
              <InstagramIcon className="text-zinc-600" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
