
'use client'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, PaletteColorOptions,Paper,Stack,AppBar,Toolbar,IconButton,Badge} from '@mui/material';
import { Divider } from '@mui/material';

import styled from 'styled-components';
import { createTheme, alpha, getContrastRatio, ThemeProvider } from '@mui/material/styles';


 
  
  const Display2 =styled.div`
  display: flex;
  margin-top: 50px;
  `;
const Paper1=styled(Paper)`
width: 270px;
height: 150px;
background-image: url("/images/02.png");
background-size: cover;
background-repeat: no-repeat;
border: 1px solid #e0e0e0;
`;
const Paper2=styled(Paper)`
width: 270px;
height: 150px;
background-image: url("/images/03.png");
background-size: cover;
background-repeat: no-repeat;
border: 1px solid #e0e0e0;
`;

const Paper3 = styled(Paper)`
width: 200px;
height: 150px;
margin-top: 20px,
background-image: url("/images/04.png");
background-size: cover;
background-repeat: no-repeat;
border: 1px solid #e0e0e0;
`;

// margin-left: 150px;

const Card3 = styled(Card)`

width:1130px;
height: 450px;
`;

const Button1 = styled(Button)`
margin-top: 50px;
`;
const Box1=styled(Box)`
position:absolute;
  margin-left: 800px;
  padding: 0px;
  border-radius: 0px;
`;
const Box4=styled(Box)`
display: flex;
margin-left: 20px;
`;



export function Community2() {
    return (
      

<>
<Card3>
<CardContent>
  
  <Typography variant="h6" component="div">
  Stories, tips and tools to inspire your best work.
  </Typography>
  <Divider sx={{ mt:1}}/>
  <Box1 >
<Paper1 variant="outlined" 
/>
 </Box1>


  <Typography component="div">
      {/* <Box sx={{ fontWeight: 'light', m: 1 }}>Light</Box>
      <Box sx={{ fontWeight: 'regular', m: 1 }}>Regular</Box> */}
      <Box sx={{ fontWeight: 'medium', mb: 1, color:"purple" }}>Featured</Box> 
      <Box sx={{ fontWeight: 500, m: 0 }}>Hire Smarter, Not Harder: How Cloud-Based Squads Can Help You Thrive In A Volatile Market</Box>
      <Box sx={{  m: 0,color:"text.secondary"}}>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.</Box>
    </Typography>


</CardContent>
<CardActions >
<Button1 variant="contained" style={{ backgroundColor: '#6633ff', color: 'white' }}>
        Read more
</Button1>
       \
        
</CardActions>
<Divider />


<Box4>

<Paper2 variant="outlined" />
<Typography variant="h6" sx={{mt:2,ml:2}}>
Why We Were Destined To <br />Power the Innovator Economy

<Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
        
Lorem ipsum dolor sit amet, consectetur adipiscing  <br />elit. Varius facilisis arcu viverra elit pretium adsasd
        </Typography>
        <Button variant="outlined" style={{ backgroundColor: '#6633ff', color: 'white' }}>Read more</Button>

  </Typography>

  <Box4>

<Paper3 variant="outlined" 
/>
<Typography variant="h6" sx={{mt:2,ml:2}}>
Why We Were Destined To <br />Power the Innovator Economy

<Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
        
Lorem ipsum dolor sit amet, consectetur adipiscing  <br />elit. Varius facilisis arcu viverra elit pretium adsasd
        </Typography>
        <Button variant="outlined" style={{ backgroundColor: '#6633ff', color: 'white' }} >Read more</Button>

</Typography>
</Box4>
</Box4>
</Card3>
</>


    )}