import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { setDeliveryInfo } from "../../redux/deliverySlice";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Switch,
  FormControlLabel,
  Paper,
  Modal,
} from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DeliveryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState("Home");
  const [customLabel, setCustomLabel] = useState("");
  const [isContactless, setIsContactless] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      label: customLabel || selectedLabel,
      contactlessDelivery: isContactless,
    };
    dispatch(setDeliveryInfo(finalData));
    setDeliveryDetails(finalData);
    setIsModalOpen(true);
  };

  const handleOrderConfirm = () => {
    setIsModalOpen(false);
    navigate("/restaurants");
  };

  return (
    <Box>
      <Header />
      <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", py: 4, px: 2 }}>
        <Box sx={{ width: "100%", maxWidth: 900 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 4, fontWeight: 600, color: "#df3f83", textTransform: "uppercase" }}
          >
            Delivery Information
          </Typography>

          <Paper
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              borderRadius: 4,
              boxShadow: 4,
              overflow: "hidden",
              p: 4,
              bgcolor: "white",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 500, color: "#333" }}>
              Enter Details
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{ required: "Full name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                  sx={{ mb: 3 }}
                />
              )}
            />

            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Add a Label
            </Typography>
            <ToggleButtonGroup
              value={selectedLabel}
              exclusive
              onChange={(e, newLabel) => {
                if (newLabel) setSelectedLabel(newLabel);
                setCustomLabel("");
              }}
              sx={{ mb: 2 }}
            >
              <ToggleButton value="Home">Home</ToggleButton>
              <ToggleButton value="Work">Work</ToggleButton>
              <ToggleButton value="Partner">Partner</ToggleButton>
              <ToggleButton value="Other">Other</ToggleButton>
            </ToggleButtonGroup>
            {selectedLabel === "Other" && (
              <TextField
                label="Custom Label"
                variant="outlined"
                fullWidth
                value={customLabel}
                onChange={(e) => setCustomLabel(e.target.value)}
                sx={{ mb: 3 }}
              />
            )}

            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={{ mb: 3 }}
                />
              )}
            />

            <Controller
              name="streetAddress"
              control={control}
              defaultValue=""
              rules={{ required: "Street address is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Street Address"
                  variant="outlined"
                  error={!!errors.streetAddress}
                  helperText={errors.streetAddress?.message}
                  sx={{ mb: 3 }}
                />
              )}
            />

            <Controller
              name="contactNumber"
              control={control}
              defaultValue=""
              rules={{
                required: "Contact number is required",
                pattern: { value: /^[0-9]+$/, message: "Invalid phone number" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Contact Number"
                  variant="outlined"
                  error={!!errors.contactNumber}
                  helperText={errors.contactNumber?.message}
                  sx={{ mb: 3 }}
                />
              )}
            />

            <Controller
              name="deliveryOption"
              control={control}
              defaultValue="standard"
              rules={{ required: "Please select a delivery option" }}
              render={({ field }) => (
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Delivery Option</InputLabel>
                  <Select {...field} label="Delivery Option">
                    <MenuItem value="standard">Standard Delivery (3-5 Days)</MenuItem>
                    <MenuItem value="express">Express Delivery (1-2 Days)</MenuItem>
                    <MenuItem value="same_day">Same Day Delivery</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <FormControlLabel
              control={
                <Switch
                  checked={isContactless}
                  onChange={(e) => setIsContactless(e.target.checked)}
                />
              }
              label="Contactless Delivery"
              sx={{ mb: 3 }}
            />

            <Controller
              name="riderTip"
              control={control}
              defaultValue=""
              rules={{
                pattern: { value: /^[0-9]+(\.[0-9]{1,2})?$/, message: "Invalid amount" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Rider Tip (Optional)"
                  variant="outlined"
                  error={!!errors.riderTip}
                  helperText={errors.riderTip?.message}
                  sx={{ mb: 3 }}
                />
              )}
            />

            <Controller
              name="deliveryInstructions"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Delivery Instructions (Optional)"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: 3 }}
                />
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#df3f83",
                "&:hover": { bgcolor: "#c82d6b" },
                fontSize: "16px",
                py: 1.5,
              }}
            >
              Confirm Delivery
            </Button>
          </Paper>
        </Box>
      </Box>

      {/* Modal for Confirmation */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="order-confirmation"
        aria-describedby="order-details"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography id="order-confirmation" variant="h5" sx={{ mb: 2 }}>
            Order Confirmed! 🎉
          </Typography>
          <Typography id="order-details" variant="body1" sx={{ mb: 3 }}>
            Your order with the label "{customLabel || selectedLabel}" has been successfully placed. Contactless delivery is {isContactless ? "enabled" : "disabled"}.
          </Typography>
          <Button
            onClick={handleOrderConfirm}
            variant="contained"
            sx={{
              bgcolor: "#df3f83",
              "&:hover": { bgcolor: "#c82d6b" },
            }}
          >
            Continue to Restaurants
          </Button>
        </Box>
      </Modal>

      <Footer />
    </Box>
  );
};

export default DeliveryPage;
