import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HuaweiIcon from '@mui/icons-material/PhoneIphone';

const AppDownload = () => {
  return (
    <Box sx={{ padding: '90px 16px', maxWidth: '1440px', margin: 'auto', height: '100%', marginTop: '20px' }}>
      <Grid container spacing={3}>
        {/* Header Section */}
        <Grid
          item
          xs={12}
          sx={{
            textAlign: '',
            marginBottom: 3,
            color: 'rgb(51, 51, 51)',
          }}
        >
          <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
            Put us in your pocket
          </Typography>
        </Grid>

        {/* Main Content Section */}
        <Grid
          item
          xs={12}
          sx={{
            display: { xs: 'none', md: 'block' }, // Hides section on small screens (xs, sm), shows on medium and larger
            backgroundColor: '#e21b70',
            padding: 4,
            borderRadius: '10px',
          }}
        >
          <Grid container spacing={3}>
            {/* Left Column: QR code and description */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  marginTop: 2,
                  color: 'white',
                  fontWeight: '600',
                }}
              >
                Download the food and groceries you love
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: '500px',
                  wordBreak: 'break-word',
                  marginTop: 4,
                  color: 'white',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="https://images.deliveryhero.io/image/foodpanda/homepage/pkhomepageqrcode.png"
                    alt="QR Code"
                    style={{
                      width: '80px',
                      height: '80px',
                      marginRight: '16px',
                    }}
                  />
                  <Box sx={{ paddingTop: '10px' }}>
                    It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries
                    to suit your mood, and make the first bite last. Go ahead, download us.
                  </Box>
                </Box>
              </Typography>

              {/* Buttons placed below text */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' }, // Center on small screens, left-align on large screens
                  flexWrap: 'wrap',
                  gap: 2,
                  marginTop: 6,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AppleIcon />}
                  href="https://bhpz.adj.st/?adj_t=f6igys&adj_deep_link=foodpanda%3A%2F%2F%3F%26wssid%3D1734162193944.115054327703949969.4xozrar2z7&adj_campaign=pk_homepage_ios&wssid=1734162193944.115054327703949969.4xozrar2z7"
                  target="_blank"
                  sx={{
                    backgroundColor: 'black', // Background color
                    color: 'white', // Text color
                    '&:hover': {
                      backgroundColor: '#333', // Darker shade on hover
                    },
                    width: '160px', // Uniform width for buttons
                    textTransform: 'none',
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" component="div" sx={{ fontSize: 10 }}>
                      Download on the
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ fontWeight: 'bold', fontSize: 12 }}>
                      App Store
                    </Typography>
                  </Box>
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<PlayArrowIcon sx={{ fontSize: 18 }} />} // Smaller Play Store-like icon
                  href="https://bhpz.adj.st/?adj_t=dfv9zs&adj_deep_link=foodpanda%3A%2F%2F%3F%26wssid%3D1734162193944.115054327703949969.4xozrar2z7&adj_campaign=pk_homepage_android&wssid=1734162193944.115054327703949969.4xozrar2z7"
                  target="_blank"
                  sx={{
                    backgroundColor: 'black', // Background color
                    color: 'white', // Text color
                    '&:hover': {
                      backgroundColor: '#333', // Darker shade on hover
                    },
                    width: '160px', // Uniform width for buttons
                    textTransform: 'none',
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" component="div" sx={{ fontSize: 12 }}>
                      Get it on
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ fontWeight: 'bold', fontSize: 12 }}>
                      Play Store
                    </Typography>
                  </Box>
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<HuaweiIcon />}
                  href="https://bhpz.adj.st/?adj_t=h8w5e0t&adj_deep_link=foodpanda%3A%2F%2F%3F%26wssid%3D1734162193944.115054327703949969.4xozrar2z7&adj_campaign=pk_homepage_huawei&wssid=1734162193944.115054327703949969.4xozrar2z7"
                  target="_blank"
                  sx={{
                    backgroundColor: 'black', // Background color
                    color: 'white', // Text color
                    '&:hover': {
                      backgroundColor: '#333', // Darker shade on hover
                    },
                    width: '160px', // Uniform width for buttons
                    textTransform: 'none',
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" component="div" sx={{ fontSize: 12 }}>
                      Explore it on
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ fontWeight: 'bold', fontSize: 12 }}>
                      App Gallery
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Grid>

            {/* Right Column: Image Section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <img
                src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=2000&height=1590"
                alt="banner"
                style={{
                  width: '100%', // Adjust size as needed
                  height: 'auto',
                  position: 'absolute', // Allows the image to be placed outside its container
                  bottom: '-150px', // Push image upward
                  zIndex: 2, // Ensure it appears above other elements
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppDownload;
