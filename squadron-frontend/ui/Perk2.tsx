'use client'


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, PaletteColorOptions,Paper,Stack,AppBar,Toolbar,IconButton,Badge} from '@mui/material';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const Card3 =styled(Card)`
margin-bottom:30px;
border: none;
box-shadow: none; 
margin-left:30px;
`;

const Typography1 =styled(Typography)`
color: var(--gray-900, #111927);
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 32px; /* 133.333% */
`;
const Typography2 =styled(Typography)`
color: var(--gray-700, #384250);

/* Text md/Regular */
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
`;

const CardS =styled(Card)`
border-radius: 16px;
`;



export  function Perk2() {
    return (

<>
<Card3 sx={{ width:1130, height: 600 }} className='Card3' >
<CardContent>


<Typography1 gutterBottom variant="h5" component="div" >
Template Library
</Typography1>
<Typography2 gutterBottom variant="h5" component="div" >
Learn how market leading businesses have used Squadron to achieve their missions and customise your own squad in just a few clicks.
</Typography2>
{/* <Divider sx={{ width:1130 }}/>
<Stack direction="row" spacing={25} sx={{ mt:5}}>
<span>Location</span> <span>Category</span>
</Stack>
<FormControl sx={{ m: 1, width: 250 }}>
<InputLabel htmlFor="grouped-native-select"></InputLabel>
<Select native defaultValue="" id="grouped-native-select" label="Grouping">
<option aria-label="None" value="" />
<optgroup label="Category 1">
<option value={1}>Option 1</option>
<option value={2}>Option 2</option>
</optgroup>
<optgroup label="Category 2">
<option value={3}>Option 3</option>
<option value={4}>Option 4</option>
</optgroup>
</Select>
</FormControl>


<FormControl sx={{ m: 1, width: 250 ,mr:35}}>
<InputLabel htmlFor="grouped-native-select"></InputLabel>
<Select native defaultValue="" id="grouped-native-select" label="Grouping">
<option aria-label="None" value="" />
<optgroup label="Category 1">
<option value={1}>Option 1</option>
<option value={2}>Option 2</option>
</optgroup>
<optgroup label="Category 2">
<option value={3}>Option 3</option>
<option value={4}>Option 4</option>
</optgroup>
</Select>
</FormControl>


<Button variant="outlined" color="secondary" style={{ color: 'black',borderColor: 'black',}}>
<BackspaceOutlinedIcon sx={{ mr: 1}}/>
Clear all filters
</Button> */}


</CardContent>
<Stack direction="row" spacing={10} sx={{ mt:2,ml:3}}>
<CardS sx={{ width:280, height: 200, }} className='Cards'>
<CardMedia
sx={{ width:280,position: 'absolute',height: 200 }}
image="https://s3-alpha-sig.figma.com/img/c441/e800/35d8d79b4a6440a4f89f293f248d56de?Expires=1699833600&Signature=pX903sONg2GUd~WWQ0P4PX-UcBk2PTtYssZ0TFWArkUqgL0P0j4zNAI9NXvO07TkM7hb0PwDKBYPbdVp4PO-6O5L1eei6joWmiZwXFM0P61tt-NMLWO73anUNWeW~GypdcYzwaqLjRypp8voFhVbnJjvzALt1gmQxyqU71m1mxSSqEhRLlwDC4ggRZ85gXwPNcme6hTXLrx92dZ7GdFI2XygJw5tEqqal1Cmsj3280CVzwVuwur6H5pVAlJpGcw5YvdwhUYkk0DidnhbbT8wIG-d8A66awSC0CgSmqhpFDVAyFFjFqLihcpRcMGXz8DMoIqS6sOtvSHxulpPKsX1Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
/>
<CardContent sx={{position: 'relative', zIndex: 1, mt:11}}>
{/* <Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/11.png" sx={{ mr:1 }}/><span> Canva</span>
</Box> */}
<Typography variant="body2" color="white">
Alice: DeFi App Reinventing Finance at Scale
</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +4
</Typography>
{/* <AvatarGroup max={3} > */}


<Stack direction="row" spacing={0} sx={{mt:1}}>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
{/* </AvatarGroup> */}
</Stack>


</CardContent>




</CardS>


<Card sx={{ width:280, height: 200 }} className='Cards'>


<CardMedia component="div"
sx={{ width:280,position: 'absolute',height: 200 }}
image="https://s3-alpha-sig.figma.com/img/71c5/5d22/cdbb33385dbe6a9877e6cf9bbe244c0d?Expires=1699833600&Signature=hs8w01WPDN8~ipRZH7np0mqbyIZ8e7vTXkIcgb99wKYMxBsSClyhlsKHqIiJDQFPdQ2P2aFRxvzB~osk1Fkc2ehBX~2KQSH4aAfl83IZHI4ByxClPcFYT63LsXnTQO7eB8mDahvdyuklKOWe7Nfrj9MzgFUHLxLTG1lSf-UY37~KJiwq3YrCBLJVzuDZ4kAVOoiP9-TcbSRpnr4bDQLC8MTj7EYWnVrsekMeh-09WmauW1mTXEM90BHb7~x5rKUSI8KA-Jcx~TL82qaKq3y~OzkMkX8RRYQTwT0Z-lOGy-C61uXgxbXjiDAfcrOqGJhogM~ybTvgFDgOGpaiYJm9Jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
/>


<CardContent sx={{position: 'relative', zIndex: 1, mt:13}}>
{/* <Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/11.png" sx={{ mr:1 }}/><span> Canva</span>
</Box> */}
<Typography variant="body2" color="white">
OneBill: A Smarter Way to Pay
</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +4
</Typography>
{/* <AvatarGroup max={3} > */}


<Stack direction="row" spacing={0} sx={{mt:1}}>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
</Stack>


</CardContent>


</Card>
<Card sx={{ width:280, height: 200, }} className='Cards'>


<CardMedia component="div"
sx={{ width:280,position: 'absolute',height: 200 }}
image="https://s3-alpha-sig.figma.com/img/4ca3/d663/9cc9246fea83ffab13e67d0ec05298ed?Expires=1699833600&Signature=V7giHeamvMLlLParqMeBx3xT5MU393YrBCi2KA8XVwlklV~WgZBqI3HuCcFNgUOpftlWxJWmd1sNhFyt0kWiV2CPDuitdTxojGuyn9DmsmDXW0ld0LUQSRspXxiKIuxsQE6IQsToXuN0anIxnOkWngmYNPnogy8sGDfeRalBtVkl39cDbZcTIuHPtvhOixzzfCAAhiRS-jTz6FyhReNyfiuUtatblVL~Qu3A8epFBv9sLqbrqP9vZ2ykTg~gs3DxUCCp-HX5-6HYic01ZzTJ1cVNIGb36sFEzBAyN~JbQbtXcdACOqNtsD1BDfNOPWn~VDn0S2CbxfQE0qpqZTqBDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
/>
<CardContent sx={{position: 'relative', zIndex: 1, mt:11}}>
{/* <Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/12.png" sx={{ mr:1 }}/><span> Linktree</span>
</Box> */}
<Typography variant="body2" color="white">
ClearCo: The Funding Platform for Early-Stage Investors</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +9
</Typography>
<Stack direction="row" spacing={0} sx={{mt:1}}>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
</Stack>
</CardContent>


</Card>
</Stack>






<Stack direction="row" spacing={10} sx={{ mt:5,ml:3}}>
<Card sx={{ width:280, height: 200, }} className='Cards'>


<CardMedia component="div"
sx={{ width:280,position: 'absolute',height: 200 }}
image="https://s3-alpha-sig.figma.com/img/3c38/8523/051a3b9650c137570a98d45caf5a1b37?Expires=1699833600&Signature=iTiRnuipuF8X96DcxG0sUQsaFHti0VgSahsGetd18e-PA17jNdP~rMTxrEycuY305qKHxtvJS0Iqzfr-MPy2u5RwpDRMrzkl2BfJtUjk910IEvVVAm7Zbq-C9RzpBQkFIrzjf2ke-Fn6UG9mX5X9R0DaKpoa8VZYXzVtNX7y9Fy7yMz-Mp8R0p06vSG~FlA~ca-UuvATY2R52vGywdlwMqPK3rZIz8CdwByp8twvY9KU8i8G7AZWmIlSZEFr4usZWaTr~7kxcWkHznmhpKvY2tgAMQUC~lirpHdk3SZIyOtT653Qa~mjI9zogLURliE7eJwYCr43TxQGJBFlnncsvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
/>
<CardContent sx={{position: 'relative', zIndex: 1, mt:13}}>
<Typography variant="body2" color="white">
Radar: VR for All.</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +6
</Typography>
<Stack direction="row" spacing={0} sx={{mt:1}}>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
</Stack>
</CardContent>
</Card>


<Card sx={{ width:280, height: 200}} className='Cards'>
<CardMedia component="div"
sx={{ width:280,position: 'absolute',height: 200 }}
image="https://s3-alpha-sig.figma.com/img/15a4/c4ce/f6e8a70f0c0d21555093e8e4c185ba4b?Expires=1699833600&Signature=i3Pl-kfnfRn~sTHRoJM5-PwxfyGYQFuLjT7utNwKttlhG-BKjZ7wTRwiZvH-n2Lr-03BdSP5c5d38feqoV4LpkKLEnCDS~jt8DMe48Z~xv4aDMqlu5yB970hxNN2cs8kxu0mbeiwHHVU-4nL3tfArMcx~KfPflIsndjBiu6mwOEfnQFHIOABu5nVfcQMWvytrJTN1kBIbKAbK-iEbRizLLe8bZ1LQG0JqpGVaEcr6XUN4Bu33VgSHMwjpFnwVQynqd0z-oBLVJQfCZvrEVbPDMg30vNyXTkszvTx8ILahewQLXtunT3HMoiQm2w-9KWKZfGumii-hwrMJuHTx8y-ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
/>
<CardContent sx={{position: 'relative', zIndex: 1, mt:13}}>


<Typography variant="body2" color="white">
BlankStreet: A New Way to Network</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +6
</Typography>
<Stack direction="row" spacing={0} sx={{mt:1}}>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
</Stack>
</CardContent>
</Card>




<Card sx={{ width:280, height: 200, }} className='Cards'>
<CardMedia component="div"
sx={{ width:280,position: 'absolute',height: 200 }}
image="https://s3-alpha-sig.figma.com/img/d3b1/7ac5/5b75aa9a89bcd67e78a2baa63a1bbc35?Expires=1699833600&Signature=CxNEXEtp1AOTTGxbNBlDKVLrbJiRRJ~JlaHSNKRzIJ8NahyrphyNG3~Qeyxym79Qr-1moKe8bvbISQFQpPyeLwZcD3NiZygMPB00fb1CxVcCN3tdRLJ7jTS2a0GAcTjDQKuOPjpGPwA9BH8DuTHTpCDJ7hHwZZkKIvBiFVrj~zSYiXdGR5owPG3wRwPnVDKi3ZsEBTVoh~vDgmz1gvA9hZMwhfw6zC7oGUc1fNN~nu5pR3lU87et3s-p7ApoKXjup5DOSkP~n4P-vSYe~-aAnHtwtXvuj65-qpH5LDiaRv2ec28V8W-wYWbZTt3DVWfIfAPGz5BJf6vuSr1bve4mXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
/>
<CardContent sx={{position: 'relative', zIndex: 1, mt:11}}>


<Typography variant="body2" color="white">
Atom: Scaling BioTech Supply Chains</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +6
</Typography>
<Stack direction="row" spacing={0} sx={{mt:1}}>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
<Avatar src="/images/16.png" sx={{ width: 24, height: 24 }}/>
</Stack>
</CardContent>
</Card>
</Stack>


</Card3>

</>)}