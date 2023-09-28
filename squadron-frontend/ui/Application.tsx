'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Button, CardActions} from '@mui/material';
import styled from 'styled-components';

const Cardapplication = styled(Card)`
margin-left: 150px;
margin-bottom: 50px;
width:1130px;
height: 350px;

`;
const Title = styled.div`
margin-top: 50px;
  font-size: 20px;
  margin-left: 150px;
  margin-bottom: 30px;

`;
const Bigcircle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-self: stretch;

`;
const Cloud = styled.svg`
position:absolute;
`;

export function Application() {
    return (
<>
<Title>
  My applications
  </Title>
<Cardapplication >

<Bigcircle>

<Cloud width="132" height="104" viewBox="-10 0 162 104" fill="none" xmlns="http://www.w3.org/2000/svg"  >
<g filter="url(#filter0_dd_6149_8056)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M77.6 0C66.8273 0 57.2978 5.32329 51.4987 13.4829C49.605 13.0363 47.6301 12.8 45.6 12.8C31.4615 12.8 20 24.2615 20 38.4C20 52.5385 31.4615 64 45.6 64L45.62 64H109.6C121.971 64 132 53.9712 132 41.6C132 29.2288 121.971 19.2 109.6 19.2C108.721 19.2 107.854 19.2506 107.002 19.349C102.098 7.9677 90.7797 0 77.6 0Z" fill="#FAFAFE"/>
<ellipse cx="45.6" cy="38.4" rx="25.6" ry="25.6" fill="url(#paint0_linear_6149_8056)"/>
<circle cx="77.6001" cy="32" r="32" fill="url(#paint1_linear_6149_8056)"/>
<ellipse cx="109.6" cy="41.5999" rx="22.4" ry="22.4" fill="url(#paint2_linear_6149_8056)"/>
</g>
<defs>
<filter id="filter0_dd_6149_8056" x="0" y="0" width="152" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_6149_8056"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6149_8056"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect2_dropShadow_6149_8056"/>
<feOffset dy="20"/>
<feGaussianBlur stdDeviation="12"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_6149_8056" result="effect2_dropShadow_6149_8056"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_6149_8056" result="shape"/>
</filter>
<linearGradient id="paint0_linear_6149_8056" x1="25.9429" y1="21.4858" x2="71.2" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#E9D7FE"/>
<stop offset="0.350715" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_6149_8056" x1="53.0287" y1="10.8571" x2="109.6" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#E9D7FE"/>
<stop offset="0.350715" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_6149_8056" x1="92.4002" y1="26.8" x2="132" y2="63.9999" gradientUnits="userSpaceOnUse">
<stop stop-color="#E9D7FE"/>
<stop offset="0.350715" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</Cloud>

<Cloud width="88" height="98" viewBox="-26 -50 88 98" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g filter="url(#filter0_b_6149_8068)">
<rect width="48" height="48" rx="24" fill="#6941C6" fill-opacity="0.4"/>
<path d="M33 33L29.5001 29.5M32 23.5C32 28.1944 28.1944 32 23.5 32C18.8056 32 15 28.1944 15 23.5C15 18.8056 18.8056 15 23.5 15C28.1944 15 32 18.8056 32 23.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_b_6149_8068" x="-8" y="-8" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6149_8068"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6149_8068" result="shape"/>
</filter>
</defs>
</Cloud>
<svg width="104" height="104" viewBox="-11 -5 115 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="Circle">
<circle cx="52" cy="52" r="52" fill="#CAC9F9"/>
</svg>


<CardContent>
<Typography variant="body1" gutterBottom>
No applications
</Typography>
</CardContent>

<CardContent>
<Typography variant="body2" gutterBottom>
You haven’t applied any role yet. Start searching for projects
</Typography> 
</CardContent>

<CardActions>
      <Button variant="outlined" color="secondary" style={{fontWeight: 'bold' , color: 'black',borderColor: 'black' }}>
        Search Projects
      </Button> 
    </CardActions>
</Bigcircle>
</Cardapplication>
</>
    )}