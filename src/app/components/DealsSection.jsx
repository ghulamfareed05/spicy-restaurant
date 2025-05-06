import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card,
  CardMedia,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Chip,
  styled,
  useMediaQuery,
  useTheme, Container
} from '@mui/material';

// Styled custom tab component
const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 72,
  fontWeight: 'normal',
  color: '#333',
  '&.Mui-selected': {
    backgroundColor: 'white',
    color: '#ea384c',
    fontWeight: 'medium',
    borderRadius: '50px',
  },
  '&.MuiTab-root': {
    borderRadius: '50px',
    padding: '6px 16px',
    minHeight: '36px',
  }
}));

// Styled tabs wrapper
const CustomTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(1),
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

// Restaurant card component
const RestaurantCard = ({ image, discount, name, category, location }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Card 
      sx={{ 
        borderRadius: '16px',
        overflow: 'hidden',
        height: '100%',
        position: 'relative',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width:'100%'
      }}
    >
         <Box sx={{ position: 'relative', width: '100%' }}>
      <CardMedia
        component="img"
        height={isMobile ? '160' : '200'}
        image={image}
        alt={name}
        sx={{ objectFit: 'cover' }}
      />

        {/* Overlay */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Semi-transparent overlay
      zIndex: 1,  // Ensure it stays on top of the image
    }}
  />
      </Box>
      {/* Discount chip */}
      <Chip 
        label={discount} 
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          backgroundColor: '#1A1F2C',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '0.85rem',
          zIndex:99999
        }}
      />
      
      <CardContent sx={{ p: 2 }}>
        <Typography 
          variant="caption" 
          component="p" 
          sx={{ 
            color: '#ea384c', 
            fontWeight: 'medium',
            mb: 0.5
          }}
        >
          {category}
        </Typography>
        
        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ 
            fontWeight: 'bold', 
            fontSize: '1.1rem',
            mb: 0.5,
            color: '#1A1F2C'
          }}
        >
          {name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

const DealsSection = () => {
  const [activeTab, setActiveTab] = useState(2); // Default to "Pizza & Fast food" tab
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  
  // Mock data for restaurants based on categories
  const restaurantsByCategory = {
    vegan: [
      {
        id: 1,
        name: 'Green Harvest',
        category: 'Restaurant',
        location: 'Camden, London',
        image: 'dealsimg.png',
        discount: '-25%'
      },
      {
        id: 2,
        name: 'Plant Power',
        category: 'Restaurant',
        location: 'Soho, London',
        image: 'dealsimg.png',
        discount: '-15%'
      },
      {
        id: 3,
        name: 'Veggie Paradise',
        category: 'Restaurant',
        location: 'Shoreditch, London',
        image: 'dealsimg.png',
        discount: '-30%'
      }
    ],
    sushi: [
      {
        id: 1,
        name: 'Sushi Master',
        category: 'Restaurant',
        location: 'Covent Garden, London',
        image: 'dealsimg.png',
        discount: '-20%'
      },
      {
        id: 2,
        name: 'Tokyo Roll',
        category: 'Restaurant',
        location: 'Mayfair, London',
        image: 'dealsimg.png',
        discount: '-35%'
      },
      {
        id: 3,
        name: 'Sakura Sushi',
        category: 'Restaurant',
        location: 'Soho, London',
        image: 'dealsimg.png',
        discount: '-18%'
      }
    ],
    pizza: [
      {
        id: 1,
        name: 'Chef Burgers London',
        category: 'Restaurant',
        location: 'Soho, London',
        image: 'dealsimg.png',
        discount: '-40%'
      },
      {
        id: 2,
        name: 'Grand Ai Cafe London',
        category: 'Restaurant',
        location: 'Covent Garden, London',
        image: 'dealsimg.png',
        discount: '-20%'
      },
      {
        id: 3,
        name: 'Butterbrot Cafe London',
        category: 'Restaurant',
        location: 'Camden, London',
        image: 'dealsimg.png',
        discount: '-17%'
      }
    ],
    others: [
      {
        id: 1,
        name: 'Sweet Delights',
        category: 'Dessert Shop',
        location: 'Notting Hill, London',
        image: 'dealsimg.png',
        discount: '-22%'
      },
      {
        id: 2,
        name: 'Fresh & Healthy',
        category: 'Juice Bar',
        location: 'Kensington, London',
        image: 'dealsimg.png',
        discount: '-15%'
      },
      {
        id: 3,
        name: 'Spice Corner',
        category: 'Indian',
        location: 'Brick Lane, London',
        image: 'dealsimg.png',
        discount: '-25%'
      }
    ]
  };
  
  const tabs = [
    { label: 'Vegan', value: 0 },
    { label: 'Sushi', value: 1 },
    { label: 'Pizza & Fast food', value: 2 },
    { label: 'Others', value: 3 }
  ];
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  // Get restaurants based on active tab
  const getRestaurants = () => {
    switch(activeTab) {
      case 0: return restaurantsByCategory.vegan;
      case 1: return restaurantsByCategory.sushi;
      case 2: return restaurantsByCategory.pizza;
      case 3: return restaurantsByCategory.others;
      default: return restaurantsByCategory.pizza;
    }
  };
  
  const restaurants = getRestaurants();
  
  return (
<Container maxWidth="xl" sx={{ mt:{sm:'80px', xs:'50px'} }}>
<Box
      sx={{
        py: { xs: 4, md: 6 },
      }}
    >
      {/* Header section with title and tabs */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          mb: { xs: 3, md: 4 },
          gap: { xs: 3, md: 0 }
        }}
      >
        {/* Title with emoji */}
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            color: '#1A1F2C',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1
          }}
        >
          Up to -40%
          <Box 
            component="span" 
            sx={{ 
              display: 'inline-flex', 
              mx: 0.5,
              fontSize: 'inherit'
            }}
            role="img" 
            aria-label="party popper"
          >
            🎊
          </Box>
          Spicy Chef exclusive deals
        </Typography>
        
        {/* Tabs */}
        <Box sx={{ maxWidth: { xs: '100%', md: 'auto' }, overflowX: 'auto' }}>
          <CustomTabs
            value={activeTab}
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons="auto"
            sx={{ 
              minHeight: '36px',
              bgcolor: '#f5f5f5',
              borderRadius: '50px',
              p: 0.5,
            }}
          >
            {tabs.map((tab) => (
              <CustomTab 
                key={tab.value} 
                label={tab.label} 
                value={tab.value}
                disableRipple
              />
            ))}
          </CustomTabs>
        </Box>
      </Box>
      
      {/* Restaurant cards grid */}
      <Grid container spacing={3} sx={{ width: '100%' }}>
        {restaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={restaurant.id} sx={{ flexGrow:1 }}>
            <RestaurantCard {...restaurant} />
          </Grid>
        ))}
      </Grid>
    </Box>
</Container>
  );
};

export default DealsSection;