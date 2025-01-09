import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import pageBg from "../../../assets/bg-1.gif";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Paper,
} from "@mui/material";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "" });

  const handleLogin = ({ email, password }) => {
    const userData = localStorage.getItem("user");
    const parsedUser = userData && JSON.parse(userData);

    if (parsedUser && parsedUser.email === email && parsedUser.password === password) {
      setSnackbar({ open: true, message: "Login successful!", severity: "success" });
      localStorage.setItem("isLoggedIn", true);

      setTimeout(() => navigate("/"), 1000);
    } else {
      setSnackbar({ open: true, message: "Invalid email or password!", severity: "error" });
    }
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    const timer = setTimeout(() => closeSnackbar(), 3000);
    return () => clearTimeout(timer);
  }, [snackbar.open]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${pageBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit(handleLogin)}
        sx={{
          p: 8,
          maxWidth: 700, // Increased form width
          minWidth: 550, // Larger minimum width
          height: 600, // Fixed height for larger form
          borderRadius: 6,
          boxShadow: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "#EC4899", fontWeight: "bold" }}
        >
          Sign In
        </Typography>

        <Box sx={{ mb: 3 }}>
          <TextField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            label="Email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            {...register("password", {
              required: "Password is required",
            })}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>

        <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
          Don't have an account?{" "}
          <Button
            onClick={() => navigate("/sign-up")}
            sx={{
              textTransform: "none",
              color: "#EC4899", // Pink color
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Button>
        </Typography>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#EC4899", // Pink button
            color: "#FFF",
            fontSize: "1.2rem", // Larger text
            py: 2, // Taller button
            "&:hover": {
              bgcolor: "#D81B60", // Darker pink on hover
            },
          }}
        >
          Sign In
        </Button>
      </Paper>

      {/* Customized Snackbar */}
      <Snackbar
        open={snackbar.open}
        onClose={closeSnackbar}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
