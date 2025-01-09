import React from "react";
import { Container, Typography, Box } from "@mui/material"; // Import MUI components
import CheckIcon from '@mui/icons-material/Check'; // Importing the CheckIcon

const QuestionSection = () => {
  return (
    <Box sx={{mt:7,}}>
      <Box sx={{ pt: 5, mx: { xs: 0, sm: 16 } }}>
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h4" sx={{ mt: { xs: 7, sm: 9 }, mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
            Order food and groceries online from the best restaurants and shops on foodpanda
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 8 }}>
            Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Pakistan is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your every day easier.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: 'text.primary' }}>
            What's new?
          </Typography>
          <Typography sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', mb: 2 }}>
            <CheckIcon sx={{ color: 'pink', mr: 1 }} /> Wide variety of restaurants and shops, an abundance of cuisines & products.
          </Typography>
          <Typography sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', mb: 2 }}>
            <CheckIcon sx={{ color: 'pink', mr: 1 }} /> High quality delivery service.
          </Typography>
          <Typography sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', mb: 2 }}>
            <CheckIcon sx={{ color: 'pink', mr: 1 }} /> Live chat feature to give App users instant help when they need it.
          </Typography>
          <Typography sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', mb: 2 }}>
            <CheckIcon sx={{ color: 'pink', mr: 1 }} /> NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries, and more near you.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <hr />
        </Box>

        <Box>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
            Frequently Asked Questions
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            How can I get foodpanda delivery?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will arrive at your doorstep!
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            Which takeout restaurants open now near me?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will see all the available restaurants and shops that deliver to your area.
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            Does foodpanda deliver 24 hours?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a late-night delivery. Please check which places in Pakistan deliver to you within 24 hours by using your address. You can also order groceries 24 hours a day via pandamart.
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            Can you pay cash for foodpanda?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            Yes, you can pay cash on delivery for foodpanda in Pakistan.
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            How can I pay foodpanda online?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal.
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            Can I order foodpanda for someone else?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update the name and delivery address of the person you're ordering for. Please keep in mind that if the delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            How much does foodpanda charge for delivery?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            Delivery fee charged by foodpanda in Pakistan depends on many operational factors, most of all - location and the restaurant you are ordering from. You can always check the delivery fee while forming your order. Besides, you can filter the restaurants by clicking on the "Free Delivery" icon at the top of your restaurant listing.
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            What restaurants let you order online?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            There are hundreds of restaurants on foodpanda Pakistan that let you order online. For example, KFC, McDonald's, Pizza Hut, OPTP, Hardee's, Domino's, Kababjees, and many more! In order to check all the restaurants near you that deliver, just type in your address and discover all the available places.
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            Does foodpanda have minimum order?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            Yes, many restaurants have a minimum order. The minimum order value depends on the restaurant you order from and is indicated during your ordering process.
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            What is the difference between delivery and Pick-Up?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            If you choose delivery, a foodpanda rider will collect your order from the restaurant and take it to your chosen delivery address. If you choose Pick-Up, you can takeaway your food directly from the restaurant for extra savings – and to jump to the front of the queue. Pick-Up orders are available for restaurants only.
          </Typography>

          <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
            Order food and groceries online with foodpanda now and enjoy a great dining experience!
          </Typography>
        </Box>
      </Container>
    </Box>
    </Box>
  );
};

export default QuestionSection;
