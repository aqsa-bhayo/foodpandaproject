import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import pageBg from "../../../assets/bg.gif";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("User Signed Up:", data);

    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(data));

    // Show the Snackbar for successful sign up
    setOpen(true);

    // Redirect to sign-in page after a delay
    setTimeout(() => {
      navigate("/sign-in");
    }, 1000);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${pageBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: "600px",
          padding: "32px",
          border: "4px solid #EC4899",
          borderRadius: "16px",
        }}
      >
        <Typography variant="h4" color="primary" sx={{ mb: 4, fontWeight: "bold", color: "#EC4899" }}>
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 1, color: "black" }}>Name</Typography>
            <TextField
              fullWidth
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </Box>

          {/* Email Field */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 1, color: "black" }}>Email</Typography>
            <TextField
              fullWidth
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </Box>

          {/* Password Field */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 1, color: "black" }}>Password</Typography>
            <TextField
              fullWidth
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </Box>

          {/* Already have an account? */}
          <Typography variant="body2" sx={{ mb: 3 }}>
            Already have an account?{" "}
            <Button
              variant="text"
              onClick={() => navigate("/sign-in")}
              sx={{
                textTransform: "none",
                color: "#EC4899",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
          </Typography>

          {/* Sign Up Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#EC4899",
              color: "white",
              py: 2,
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                bgcolor: "#D81B60",
              },
            }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>

      {/* Customized Snackbar for Successful Sign Up */}
      <Snackbar
        open={open}
        onClose={closeSnackbar}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={closeSnackbar}
          severity="success"
          variant="filled"
          sx={{
            bgcolor: "white",
            color: "#EC4899",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Sign Up successful! Please login.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUp;
