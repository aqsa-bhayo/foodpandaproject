import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  Button,
  Divider,
} from '@mui/material';
import {
  Close as CloseIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  ShoppingCart as CartIcon,
  DeleteOutline as DeleteIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate

const CartDrawer = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { items, totalAmount, totalQuantity } = useSelector((state) => state.cart);

  console.log('Cart State:', { items, totalAmount, totalQuantity });

  // Navigate to delivery page on checkout
  const handleCheckout = () => {
    dispatch(clearCart()); // Clear the cart before navigating
    navigate('/delivery'); // Navigate to the delivery page
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 400 },
          padding: 2,
          backgroundColor: '#fff',
        },
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CartIcon />
            <Typography variant="h6">Shopping Cart ({totalQuantity})</Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Cart Items */}
        {items.length > 0 ? (
          <List sx={{ flexGrow: 1, overflow: 'auto' }}>
            {items.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  py: 2,
                  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                }}
              >
                <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                  {/* Item Image */}
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}
                  />

                  {/* Item Details */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {item.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Rs. {parseFloat(item.price.replace(/[^0-9.]/g, ''))}
                    </Typography>

                    {/* Quantity Controls */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        sx={{ border: '1px solid rgba(0, 0, 0, 0.12)' }}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => dispatch(addToCart(item))}
                        sx={{ border: '1px solid rgba(0, 0, 0, 0.12)' }}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Item Total */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      Rs. {item.totalPrice}
                    </Typography>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => dispatch(removeFromCart(item.id))} // Remove item from cart
                      sx={{ mt: 1 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        ) : (
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <CartIcon sx={{ fontSize: 60, color: 'text.secondary' }} />
            <Typography variant="h6" color="text.secondary">
              Your cart is empty
            </Typography>
          </Box>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Divider />
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="subtitle1">Subtotal:</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Rs. {totalAmount}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Delivery charges will be calculated at checkout
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(clearCart())}
                fullWidth
                sx={{
                  borderColor: '#df3f83',
                  color: '#df3f83',
                  '&:hover': {
                    borderColor: '#a62d6c',
                    backgroundColor: '#df3f83',
                    color: '#fff',
                  },
                }}
              >
                Clear Cart
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#df3f83',
                  color: 'white',
                  fontWeight: 'bold',
                  width: '100%',
                  padding: '12px',
                }}
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
