import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";



const PopularDeals = () => {
  return (
    <>
      {/* Header Section */}
      <Box sx={{ textAlign: "left", mb: 4 ,mt:{sm:'100px', xs:'50px'}}}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            color: "#222222",
          }}
        >
          Popular Deals
        </Typography>
      </Box>

      {/* Deals Grid */}
      <Grid container sx={{ my:5 ,display:'flex', justifyContent:'center'}} spacing={1}>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              height: "200px", // Fixed height for all cards
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/deal4.webp"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
                      <Box
            sx={{
              position: "absolute",
              bottom: '0',
              left:0,
              right:0,
              backgroundColor: "#ea384c", // Red background for the deal label
              color: "#fff",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Typography  sx={{ fontSize:'15px' }}>
              Deal 1
            </Typography>
          </Box>
          </Box>

        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12} >
          <Box
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              height: "200px", // Fixed height for all cards
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/deal3.webp"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
                      <Box
            sx={{
              position: "absolute",
              bottom: '0',
              left:0,
              right:0,
              backgroundColor: "#ea384c", // Red background for the deal label
              color: "#fff",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Typography  sx={{ fontSize:'15px' }}>
              Deal 1
            </Typography>
          </Box>
          </Box>

        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              height: "200px", // Fixed height for all cards
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/deal4.webp"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
                      <Box
            sx={{
              position: "absolute",
              bottom: '0',
              left:0,
              right:0,
              backgroundColor: "#ea384c", // Red background for the deal label
              color: "#fff",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Typography  sx={{ fontSize:'15px' }}>
              Deal 1
            </Typography>
          </Box>
          </Box>

        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              height: "200px", // Fixed height for all cards
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/deal2.webp"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
                      <Box
            sx={{
              position: "absolute",
              bottom: '0',
              left:0,
              right:0,
              backgroundColor: "#ea384c", // Red background for the deal label
              color: "#fff",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Typography  sx={{ fontSize:'15px' }}>
              Deal 1
            </Typography>
          </Box>
          </Box>

        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              height: "200px", // Fixed height for all cards
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/deal3.webp"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
                      <Box
            sx={{
              position: "absolute",
              bottom: '0',
              left:0,
              right:0,
              backgroundColor: "#ea384c", // Red background for the deal label
              color: "#fff",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Typography  sx={{ fontSize:'15px' }}>
              Deal 1
            </Typography>
          </Box>
          </Box>

        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              height: "200px", // Fixed height for all cards
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/deal1.webp"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
                      <Box
            sx={{
              position: "absolute",
              bottom: '0',
              left:0,
              right:0,
              backgroundColor: "#ea384c", // Red background for the deal label
              color: "#fff",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Typography  sx={{ fontSize:'15px' }}>
              Deal 1
            </Typography>
          </Box>
          </Box>

        </Grid>
      </Grid>
      {/* <Grid container spacing={2}>
        {deals.map((deal) => (
          <Grid item xs={12} sm={6} md={4} lg={2} md={4} sm={6} xs={12} key={deal.id}>
            <DealPaper elevation={0}>
              <DealImage 
                src={deal.image} 
                alt={deal.title} 
              />
              <DealLabel>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {deal.title}
                </Typography>
              </DealLabel>
            </DealPaper>
          </Grid>
        ))}
      </Grid> */}
    </>
  );
};

export default PopularDeals;
