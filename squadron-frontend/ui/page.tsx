'use client'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, PaletteColorOptions,Paper } from '@mui/material';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import styled from 'styled-components';
import { createTheme, alpha, getContrastRatio, ThemeProvider } from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface CustomPalette {
    anger: PaletteColorOptions;
    apple: PaletteColorOptions;
    steelBlue: PaletteColorOptions;
    violet: PaletteColorOptions;
    
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    anger: true;
    apple: true;
    steelBlue: true;
    violet: true;
    
  }
}

// const violetBase = '#7F00FF';
// const violetMain = alpha(violetBase, 0.7);

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  palette: {
    anger: createColor('#F40B27'),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#7F00FF'),
   
    
  },
});

// const Displaya = styled.div`
// display: flex;
// flex-direction:row;
// `;
// const Card1 = styled(Card)`
// width: 400px;
// margin-left: 150px;
// `;
// const AvatarG = styled(AvatarGroup)`
// margin-right: 550px;
// `;
// const Displayb = styled.div`
// margin-top: 50px;
// display: flex;
// `;
// const Card2 = styled(Card)`
// width: 400px;
// margin-left: 150px;
// `;
// const Card3 = styled(Card)`
// width:1130;
// height: 450;
// margin-left: 150px;
// `;
// const Btn1=styled(Button)`
// margin-top: 50px;
// variant="contained";
// color="violet";

// `;
// const Box1=styled(Box)`
// position:absolute;
//   margin-left: 800px;
//   padding: 0px;
//   border-radius: 0px;
// `;

// const Box2=styled(Box)`
// padding: 0px;
// border-radius: 0px;

// `;


// const Box4=styled(Box)`
// display: flex;
// margin-left: 20px;

// `;


const paperStyle = {
  width: 270,
  height: 150,
  marginBottom: 0,
  backgroundImage: 'url("/images/02.png")',
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center',
  border: '1px solid #e0e0e0', 
};
const paperStyle2 = {
  width: 200,
  height: 150,
  marginTop: 20,
  backgroundImage: 'url("/images/03.png")',
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center',
  border: '1px solid #e0e0e0', 
};
const paperStyle3 = {
  width: 200,
  height: 150,
  marginTop: 20,
  backgroundImage: 'url("/images/04.png")',
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center',
  border: '1px solid #e0e0e0', 
};
export default function Home() {
  return (
    <>
  <div className ="Display">
    <Card className="Card1">
    <CardActionArea>
     
      <CardContent>
        <Typography gutterBottom variant="h6" >
        Refer a friend
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.

        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    
      
    </CardActions>
    <CardActions>
    <div className="svg-container">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5713 11.96H17.5233V14.4266C18.2367 13.008 20.066 11.7333 22.814 11.7333C28.082 11.7333 29.3327 14.5573 29.3327 19.7386V29.3346H23.9993V20.9186C23.9993 17.968 23.286 16.304 21.47 16.304C18.9513 16.304 17.9047 18.0973 17.9047 20.9173V29.3346H12.5713V11.96ZM3.42602 29.108H8.75935V11.7333H3.42602V29.108ZM9.52335 6.06797C9.52355 6.515 9.43489 6.95762 9.26253 7.37008C9.09017 7.78255 8.83755 8.15665 8.51935 8.47064C7.87455 9.11147 7.00176 9.47017 6.09268 9.46797C5.1852 9.46736 4.31443 9.10957 3.66868 8.47197C3.35163 8.15692 3.09986 7.7824 2.92781 7.36988C2.75575 6.95735 2.66679 6.51493 2.66602 6.06797C2.66602 5.1653 3.02602 4.3013 3.67002 3.66397C4.3152 3.02551 5.18634 2.66757 6.09402 2.66797C7.00335 2.66797 7.87535 3.02664 8.51935 3.66397C9.16201 4.3013 9.52335 5.1653 9.52335 6.06797Z" fill="#384250"/>
</svg>

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9999 2.40234C8.50086 2.40234 2.3999 8.5033 2.3999 16.0023C2.3999 23.5014 8.50086 29.6023 15.9999 29.6023C17.9937 29.6023 20.0269 29.0978 22.041 28.1009L20.8374 25.6624C19.2 26.4716 17.5721 26.8823 15.9999 26.8823C10.0009 26.8823 5.1199 22.0013 5.1199 16.0023C5.1199 10.0034 10.0009 5.12234 15.9999 5.12234C21.9989 5.12234 26.8799 10.0034 26.8799 16.0023V17.3623C26.8799 18.3035 26.4542 20.0823 24.8399 20.0823C22.9413 20.0823 22.8081 17.6085 22.7999 17.3623V10.5623H20.0799V10.5963C18.9093 9.69731 17.4759 9.20756 15.9999 9.20234C12.2504 9.20234 9.1999 12.2528 9.1999 16.0023C9.1999 19.7519 12.2504 22.8023 15.9999 22.8023C17.9719 22.8023 19.7372 21.9442 20.9802 20.5978C21.6929 21.8082 22.8951 22.8023 24.8399 22.8023C27.9312 22.8023 29.5999 19.9994 29.5999 17.3623V16.0023C29.5999 8.5033 23.4989 2.40234 15.9999 2.40234ZM15.9999 20.0823C13.7505 20.0823 11.9199 18.2518 11.9199 16.0023C11.9199 13.7529 13.7505 11.9223 15.9999 11.9223C18.2493 11.9223 20.0799 13.7529 20.0799 16.0023C20.0799 18.2518 18.2493 20.0823 15.9999 20.0823Z" fill="#384250"/>
</svg>

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.48193 24.5507C4.7528 25.2537 13.9513 30.5559 20.4928 26.4692C27.0336 22.3826 26.6725 15.3418 26.6725 12.1149C27.2655 10.8737 28.5172 10.2425 28.5172 6.88253C27.2879 8.01834 26.0657 8.40441 24.8509 8.04205C23.661 6.22767 22.0239 5.42457 19.9387 5.63407C16.8119 5.94833 15.6682 9.01579 16.0049 12.9852C11.1836 15.4228 7.40325 11.2176 5.45445 8.04205C4.80353 10.5429 4.17633 13.5458 5.45445 16.8669C6.30697 19.0819 8.35657 20.9536 11.6019 22.484C8.31243 24.2661 5.60598 24.9559 3.48193 24.5507Z" stroke="#384250" stroke-width="2.63529" stroke-linejoin="round"/>
</svg>
</div></CardActions>

  </Card>

<Card  className="Card2">
<CardContent>
  
  <Typography variant="h6" component="div">
  Join Community
  </Typography>
  <Typography sx={{ mb: 1.5 }} color="text.secondary">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.
  </Typography>
  <Divider />

  <AvatarGroup  max={3} className='AvatarGroup1'>
      <Avatar alt="Remy Sharp" src="/images/01.png" />
      <Avatar alt="Travis Howard" src="/images/01.png" />
      <Avatar alt="Cindy Baker" src="/images/01.png" />
      <Avatar alt="Agnes Walker" src="/images/01.png" />
    </AvatarGroup  >



</CardContent>
<CardActions >
<ThemeProvider theme={theme}>
{/* <Button variant="contained" color="violet">
 */}
 <Button variant="contained" color="violet">
          Join Community
        </Button>
        </ThemeProvider>
</CardActions>
</Card>
</div>



<div className="Display2">

<Card sx={{ width:1130, height: 450 }} className='Card3' >
{/* <Card className="Card3" > */}
<CardContent>
  
  <Typography variant="h6" component="div">
  Stories, tips and tools to inspire your best work.
  </Typography>
  <Divider sx={{ mt:1}}/>
  <Box className="box1" >
<Paper variant="outlined" style={paperStyle}
/>
 </Box>


  <Typography component="div">
      {/* <Box sx={{ fontWeight: 'light', m: 1 }}>Light</Box>
      <Box sx={{ fontWeight: 'regular', m: 1 }}>Regular</Box> */}
      <Box sx={{ fontWeight: 'medium', mb: 1, color:"purple" }}>Featured</Box> 
      <Box sx={{ fontWeight: 500, m: 0 }}>Hire Smarter, Not Harder: How Cloud-Based Squads Can Help You Thrive In A Volatile Market</Box>
      <Box sx={{  m: 0,color:"text.secondary"}}>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.</Box>
    </Typography>


</CardContent>
<CardActions >
<ThemeProvider theme={theme}>
<Button variant="contained" color="violet" className='btn1'>

          Read more
        </Button >
        </ThemeProvider>
        
</CardActions>
<Divider />


<Box className="box4">

<Paper variant="outlined" style={paperStyle2}
/>
<Typography variant="h6" sx={{mt:2,ml:2}}>
Why We Were Destined To <br />Power the Innovator Economy

<Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
        
Lorem ipsum dolor sit amet, consectetur adipiscing  <br />elit. Varius facilisis arcu viverra elit pretium adsasd
        </Typography>
        <Button variant="outlined">Read more</Button>

  </Typography>

  <Box className="box4">

<Paper variant="outlined" style={paperStyle3}
/>
<Typography variant="h6" sx={{mt:2,ml:2}}>
Why We Were Destined To <br />Power the Innovator Economy

<Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
        
Lorem ipsum dolor sit amet, consectetur adipiscing  <br />elit. Varius facilisis arcu viverra elit pretium adsasd
        </Typography>
        <Button variant="outlined" >Read more</Button>

  </Typography>
</Box>
</Box>
</Card>


</div>
</>
  )
}
