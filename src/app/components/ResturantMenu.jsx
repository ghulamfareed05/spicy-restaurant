import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button, 
  Box 
} from '@mui/material';

// Simple custom star component instead of using StarIcon
const StarRating = ({ rating }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center',
    }}
  >
    <Typography 
      variant="body2" 
      sx={{ 
        color: '#DB2A27',
        fontWeight: 'bold',
        mr: 0.5,
      }}
    >
      ★
    </Typography>
    <Typography variant="body2" fontWeight="bold">
      {rating.toFixed(1)}
    </Typography>
  </Box>
);

// Menu items data
const menuItems = [
  {
    id: 1,
    name: 'Grill Sandwich',
    price: 30.00,
    image: '/images/resturant-menu.webp',
    ingredients: 'Beetroot, Potato, Bell Pepper, Sandwich Masala.',
    rating: 5.0
  },
  {
    id: 2,
    name: 'Chicken Popeyes',
    price: 20.00,
    image: '/images/deal1.webp',
    ingredients: 'Beetroot, Potato, Bell Pepper, Sandwich Masala.',
    rating: 4.0
  },
  {
    id: 3,
    name: 'Bison Burgers',
    price: 50.00,
    image: '/images/resturant-menu.webp',
    ingredients: 'Beetroot, Potato, Bell Pepper, Sandwich Masala.',
    rating: 2.0
  },
  {
    id: 4,
    name: 'Grill Sandwich',
    price: 30.00,
    image: '/images/deal4.webp',
    ingredients: 'Beetroot, Potato, Bell Pepper, Sandwich Masala.',
    rating: 5.0
  },
  {
    id: 5,
    name: 'Grill Sandwich',
    price: 30.00,
    image: '/images/deal2.webp',
    ingredients: 'Beetroot, Potato, Bell Pepper, Sandwich Masala.',
    rating: 5.0
  },
  {
    id: 6,
    name: 'Chicken Popeyes',
    price: 20.00,
    image: '/images/resturant-menu.webp',
    ingredients: 'Beetroot, Potato, Bell Pepper, Sandwich Masala.',
    rating: 4.0
  },
  {
    id: 7,
    name: 'Bison Burgers',
    price: 50.00,
    image: '/images/deal2.webp',
    ingredients: 'Beetroot, Potato, Bell Pepper, Sandwich Masala.',
    rating: 2.0
  },
  {
    id: 8,
    name: 'Bison Burgers',
    price: 50.00,
    image: '/images/resturant-menu.webp',
    ingredients: 'Beetroot, Potato, Bell Pepper, Sandwich Masala.',
    rating: 2.0
  },
];

const RestaurantMenu = () => {
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to basket!`);
  };
  
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
        Menu
      </Typography>
      
      <Grid container spacing={1} sx={{ justifyContent:{sm:'center', xs:'center'} }}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={2.8} key={item.id}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              padding:'8px',
              '&:hover': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              }
            }}>
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: 'cover', borderRadius:'10px' }}
              />
              <CardContent sx={{ flexGrow: 1, pb: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" component="h2" fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography variant="h6" component="span" color="error" fontWeight="bold">
                    ${item.price.toFixed(2)}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {item.ingredients}
                </Typography>
                
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0, display:'flex', justifyContent:"space-between" }}>
              <StarRating rating={item.rating} />
                <Button 
                  variant="contained" 
                  onClick={() => handleAddToCart(item)}
                  sx={{
                    bgcolor: '#DB2A27',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#e01e27',
                    },
                    borderRadius: '6px',
                    textTransform: 'none',
                    ml: 'auto'
                  }}
                >
                  + Add to basket
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Button 
          variant="contained" 
          sx={{
            bgcolor: '#DB2A27',
            color: 'white',
            '&:hover': {
              bgcolor: '#e01e27',
            },
            borderRadius: '24px',
            py: 1.5,
            px: 4,
            textTransform: 'none',
            fontSize: '1rem'
          }}
        >
          All Menu
        </Button>
      </Box>
    </Container>
  );
};

export default RestaurantMenu;
