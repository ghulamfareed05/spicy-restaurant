
import React from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box, Grid } from '@mui/material';
import orderFood from '../../../public/images/order_1.webp';
import Food from '../../../public/images/food_1.webp';
import Order from '../../../public/images/order_food.webp';
const HowToOrder = () => {
return(
<>
<Container maxWidth="xl" sx={{ mt:{sm:'100px', xs:'50px'} }}>
<Box sx={{ display:'flex', justifyConent:'center', flexDirection:'column', alignItems:'center' }}>
<Typography  sx={{ color:'#DB2A27', fontSize:'22px', fontWeight:'bold' }}>
    How to order
    </Typography>
    <Typography sx={{ fontSize:'32px', color:'#000', fontWeight:'bold' }}>
    It's as easy as this.
    </Typography>
</Box>

  <Box>
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', mt:3, mb:5 }}>   
    <Grid item lg={3} xs={12}>
      <Box sx={{ 
           textAlign: 'center', 
           overflow: 'hidden', 
           textOverflow: 'ellipsis', 
           wordWrap: 'break-word', 
           padding: 3,
            background:"#F6F6F6",
            borderRadius:'12px',
            mt:{sm:0, xs:2}
       }}>
        <Typography  sx={{ color:'#03081F', fontWeight:'bold',mb:2 }}>
        Tell us where you are
        </Typography>
        <img src="/images/order_food.webp" width="150px" alt="" />
        <Typography>
        Place order through our <br />website or Mobile app
        </Typography>
      </Box>

      </Grid> 
 
      <Grid item lg={3} xs={12}>
      <Box sx={{ 
           textAlign: 'center', 
           overflow: 'hidden', 
           textOverflow: 'ellipsis', 
           wordWrap: 'break-word', 
           padding: 3,
            background:"#F6F6F6",
            borderRadius:'12px',
            mt:{sm:0, xs:2}
       }}>
        <Typography sx={{ color:'#03081F', fontWeight:'bold',mb:2 }}>
        Tell us where you are
        </Typography>
        <img src="/images/food_1.webp" width="150px" alt="" />
        <Typography >
        Your can track your order <br />status with delivery time
        </Typography>
      </Box>
      </Grid>     
      <Grid item lg={3} xs={12}>
      <Box sx={{ 
           textAlign: 'center', 
           overflow: 'hidden', 
           textOverflow: 'ellipsis', 
           wordWrap: 'break-word', 
           padding: 3,
            background:"#F6F6F6",
            borderRadius:'12px',
            mt:{sm:0, xs:2}
       }}>
        <Typography  sx={{ color:'#03081F', fontWeight:'bold',mb:2 }}>
        Tell us where you are
        </Typography>
        <img src="/images/order_1.webp" width="150px" alt="" />
        <Typography>
        {/* Receive your order at a <br />lighting fast speed! */}
        Your can track your order <br />status with delivery time
        </Typography>
      </Box>
      </Grid>     
    </Grid>
  </Box>
</Container>
</>
);
};

export default HowToOrder;