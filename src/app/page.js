"use client";
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Typography, 
  Badge, 
  Box, 
  Container, 
  IconButton,
  Stack,
  Chip,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SpicyChefLogo from './components/SpicyChefLogo';
// import { useNavigate } from 'react-router-dom';
import { useIsMobile } from './hooks/use-mobile';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import HeroBanner from './components/HeroBanner';
import HowToOrder from './components/HowToOrder';
import DealsSection from './components/DealsSection';
import PopularDeals from './components/PopularDeals';
import RestaurantMenu from './components/ResturantMenu';
import RideBanner from './components/RideBanner';
import ChefCategories from './components/ChefCategories';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Index = () => {
  // const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const navItems = [
    { name: 'Home', active: true },
    { name: 'Browse Menu', active: false },
    { name: 'Special Offers', active: false },
    { name: 'Branches', active: false },
    { name: 'Track Order', active: false },
  ];
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Info Bar */}
      <Box sx={{ bgcolor: '#f9f9f9',  }}>
      <Container maxWidth="xl">
  <Box sx={{ 
        
        py: { xs: 0.5, sm: 0 }, 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        px: { xs: 1.5, sm: 2, md: 0},
        gap: { xs: 1, md: 0 }
      }}>
        {/* Promo chip */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent:{sm:'auto', xs:'center'},
          width: { xs: '100%', md: 'auto' }
        }}>
          <Chip 
            icon={<span role="img" aria-label="sparkle">✨</span>} 
            label="Get 20% Off" 
            sx={{ 
              bgcolor: 'transparent', 
              fontWeight: 'bold', 
              color: '#333',
              '& .MuiChip-icon': { 
                color: '#f5cf4c',
                fontSize: '1.2rem',
                mr: -0.5
              }
            }} 
          />
        </Box>
        
        {/* Location info */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 0.5,
          width: { xs: '100%', md: 'auto' },
          flexWrap: 'wrap'
        }}>
          <LocationOnIcon sx={{ color: '#000', fontSize: isSmallMobile ? '0.9rem' : '1.2rem' }} />
          <Typography variant={isSmallMobile ? "caption" : "body2"} sx={{ mr: 0.5, color:'#03081F' }}>
            Regent Street, A4, 44201, London
          </Typography>
          <Button 
            sx={{ 
              color: 'red', 
              textTransform: 'none', 
              fontWeight: 'bold',
              p: 0,
              minWidth: 'auto',
              fontSize: isSmallMobile ? '0.7rem' : 'inherit'
            }}
          >
            Change Location
          </Button>
        </Box>
        
        {/* Cart summary - Updated to match the image */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: 'auto' },
            mt: { xs: 1, md: 0 },
            display: 'flex',
            // overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <Box sx={{
            bgcolor: '#028643',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: {sm:'center', xs:'space-evenly'},
            borderBottomLeftRadius: {sm:'12px', xs:'4px'},
            borderTopLeftRadius: {sm:'0', xs:'4px'},
            gap: 1,
            py: { xs: 0.5, sm: 0 },
            px: { xs: 1.5, sm: 2 },
            flex:{sm:'unset', xs:1.5}
          }}>
            <ShoppingCartIcon sx={{ fontSize: isSmallMobile ? '1rem' : '1.25rem', borderRight: '0.2px solid rgba(255, 255, 255, 0.4)', paddingRight:'7px', width:'30px', height:'100%', }} />
            <Typography sx={{ fontSize: isSmallMobile ? '0.8rem' : '0.9rem', fontWeight: 'medium', borderRight: '0.2px solid rgba(255, 255, 255, 0.4)', paddingRight:'7px',display:'flex', alignItems:'center', height:'100%' }}>
              23 Items
            </Typography>
          </Box>
          
          <Box sx={{
            bgcolor: '#028643',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            py: { xs: 0.5, sm: 2 },
            borderRight: '0.2px solid rgba(255, 255, 255, 0.4)', paddingRight:'7px',
            fontSize: isSmallMobile ? '0.8rem' : '0.9rem',
            fontWeight: 'medium',
            flex:{sm:'unset', xs:1}
          }}>
            <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
              GBP 79.89
            </Typography>
          </Box>
          
          <IconButton 
            sx={{ 
              bgcolor: '#028643', 
              color: '#fff',
              borderRadius: 0,
              height: '100%',
              borderBottomRightRadius: {sm:'12px', xs:'4px'},
              borderTopRightRadius: {sm:'0', xs:'4px'},
              flex:{sm:'unset', xs:0.2},
              '&:hover': {
                bgcolor: '#096b36',
              },
              py: { xs: 0.9, sm: 2.1 },
              px: { xs: 1, sm: 1.2 },
            }}
          >
            <FileDownloadIcon sx={{ fontSize: isSmallMobile ? '1rem' : '1.25rem', width:'30px', }} />
          </IconButton>
        </Box>
      </Box>
  </Container>
      </Box>

      
      {/* Main Navigation */}
      <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 'none', py: { xs: 0.5, md: 1 } }}>
        <Container maxWidth="xl">
          <Toolbar 
            disableGutters 
            sx={{ 
              justifyContent: 'space-between',
              minHeight: { xs: '56px', sm: '64px' }
            }}
          >
            <SpicyChefLogo />
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.name}
                    variant={item.active ? "contained" : "text"}
                    sx={{ 
                      bgcolor: item.active ? '#ea384c' : 'transparent',
                      color: item.active ? 'white' : '#333',
                      borderRadius: item.active ? '50px' : 'initial',
                      px: item.active ? 4 : 2,
                      '&:hover': {
                        bgcolor: item.active ? '#d1303f' : 'rgba(0,0,0,0.04)',
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
                
                <Button 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#0f0339', 
                    borderRadius: '50px',
                    px: 3,
                    '&:hover': {
                      bgcolor: '#0a0229',
                    }
                  }}
                >
                  Login/Signup
                </Button>
              </Box>
            )}
            
            {/* Mobile menu button */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileMenu}
                sx={{ color: '#333' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          '& .MuiDrawer-paper': { 
            width: { xs: '75%', sm: '50%' },
            boxSizing: 'border-box',
            bgcolor: 'white'
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SpicyChefLogo />
          <IconButton onClick={toggleMobileMenu}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem 
              key={item.name} 
              disablePadding
              sx={{
                bgcolor: item.active ? 'rgba(234, 56, 76, 0.1)' : 'transparent',
                borderLeft: item.active ? '4px solid #ea384c' : '4px solid transparent',
              }}
            >
              <ListItemButton>
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{
                    fontWeight: item.active ? 'bold' : 'normal',
                    color: item.active ? '#ea384c' : 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button 
            variant="contained" 
            fullWidth
            sx={{ 
              bgcolor: '#0f0339', 
              borderRadius: '50px',
              py: 1,
              '&:hover': {
                bgcolor: '#0a0229',
              }
            }}
          >
            Login/Signup
          </Button>
        </Box>
      </Drawer>
      
      {/* Page Content */}
      <Container maxWidth="xl">
        <HeroBanner/>
              {/* Deals Section with tabs */}
      <DealsSection />
      <HowToOrder/>
      <ChefCategories/>
      <PopularDeals/>
      <RestaurantMenu/>
      <RideBanner/>
      </Container>
      
    </Box>
  );
};

export default Index;
