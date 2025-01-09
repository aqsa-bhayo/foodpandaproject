import React from 'react';
import { Box, Typography, Button, Card } from '@mui/material';
import officeWork from '../../assets/office-work.webp';

const OfficeWork = () => {
  return (
    <Box>
      {/* Title Text */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          lineHeight: '42px',
          color: 'rgb(0, 0, 0)',
          marginTop: { xs: '20px', sm: '30px', md: '60px', lg: '90px' },
          marginBottom: { xs: '20px', sm: '30px', md: '40px' },
          marginLeft: { xs: '0', sm: '0', md: '92px', lg: '210px' },
          fontSize: { xs: '20px', sm: '22px', md: '34px', lg: '42px' },
          textAlign: { xs: 'center', md: 'left' }, // Center on smaller screens
          zIndex: 2,
        }}
      >
        Take your office out to lunch
      </Typography>

      <Box sx={{ position: 'relative', width: '100%', height: { xs: '30vh', sm: '40vh', md: '50vh' } }}>
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${officeWork})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '@media (max-width: 768px)': {
              height: '40%', // Adjust height for smaller screens
            },
            '@media (max-width: 480px)': {
              height: '30%', // Adjust height for smaller screens
            },
          }}
        />

        {/* Card Overlay */}
        <Card
          sx={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: { xs: 2, sm: 3, md: 4 },
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: 2,
            maxWidth: '600px',
            width: { xs: '90%', sm: '80%', md: '70%' },
            zIndex: 2,
            '@media (max-width: 1024px)': {
              top: '110%',
              width: '80%',
              padding: 3,
            },
            '@media (max-width: 768px)': {
              top: '110%',
              width: '80%',
              padding: 3,
            },
            '@media (max-width: 480px)': {
              top: '83%',
              width: '90%',
              padding: 2,
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              marginBottom: { xs: 2, sm: 3 },
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
            }}
          >
            foodpanda for business
          </Typography>
          <Typography
            sx={{
              marginBottom: { xs: 2, sm: 3 },
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
            }}
          >
            Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.
          </Typography>

          <Button
            sx={{
              fontFamily: '"Open Sans", arial, sans-serif',
              fontWeight: 600,
              color: 'rgb(255, 255, 255)',
              fontSize: { xs: '12px', sm: '14px' },
              backgroundColor: '#c21760',
              padding: { xs: '10px', sm: '12px', md: '15px' },
              borderRadius: '13px',
              cursor: 'pointer',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#a80348f5',
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

export default OfficeWork;
