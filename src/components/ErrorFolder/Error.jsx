import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const Error = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 300px)', // Adjust height to account for footer and header
          textAlign: 'center',
          backgroundColor: '#f4f4f9',
          padding: '0 20px',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', md: '6rem' },
            fontWeight: 'bold',
            color: '#ff2b85',
            margin: '0',
          }}
        >
          404
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.5rem',
            color: '#555',
            margin: '10px 0',
            fontWeight: 'bold',
          }}
        >
          Something went wrong
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            color: '#777',
            margin: '10px 0 20px',
          }}
        >
          We're deeply sorry, but something went wrong. Please try to refresh the page or start over.
        </Typography>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            backgroundColor: '#ff2b85',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#e01d73')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff2b85')}
        >
          Go Back Home
        </button>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '20px 0',
          borderTop: '1px solid #ddd',
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: '',
            textAlign: '',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Footer Items */}
          {[
            'Press Help Center',
            'Refunds with pandapay',
            'Pandapay User Account Terms and Conditions',
            'Terms and conditions',
            'Privacy policy',
            'Security',
            'Download foodpanda Apps',
            'Human rights policy',
            'Careers',
            'Suggest a restaurant',
            'Corporate Customer Cashback Terms and Conditions',
            'All cuisines',
            'foodpanda Magazine',
            'Partner with us',
            'pandago - Request a rider',
            'foodpanda Vouchers & Promo',
            'All cities',
            'Update on COVID-19 in Pakistan',
            'pandamart Grocery Delivery',
            'pandapro - monthly subscription programme',
            'foodpanda home chef',
            'Become an affiliate',
            'Ramzan deals',
          ].map((item, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={index}
              sx={{
                fontSize: '0.9rem',
                color: '#ff2b85',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {item}
            </Grid>
          ))}
        </Grid>

        {/* Footer Bottom Text */}
        <Typography
          sx={{
            marginTop: '20px',
            fontSize: '0.8rem',
            color: '#999',
            textAlign: 'center',
          }}
        >
          © 2023 foodpanda
        </Typography>
      </Box>
    </Box>
  );
};

export default Error;
