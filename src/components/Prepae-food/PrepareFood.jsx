import React from 'react';
import { Box, Typography, Button, Card } from '@mui/material';
import venderImg from '../../assets/home-vendor-pk.webp';

const CardOverlay = () => {
  return (
    <Box>
      {/* Title Text */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          lineHeight: '42px',
          color: 'rgb(0, 0, 0)',
          marginTop: '90px',
          marginBottom: '40px',
          marginLeft: '210px',
          zIndex: 2,
          '@media (max-width: 1280px) and (min-width: 800px)': {
            marginLeft: '92px', // Adjust for screens between 1280px and 800px
            fontSize: '34px',
            marginTop: '60px',
          },
          '@media (max-width: 768px)': {
            marginLeft: '0',
            fontSize: '22px', // Smaller font for narrower devices
            marginTop: '30px',
          },
          '@media (max-width: 480px)': {
            fontSize: '20px',
            marginTop: '20px',
          },
        }}
      >
        You prepare the food, we handle the rest
      </Typography>



      <Box sx={{ position: 'relative', width: '100%', height: '50vh' }}>
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${venderImg})`, // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '@media (max-width: 768px)': {
              height: '40%', // Adjust height for smaller screens
            },
            '@media (max-width: 480px)': {
              height: '30%', // Adjust for very small screens
            },
          }}
        />

        {/* Card Overlay with Text */}
        <Card
          sx={{
            position: 'absolute',
            top: '100%', // Keep card vertically positioned as per your original request
            left: '30%', // Horizontally positioned at 30% from the left
            transform: 'translate(-50%, -50%)', // Adjusts the position relative to the card's width/height
            padding: 4,
            backgroundColor: 'rgb(255, 255, 255)', // White background
            borderRadius: 2,
            maxWidth: '600px',
            color: 'rgb(0, 0, 0)',
            width: '90%', // Default to 90% width for desktop
            height: 'auto',
            zIndex: 2, // Ensures the card is above the background image
            '@media (max-width: 1024px)': {
              top: '110%', // Adjust top for tablets or smaller laptops (make sure the card remains visible)
              left: '50%', // Center the card horizontally on laptops/tablets
              transform: 'translate(-50%, -50%)', // Keeps it centered
              width: '80%', // Reduce width for better fit on tablets
              padding: 3, // Adjust padding for smaller screens
            },
            '@media (max-width: 768px)': {
              top: '110%', // Adjust top further for tablets
              left: '50%', // Center horizontally
              transform: 'translate(-50%, -50%)', // Maintain centered positioning
              width: '80%', // Make the card 80% of the container width
              padding: 3, // Reduce padding for tablets
            },
            '@media (max-width: 480px)': {
              top: '83%', // Adjust the top further for mobile screens to prevent overlap
              left: '50%', // Keep horizontally centered
              transform: 'translate(-50%, -50%)', // Maintain vertical and horizontal centering
              width: '90%', // Card width to be 90% on mobile screens
              padding: 2, // Smaller padding for mobile screens
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              marginBottom: '25px',
              '@media (max-width: 768px)': {
                fontSize: '18px', // Smaller font size for mobile devices
                marginBottom: '15px',
              },
              '@media (max-width: 480px)': {
                fontSize: '16px', // Further smaller font for small screens
              },
            }}
          >
            List your restaurant or shop on foodpanda
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
          </Typography>
          <Typography sx={{ marginBottom: 3 }}>
            It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
          </Typography>
          <Typography sx={{ marginBottom: 3 }}>
            Interested? Let's start our partnership today!
          </Typography>
          <Button
            sx={{
              fontFamily: '"Open Sans", arial, sans-serif',
              fontStyle: 'normal',
              fontWeight: 600,
              color: 'rgb(255, 255, 255)',
              fontSize: '14px',
              lineHeight: '22px',
              border: 'none',
              backgroundColor: '#c21760',
              padding: '15px',
              borderRadius: '13px',
              cursor: 'pointer',
              textTransform: 'none', // Prevents the text from being capitalized
              '&:hover': {
                backgroundColor: '#a80348f5', // Hover effect
              },
              '@media (max-width: 768px)': {
                padding: '12px', // Adjust padding for smaller screens
              },
              '@media (max-width: 480px)': {
                padding: '10px', // Further reduced padding for small screens
              },
            }}
          >
            Get Started
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default CardOverlay;
