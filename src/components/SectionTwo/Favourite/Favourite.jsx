import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Header/Header"; // Import your Header component
import Footer from "../../Footer/Footer"; // Import Footer component
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material"; // Material UI components

const Favorites = () => {
  // Get favorites from Redux state
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Favorites Page Section */}
      <Box sx={{ paddingTop: "90px", backgroundColor: "#f8f9fa", minHeight: "", paddingBottom: "50px" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "#333",
              textAlign: "center",
              marginBottom: "40px",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Your Favorite Restaurants
          </Typography>

          {/* Favorites Grid */}
          <Grid container spacing={4}>
            {favorites.length > 0 ? (
              favorites.map((restaurant) => (
                <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                  <Card sx={{ display: "flex", flexDirection: "column", borderRadius: "10px", boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={restaurant.image}
                      alt={restaurant.name}
                      sx={{ objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "600", color: "#444" }}>
                        {restaurant.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#888", fontSize: "14px" }}>
                        {restaurant.category}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#888", fontSize: "14px" }}>
                        ⭐ {restaurant.rating}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: "#888", textAlign: "center" }}>
                  You have no favorites yet! Start adding some.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Favorites;
