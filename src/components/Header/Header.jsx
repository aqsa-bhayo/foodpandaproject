import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Badge,
  Menu,
  MenuItem,
  Container,
  InputBase,
  Select,
  FormControl,
} from '@mui/material';
import {
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingBagOutlined as ShoppingBagOutlinedIcon,
  Search as SearchIcon,
  Person2 as Person2Icon,
  Logout as LogoutIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  LocationOn as LocationIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartDrawer from '../Cart-list/Cart';
import logo from '../../assets/logo.png'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
  color: '#333333',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#333333',
  padding: '8px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.04),
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#d70f64',
    color: '#fff',
    fontWeight: 'bold',
    minWidth: '18px',
    height: '18px',
    padding: '0 4px',
  },
}));

const LanguageSelect = styled(Select)(({ theme }) => ({
  color: '#333333',
  fontSize: '14px',
  '&:before': {
    borderColor: 'transparent',
  },
  '&:after': {
    borderColor: 'transparent',
  },
  '& .MuiSelect-select': {
    paddingRight: '24px !important',
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [language, setLanguage] = useState('EN');
  const navigate = useNavigate();
  const { totalQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setIsLoggedIn(true);
      setUserName(savedUser.name);
    }
  }, []);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
    handleProfileMenuClose();
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontWeight: 'bold',
                cursor: 'pointer',
                mr: 2,
                color: '#d70f64',
                display: 'flex', // Added to align the image and text horizontally
                alignItems: 'center', // Vertically center the text and logo
              }}
              onClick={() => navigate('/')}
            >
              <img src={logo} alt="foodpanda logo" style={{ height: '30px', marginRight: '8px' }} />
              foodpanda
            </Typography>

            {/* Location Button */}
            <Button
              startIcon={<LocationIcon sx={{ color: '#d70f64' }} />}
              sx={{
                color: '#333333',
                textTransform: 'none',
                display: { xs: 'none', md: 'flex' },
                mr: 2,
              }}
            >
              Deliver to: Current Location
            </Button>

            <Box sx={{ flexGrow: 1 }} />

            {/* Language Selector */}
            <FormControl size="small" sx={{ mr: 2, minWidth: 80 }}>
              <LanguageSelect
                value={language}
                onChange={handleLanguageChange}
                IconComponent={KeyboardArrowDownIcon}
                variant="standard"
                sx={{
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    py: 0,
                  },
                }}
              >
                <MenuItem value="EN">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LanguageIcon sx={{ mr: 1, fontSize: 20 }} />
                    EN
                  </Box>
                </MenuItem>
                <MenuItem value="UR">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LanguageIcon sx={{ mr: 1, fontSize: 20 }} />
                    UR
                  </Box>
                </MenuItem>
              </LanguageSelect>
            </FormControl>

            {/* Right side icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Login/Sign up for not logged-in users */}
              {!isLoggedIn ? (
                <>
                  <Button
                    color="inherit"
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      textTransform: 'none',
                      color: '#d70f64',
                      '&:hover': {
                        backgroundColor: alpha('#d70f64', 0.04),
                      },
                    }}
                    onClick={() => navigate('/sign-in')}
                  >
                    Login
                  </Button>
                  <Button
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      backgroundColor: '#d70f64',
                      color: 'white',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: alpha('#d70f64', 0.8),
                      },
                    }}
                    onClick={() => navigate('/sign-up')}
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <>
                  {/* Display username and profile icon for logged-in users */}
                  <Typography variant="h6" sx={{ marginRight: 2 }}>
                    {userName}
                  </Typography>
                  <StyledIconButton onClick={handleProfileMenuOpen}>
                    <Person2Icon />
                  </StyledIconButton>
                </>
              )}

              {/* Wishlist and Cart */}
              <StyledIconButton onClick={() => navigate('/favourite')}>
                <FavoriteBorderIcon sx={{ fontSize: 24 }} />
              </StyledIconButton>

              <StyledIconButton onClick={() => setDrawerOpen(true)}>
                <StyledBadge badgeContent={totalQuantity}>
                  <ShoppingBagOutlinedIcon sx={{ fontSize: 24 }} />
                </StyledBadge>
              </StyledIconButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        PaperProps={{
          sx: {
            mt: 1,
            boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
          },
        }}
      >
        {isLoggedIn && (
          <>
            <MenuItem onClick={() => navigate('/profile')}>
              <Person2Icon sx={{ mr: 1 }} />
              My Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <LogoutIcon sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </>
        )}
      </Menu>

      {/* Cart Drawer */}
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Toolbar spacing */}
      <Toolbar />
    </Box>
  );
}
