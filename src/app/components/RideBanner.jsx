import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';

const RideBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        height: isMobile ? '250px' : '300px',
        mb: 4
      }}
    >
      {/* Banner Image */}
      <Box
        component="img"
        src="/images/ridebanner.webp"
        alt="Cyclist riding through city"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      
      {/* Content Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: {sm:'end', xs:'center'},
          p: '16px 32px',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: isMobile ? '100%' : '50%' }}>
            <Typography 
              variant="subtitle2" 
              color="#DB2A27"
              sx={{ 
                mb: 1, 
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '0.75rem'
              }}
            >
              Sign up in minutes
            </Typography>
            
            <Typography 
              variant="h3" 
              component="h2" 
              color="white" 
              sx={{ 
                mb: 3, 
                fontWeight: 'bold',
                fontSize: isMobile ? '2rem' : '2.5rem'
              }}
            >
              Ride with us
            </Typography>
            
            <Typography variant="body2" color="white" sx={{ display: { xs: 'none', sm: 'block' }, mb: 3 }}>
              Avail exclusive perks
            </Typography>
            
            <Button 
              variant="contained" 
              sx={{
                bgcolor: '#DB2A27',
                color: 'white',
                px: 8,
                py: 1,
                borderRadius: '24px',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#e01e27',
                }
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default RideBanner;