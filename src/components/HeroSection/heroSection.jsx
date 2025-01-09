import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import heroImage from "../../assets/refresh-hero-home-pk.webp";
import MyLocationIcon from "@mui/icons-material/MyLocation";

export default function HeroSection() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: { xs: "auto", sm: "650px" },
          backgroundColor: "#f7f7f7",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: 2, sm: 0 },
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            padding: { xs: 2, sm: 5 },
            textAlign: { xs: "center", sm: "left" },
            "@media (max-width: 1280px) and (min-width: 800px)": {
              padding: 3,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Open Sans", Arial, sans-serif',
              fontWeight: 700,
              fontSize: { xs: "32px", sm: "42px", md: "48px" },
              color: "#333333",
              lineHeight: 1.2,
              marginBottom: 4,
              marginLeft: { xs: 0, sm: "190px" },
              "@media (max-width: 1280px) and (min-width: 800px)": {
                marginLeft: "60px",
                fontSize: "38px",
                marginTop: "20px",
              },
            }}
          >
            It's the food and groceries{" "}
            <span style={{ color: "#e21b70" }}>you love</span>,{" "}
            <br />
            delivered
          </Typography>

          {/* Search Box */}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: { xs: 2, sm: 3 },
              borderRadius: 2,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: 2,
              marginLeft: { xs: 0, sm: "190px" },
              maxWidth: "550px",
              "@media (max-width: 1280px) and (min-width: 800px)": {
                marginLeft: "58px",
                padding: "24px",
              },
            }}
          >
            {/* Input Field */}
            <TextField
              placeholder="Enter your full street address"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#f7f7f7",
                  borderRadius: 1,
                  height: 54,
                  "&:hover fieldset": {
                    borderColor: "#e21b70",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#e21b70",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: 16,
                  "&::placeholder": {
                    color: "#666",
                    opacity: 1,
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      sx={{
                        color: "#e21b70",
                        fontWeight: 600,
                        fontSize: 15,
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "transparent",
                          opacity: 0.8,
                        },
                        minWidth: "auto",
                        padding: "8px 12px",
                      }}
                      startIcon={<MyLocationIcon />}
                    >
                      Locate me
                    </Button>
                  </InputAdornment>
                ),
              }}
            />

            {/* Find Food Button */}
            <Button
              sx={{
                backgroundColor: "#e21b70",
                color: "#ffffff",
                borderRadius: 1,
                padding: "15px 24px",
                fontWeight: 600,
                fontSize: { xs: "15px", sm: "16px" },
                width: { xs: "100%", sm: "auto" },
                whiteSpace: "nowrap",
                minWidth: { sm: "140px" },
                "&:hover": {
                  backgroundColor: "#c21760",
                },
                textTransform: "none",
              }}
            >
              Find Food
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            height: { xs: "300px", sm: "100%", md: "1000px" },
            maxHeight: 650,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginLeft: { sm: "auto" },
            width: { xs: "100%", sm: "40%", md: "50%" },
          }}
        ></Box>
      </Box>
    </Box>
  );
}