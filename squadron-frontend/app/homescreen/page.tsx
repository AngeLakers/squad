

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
import { Cardstory } from "@/ui/Cardstory";
import { Cardrefer } from "@/ui/Cardrefer";
import { Cardjoin } from "@/ui/Cardjoin";




// declare module '@mui/material/styles' {
//   interface CustomPalette {
//     anger: PaletteColorOptions;
//     apple: PaletteColorOptions;
//     steelBlue: PaletteColorOptions;
//     violet: PaletteColorOptions;
    
//   }
//   interface Palette extends CustomPalette {}
//   interface PaletteOptions extends CustomPalette {}
// }

// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     anger: true;
//     apple: true;
//     steelBlue: true;
//     violet: true;
    
//   }
// }

// const { palette } = createTheme();
// const { augmentColor } = palette;
// const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });

// const theme = createTheme({
//   palette: {
//     anger: createColor('#F40B27'),
//     apple: createColor('#5DBA40'),
//     steelBlue: createColor('#5C76B7'),
//     violet: createColor('#7F00FF'),
   
    
//   },
// });




const Display = styled.div`
  display: flex;
`;

// const Card1 = styled(Card)`
//   width: 400px;
//   margin-left: 150px;
 
// `;

// const Card2 = styled(Card)`
//   width: 680px;
//   margin-left: 150px;
// `;

// const AvatarG = styled(AvatarGroup)`
//   margin-right: 550px;
// `;

const Display2 = styled.div`
  display: flex;
  margin-top: 50px;
`;

// const Card3 = styled(Card)`
//   margin-left: 150px;
// `;

// const Btn1 = styled(Button)`
//   margin-top: 50px;
// `;

// const Box1 = styled(Box)`
//   position: absolute;
//   margin-left: 800px;
//   padding: 0px;
//   border-radius: 0px;
// `;

// const Box2 = styled(Box)`
//   padding: 0px;
//   border-radius: 0px;
// `;

// const Box4 = styled(Box)`
//   display: flex;
//   margin-left: 20px;
// `;

// const paperStyle = {
//   width: 270,
//   height: 150,
//   marginBottom: 0,
//   backgroundImage: 'url("/images/02.png")',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   border: '1px solid #e0e0e0',
// };

// const paperStyle2 = {
//   width: 200,
//   height: 150,
//   marginTop: 20,
//   backgroundImage: 'url("/images/03.png")',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   border: '1px solid #e0e0e0',
// };

// const paperStyle3 = {
//   width: 200,
//   height: 150,
//   marginTop: 20,
//   backgroundImage: 'url("/images/04.png")',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   border: '1px solid #e0e0e0',
// };

const App: React.FC = () => {
  return (
    // <ThemeProvider theme={theme}>
      <>
        <Display>
         <Cardrefer></Cardrefer>
          <Cardjoin></Cardjoin>
        </Display>

        <Display2>
          <Cardstory></Cardstory>
        </Display2>
      </>
    // </ThemeProvider>
  );
};

export default App;
