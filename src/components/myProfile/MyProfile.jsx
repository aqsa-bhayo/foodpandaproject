import { Box, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Load user information from local storage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    console.log("Retrieved user data:", savedUser); // Debugging
    if (savedUser) {
      setUser(savedUser);
      reset({
        name: savedUser.name || "",
        email: savedUser.email || "",
        currentPassword: "",
        newPassword: "",
      });
    } else {
      // If no user data exists, initialize with empty fields
      reset({
        name: "",
        email: "",
        currentPassword: "",
        newPassword: "",
      });
    }
  }, [reset]);

  const onSubmit = (data) => {
    console.log("Submitted data:", data); // Debugging

    // Extract only the fields to be saved in user data
    const { name, email } = data;

    // Create an updated user object, preserving existing data and updating necessary fields
    const updatedUser = {
      ...user,
      name: name.trim(),
      email: email.trim(),
      // Note: Handle password updates separately if needed
    };

    // Save the updated user data to local storage
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // Update the local state
    setUser(updatedUser);

    alert("Profile updated successfully!");

    // Redirect to the home page
    navigate("/");
  };

  return (
    <Box>
      <Header />
      <div
        style={{
          maxWidth: "600px",
          margin: "60px auto",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "160px",
            marginLeft: "20px",
            color: "#ff2b85",
          }}
        >
          My Profile
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Full Name */}
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name ? "Please enter your full name" : ""}
            {...register("name", { required: true })}
          />

          {/* Email */}
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email ? "Please enter a valid email" : ""}
            {...register("email", { required: true })}
          />

          {/* Current Password */}
          <TextField
            label="Current Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.currentPassword}
            helperText={
              errors.currentPassword
                ? "Please enter your current password"
                : ""
            }
            {...register("currentPassword", { required: true })}
          />

          {/* New Password */}
          <TextField
            label="New Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.newPassword}
            helperText={
              errors.newPassword ? "Please enter a new password" : ""
            }
            {...register("newPassword", { required: true })}
          />

          {/* Save Button */}
          <Box mt={3}>
            <Button
              type="submit"
              variant="contained"
              fullWidth // Makes the button span the width of the form
              style={{
                backgroundColor: "#ff2b85",
                color: "white",
              }}
            >
              Save
            </Button>
          </Box>
        </form>
      </div>
      <Footer />
    </Box>
  );
};

export default MyProfile;
