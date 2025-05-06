import React from 'react';
import { Box, Typography } from '@mui/material';

const SpicyChefLogo = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFA500',
        height: 72,
        width: 72,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontFamily: '"Brush Script MT", cursive',
          color: '#0b8043',
          lineHeight: '1',
          fontSize: '1rem',
          textAlign: 'center'
        }}
      >
        Spicy
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          color: '#0b8043',
          letterSpacing: '1px',
          lineHeight: '1',
          fontSize: '1rem',
          textAlign: 'center'
        }}
      >
        CHEF
      </Typography>
    </Box>
  );
};

export default SpicyChefLogo;