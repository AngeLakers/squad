'use client'
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

const Card3 = styled(Card)`
  margin-left: 150px;
`;

const Btn1 = styled(Button)`
  margin-top: 50px;
`;

const Box1 = styled(Box)`
  position: absolute;
  margin-left: 800px;
  padding: 0px;
  border-radius: 0px;
`;

const Box2 = styled(Box)`
  padding: 0px;
  border-radius: 0px;
`;

const Box4 = styled(Box)`
  display: flex;
  margin-left: 20px;
`;

const paperStyle = {
    width: 270,
    height: 150,
    marginBottom: 0,
    backgroundImage: 'url("/images/02.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: '1px solid #e0e0e0',
  };
  
  const paperStyle2 = {
    width: 200,
    height: 150,
    marginTop: 20,
    backgroundImage: 'url("/images/03.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: '1px solid #e0e0e0',
  };
  
  const paperStyle3 = {
    width: 200,
    height: 150,
    marginTop: 20,
    backgroundImage: 'url("/images/04.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: '1px solid #e0e0e0',
  };

export function Cardstory() {
  return (
    
     
      
    <Card3>
            <CardContent>
              <Typography variant="h6" component="div">
                Stories, tips and tools to inspire your best work.
              </Typography>
              <Divider />
              <Box1>
                <Paper variant="outlined" style={paperStyle} />
              </Box1>
              <Typography component="div">
                <Box sx={{ fontWeight: 'medium', mb: 1, color: 'purple' }}>Medium</Box>
                <Box sx={{ fontWeight: 500, m: 0 }}>
                  Hire Smarter, Not Harder: How Cloud-Based Squads Can Help You Thrive In A Volatile Market
                </Box>
                <Box sx={{ m: 0, color: 'text.secondary' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.
                </Box>
              </Typography>
            </CardContent>
            <CardActions>

              <Btn1>Violet</Btn1>

            </CardActions>
            <Divider />
            <Box4>
              <Paper variant="outlined" style={paperStyle2} />
              <Typography variant="h6" sx={{ mt: 2, ml: 2 }}>
                Why We Were Destined To<br />Power the Innovator Economy
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit. Varius facilisis arcu viverra elit pretium
                  adsasd
                </Typography>
                <Button variant="outlined">Outlined</Button>
              </Typography>
              <Box4>
                <Paper variant="outlined" style={paperStyle3} />
                <Typography variant="h6" sx={{ mt: 2, ml: 2 }}>
                  Why We Were Destined To<br />Power the Innovator Economy
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit. Varius facilisis arcu viverra elit pretium
                    adsasd
                  </Typography>
                  <Button variant="outlined">Outlined</Button>
                </Typography>
              </Box4>
            </Box4>
          </Card3>
      
    
  );
};


