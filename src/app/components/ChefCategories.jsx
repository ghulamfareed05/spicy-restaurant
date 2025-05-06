// import React from "react";
// import { Box, Typography, Grid, Paper, Container } from "@mui/material";
// import { styled } from "@mui/material/styles";


// const ChefCategories = () => {
//   return (
//     <>
//       {/* Header Section */}
//       <Box sx={{ textAlign: "left", mb: 4 ,mt:{sm:'100px', xs:'50px'}}}>
//         <Typography
//           variant="h4"
//           component="h2"
//           sx={{
//             fontWeight: 700,
//             color: "#222222",
//           }}
//         >
//           Spicy chef Popular Categories 🤩
//         </Typography>
//       </Box>

//       {/* Deals Grid */}
//       <Grid container sx={{ my:5 ,display:'flex', justifyContent:'center'}} spacing={1}>
//         <Grid item lg={2} md={4} sm={6} xs={12}>
//           <Box
//             sx={{
//               borderRadius: "10px",
//               overflow: "hidden",
//               position: "relative",
//               height: "200px", // Fixed height for all cards
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <img
//               src="/images/categories1.webp"
//               alt=""
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//                       <Box
//             sx={{
//               position: "absolute",
//               bottom: '0',
//               left:0,
//               right:0,
//               backgroundColor: "#03081F", // Red background for the deal label
//               color: "#fff",
//               padding: "10px",
//               textAlign: "center",
//             }}
//           >
//             <Typography  sx={{ fontSize:'15px' }}>
//               BreakFast
//             </Typography>
//           </Box>
//           </Box>

//         </Grid>
//         <Grid item lg={2} md={4} sm={6} xs={12} >
//           <Box
//             sx={{
//               borderRadius: "10px",
//               overflow: "hidden",
//               position: "relative",
//               height: "200px", // Fixed height for all cards
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <img
//               src="/images/categories1.webp"
//               alt=""
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//                       <Box
//             sx={{
//               position: "absolute",
//               bottom: '0',
//               left:0,
//               right:0,
//               backgroundColor: "#03081F", // Red background for the deal label
//               color: "#fff",
//               padding: "10px",
//               textAlign: "center",
//             }}
//           >
//             <Typography  sx={{ fontSize:'15px' }}>
//               Dinner
//             </Typography>
//           </Box>
//           </Box>

//         </Grid>
//         <Grid item lg={2} md={4} sm={6} xs={12}>
//           <Box
//             sx={{
//               borderRadius: "10px",
//               overflow: "hidden",
//               position: "relative",
//               height: "200px", // Fixed height for all cards
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <img
//               src="/images/categories2.webp"
//               alt=""
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//                       <Box
//             sx={{
//               position: "absolute",
//               bottom: '0',
//               left:0,
//               right:0,
//               backgroundColor: "#03081F", // Red background for the deal label
//               color: "#fff",
//               padding: "10px",
//               textAlign: "center",
//             }}
//           >
//             <Typography  sx={{ fontSize:'15px' }}>
//               Lunch
//             </Typography>
//           </Box>
//           </Box>

//         </Grid>
//         <Grid item lg={2} md={4} sm={6} xs={12}>
//           <Box
//             sx={{
//               borderRadius: "10px",
//               overflow: "hidden",
//               position: "relative",
//               height: "200px", // Fixed height for all cards
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <img
//               src="/images/categories3.webp"
//               alt=""
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//                       <Box
//             sx={{
//               position: "absolute",
//               bottom: '0',
//               left:0,
//               right:0,
//               backgroundColor: "#03081F", // Red background for the deal label
//               color: "#fff",
//               padding: "10px",
//               textAlign: "center",
//             }}
//           >
//             <Typography  sx={{ fontSize:'15px' }}>
//               Pizza
//             </Typography>
//           </Box>
//           </Box>

//         </Grid>
//         <Grid item lg={2} md={4} sm={6} xs={12}>
//           <Box
//             sx={{
//               borderRadius: "10px",
//               overflow: "hidden",
//               position: "relative",
//               height: "200px", // Fixed height for all cards
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <img
//               src="/images/categories3.webp"
//               alt=""
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//                       <Box
//             sx={{
//               position: "absolute",
//               bottom: '0',
//               left:0,
//               right:0,
//               backgroundColor: "#03081F", // Red background for the deal label
//               color: "#fff",
//               padding: "10px",
//               textAlign: "center",
//             }}
//           >
//             <Typography  sx={{ fontSize:'15px' }}>
//              Pasta
//             </Typography>
//           </Box>
//           </Box>

//         </Grid>
//         <Grid item lg={2} md={4} sm={6} xs={12}>
//           <Box
//             sx={{
//               borderRadius: "10px",
//               overflow: "hidden",
//               position: "relative",
//               height: "200px", // Fixed height for all cards
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <img
//               src="/images/deal1.webp"
//               alt=""
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//                       <Box
//             sx={{
//               position: "absolute",
//               bottom: '0',
//               left:0,
//               right:0,
//               backgroundColor: "#03081F", // Red background for the deal label
//               color: "#fff",
//               padding: "10px",
//               textAlign: "center",
//             }}
//           >
//             <Typography  sx={{ fontSize:'15px' }}>
//               Burger
//             </Typography>
//           </Box>
//           </Box>

//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default ChefCategories;


import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import Slider from 'react-slick'; // Import react-slick
import { ArrowForward, ArrowBack } from '@mui/icons-material';

// Custom styling for arrows using MUI and React Slick
const arrowStyle = {
    position: 'absolute',
    top: '50%',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    borderRadius: '50%',
    padding: '10px',
    fontSize: '20px',
    cursor: 'pointer',
  };


const ChefCategories = () => {
    const settings = {
        infinite: true,  // Keep the carousel looping
        centerPadding: "0",
        speed: 500,
        slidesToShow: 6, // Number of items to show at once
        slidesToScroll: 1, // Number of items to scroll at once
        autoplay: true,  // Enable auto-play
        autoplaySpeed: 3000,  // Time interval between slides (in milliseconds)
        nextArrow: (
            <IconButton sx={{ position: 'absolute', right: 0, top: '50%', zIndex: 1, transform: 'translateY(-50%)', }}>
     
            </IconButton>
          ),
          prevArrow: (
            <IconButton sx={{ position: 'absolute', left: 0, top: '50%', zIndex: 1, transform: 'translateY(-50%)' }}>
              
            </IconButton>
          ),
        responsive: [
          {
            breakpoint: 1024, // For tablets
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600, // For mobile
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <>
      {/* Header Section */}
      <Box sx={{ textAlign: 'left', mb: 4, mt: { sm: '100px', xs: '50px' } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            color: '#222222',
          }}
        >
          Spicy Chef Popular Categories 🤩 
        </Typography>
      </Box>

      {/* Carousel Section */}
      <Slider {...settings}>
        {/* Card 1 */}
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px', // Fixed height for all cards
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                margin: '0 8px', // Adding spacing between the cards
            }}
          >
            <img
              src="/images/categories1.webp"
              alt="Breakfast"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '0',
                left: 0,
                right: 0,
                backgroundColor: '#03081F', // Red background for the deal label
                color: '#fff',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '15px' }}>Breakfast</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Card 2 */}
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px', // Fixed height for all cards
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                margin: '0 8px', // Adding spacing between the cards
            }}
          >
            <img
              src="/images/categories1.webp"
              alt="Dinner"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '0',
                left: 0,
                right: 0,
                backgroundColor: '#03081F', // Red background for the deal label
                color: '#fff',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '15px' }}>Dinner</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Card 3 */}
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px', // Fixed height for all cards
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                margin: '0 8px', // Adding spacing between the cards
            }}
          >
            <img
              src="/images/categories2.webp"
              alt="Lunch"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '0',
                left: 0,
                right: 0,
                backgroundColor: '#03081F', // Red background for the deal label
                color: '#fff',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '15px' }}>Lunch</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px', // Fixed height for all cards
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                margin: '0 8px', // Adding spacing between the cards
            }}
          >
            <img
              src="/images/categories2.webp"
              alt="Lunch"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '0',
                left: 0,
                right: 0,
                backgroundColor: '#03081F', // Red background for the deal label
                color: '#fff',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '15px' }}>Lunch</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px', // Fixed height for all cards
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                margin: '0 8px', // Adding spacing between the cards
            }}
          >
            <img
              src="/images/categories2.webp"
              alt="Lunch"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '0',
                left: 0,
                right: 0,
                backgroundColor: '#03081F', // Red background for the deal label
                color: '#fff',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '15px' }}>Lunch</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px', // Fixed height for all cards
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                margin: '0 8px', // Adding spacing between the cards
            }}
          >
            <img
              src="/images/categories2.webp"
              alt="Lunch"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '0',
                left: 0,
                right: 0,
                backgroundColor: '#03081F', // Red background for the deal label
                color: '#fff',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '15px' }}>Lunch</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px', // Fixed height for all cards
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                margin: '0 8px', // Adding spacing between the cards
            }}
          >
            <img
              src="/images/categories2.webp"
              alt="Lunch"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '0',
                left: 0,
                right: 0,
                backgroundColor: '#03081F', // Red background for the deal label
                color: '#fff',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '15px' }}>Lunch</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <Box
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px', // Fixed height for all cards
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                margin: '0 8px', // Adding spacing between the cards
            }}
          >
            <img
              src="/images/categories2.webp"
              alt="Lunch"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '0',
                left: 0,
                right: 0,
                backgroundColor: '#03081F', // Red background for the deal label
                color: '#fff',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '15px' }}>Lunch</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Add more items as needed */}
      </Slider>
    </>
  );
};

export default ChefCategories;
