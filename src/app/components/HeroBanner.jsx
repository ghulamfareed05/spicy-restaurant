import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  InputAdornment, 
  Button,
  useMediaQuery,
  useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const HeroBanner = () => {
  const [postcode, setPostcode] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleSearch = () => {
    console.log('Searching for:', postcode);
    // Implement search functionality here
  };
  
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '500px', sm: '550px', md: '600px' },
        bgcolor: '#1A1F2C',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        borderRadius:'10px'
      }}
    >
      {/* Background Image (Woman with pizza) */}
      <Box
        component="img"
        src="banners/hero-home.webp"
        alt="Food delivery"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 1,
        }}
      />
      
      {/* Content Container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          px: { xs: 2, sm: 4, md: 8 },
          maxWidth: '1400px',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Text Content */}
        <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
          <Typography 
            variant="subtitle1" 
            component="p"
            sx={{
              color: 'white',
              mb: 1,
              fontSize: { xs: '0.9rem', sm: '0.9em' },
            }}
          >
            Order Restaurant food, takeaway and groceries.
          </Typography>
          
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              mb: 1,
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
              lineHeight: 1.2,
            }}
          >
            Feast Your Senses,{' '}
            <Typography
              component="span"
              variant="inherit"
              sx={{ color: '#DB2A27' }}
            >
              Fast and Fresh
            </Typography>
          </Typography>
          
          <Typography
            variant="subtitle1"
            sx={{
              color: 'white',
              mb: 3,
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
            }}
          >
            Enter a postcode to see what we deliver
          </Typography>
          
          {/* Search Bar */}
          <Box
            sx={{
              display: 'flex',
              maxWidth: '600px',
              mt: 2,
            }}
          >
            <TextField
              fullWidth
              placeholder="e.g. EC4R 3TE"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              InputProps={{
                sx: {
                  bgcolor: 'white',
                  borderRadius: '50px',
                  height: { xs: '45px', sm: '50px' },
                  pr: 0,
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                bgcolor: '#DB2A27',
                borderRadius: '50px 50px 50px 50px',
                marginLeft: '-1px',
                height: { xs: '45px', sm: '50px' },
                position:'relative',
                left:'-60px',
                px: { xs: 4, sm: 6 },
                '&:hover': {
                  bgcolor: '#d1303f',
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;