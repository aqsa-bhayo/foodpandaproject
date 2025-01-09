import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Importing Link for creating clickable links

// Updated city images array with new cities
const cityImages = [
  { src: require('../../assets/Islamabad download.jpg'), name: 'Islamabad' },
  { src: require('../../assets/Karachi Quaid-e-Azam mazar.jpg'), name: 'Karachi' },
  { src: require('../../assets/Lahore.jpg'), name: 'Lahore' },
  { src: require('../../assets/Faisalabad.webp'), name: 'Faisalabad' },
  { src: require('../../assets/Rawalpindi img 1.jpg'), name: 'Rawalpindi' },
  { src: require('../../assets/Abbotabad img download.jpg'), name: 'Abbotabad' },
  { src: require('../../assets/Bahawalpur img.jpg'), name: 'Bahawalpur' },
  { src: require('../../assets/Dera Gazi Khan.jpg'), name: 'Dera Gazi Khan' },
  { src: require('../../assets/Gujranwala.webp'), name: 'Gujranwala' },
  { src: require('../../assets/Gujrat.jpg'), name: 'Gujrat' },
  { src: require('../../assets/Jhelum img.jpg'), name: 'Jhelum' },
  { src: require('../../assets/Hyderabad.webp'), name: 'Hyderabad' },
  { src: require('../../assets/Komake img.jpg'), name: 'Komake' },
  { src: require('../../assets/Larkana img.jpg'), name: 'Larkana' },
  { src: require('../../assets/Mangla img.jpg'), name: 'Mangla' },
  { src: require('../../assets/Mardan img.jpg'), name: 'Mardan' },
  { src: require('../../assets/Multan img.jpg'), name: 'Multan' },
  { src: require('../../assets/Muree img.jpg'), name: 'Muree' },
  { src: require('../../assets/Okara  mg.jpg'), name: 'Okara' },
  { src: require('../../assets/Panoaqil img.jpg'), name: 'Pano Aqil' },
  { src: require('../../assets/Peshawer img.jpg'), name: 'Peshawar' },
  { src: require('../../assets/Quetta.jpg'), name: 'Quetta' },
  { src: require('../../assets/Raheem yar khan.jpg'), name: 'Rahim Yar Khan' },
  { src: require('../../assets/Sadiaqabad.jpg'), name: 'Sadiqabad' },
  { src: require('../../assets/Sahiwal.jpg'), name: 'Sahiwal' },
  { src: require('../../assets/Sargoda.jpg'), name: 'Sargodha' },
  { src: require('../../assets/Shikarpur.jpg'), name: 'Sheikhupura' },
  { src: require('../../assets/Sialkot img.jpg'), name: 'Sialkot' },
  { src: require('../../assets/Sukkur.jpg'), name: 'Sukkur' },
  { src: require('../../assets/Wah Cant.jpg'), name: 'Wah Cantt' },
];

const LandingCards = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Open Sans", Arial, sans-serif',
          fontWeight: 700,
          fontSize: { xs: '28px', sm: '35px', md: '40px' },
          color: 'rgb(51, 51, 51)',
          lineHeight: 1.3,
          marginBottom: 3,
          marginTop: 30,
          marginLeft: { xs: 0, sm: '198px' },
          textAlign: { xs: 'center', sm: 'left' },
          '@media (max-width: 1280px) and (min-width: 800px)': {
            marginLeft: '38px',
            fontSize: '32px',
            marginTop: '210px',
            whiteSpace: 'nowrap',
          },
        }}
      >
        Find us in these cities and many more!
      </Typography>

      <Grid
        container
        spacing={0.5} // Reduces space between cards
        justifyContent="center"
        sx={{
          px: { xs: 2, sm: 4, md: 25 }, // Padding for left and right for all screens
          "@media (max-width: 1280px) and (min-width: 800px)": {
            px: 4, // Adjust padding for laptop screens (between 800px and 1280px)
            spacing: 1, // Adjust spacing between cards for laptop screens
          },
        }}
      >
        {/* Map over the city images and add button for city names */}
        {cityImages.map((image, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3} // Four items in a row for medium and larger screens
            key={index}
          >
            <Box
              sx={{
                position: 'relative', // Ensure positioning of button over the image
                '&:hover img': {
                  transform: 'scale(1.05)', // Slightly scale up the image on hover
                  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)', // Add shadow effect on hover
                },
              }}
            >
              {/* Use Link for navigation on image click */}
              <Link to={`/restaurants/${image.name}`} style={{ display: 'block' }}>
                <Box
                  component="img"
                  src={image.src}
                  alt={`City ${index + 1}`}
                  sx={{
                    width: '93%', // Adjust to fill Grid cell
                    height: '250px', // Fixed height for uniform image sizes
                    objectFit: 'cover', // Cover the area without distorting the image
                    borderRadius: 2, // Rounded corners
                    boxShadow: 3, // Optional shadow for effect
                    marginTop: 2,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for scaling and shadow
                  }}
                />
              </Link>
              {/* Button over the image */}
              <Button
                variant="contained"
                sx={{
                  position: 'absolute',
                  bottom: '17%', // Adjust position for mobile and larger screens
                  left: '5%',  // Position it to the left side of the image
                  transform: 'translateY(50%)', // Center the button vertically in the bottom area
                  backgroundColor: 'white', // White background
                  color: 'black', // Black text color
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  borderRadius: '10px', // Rounded corners
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: '#f0f0f0', // Light grey on hover
                  },
                }}
              >
                {image.name}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LandingCards;
