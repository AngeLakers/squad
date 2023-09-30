
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



const Card3 = styled(Card)`
margin-left: 150px;
width:1130px;
height: 700px;
`;




export function Cardc() {
    return (

<Card sx={{ width:1130, height: 700}} >
<CardContent>

<Typography gutterBottom variant="h5" component="div" >
50 Partner Rewards
</Typography>
<Divider sx={{ width:1130 }}/>
<Stack direction="row" spacing={25} sx={{ mt:5}}>
  <span>Location</span>  <span>Category</span>
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
      </Button> 

</CardContent>
<Stack direction="row" spacing={15} sx={{ mt:5,ml:3}}>
<Card sx={{ width:260, height: 200,  }} className='Cards'>
<CardMedia
        sx={{  width:260,position: 'absolute',height: 200 }}
        image="https://s3-alpha-sig.figma.com/img/c441/e800/35d8d79b4a6440a4f89f293f248d56de?Expires=1696204800&Signature=O0DENdJzh6i6MHHFYzyL5uci5kjf1hu0QwkkXN-2EXfptblHMimvRYqs9hg6V0HEMACyAL50hVK0UDIkfbRUD6OcP3itaGMnflC8tru~llAEB-yxODCour4ejR5MOm3hC0Sa9O1N9wNUERHE2IuEKAoP5kRZt1PImDO36jUHUNYnqVVY8-z19BH49ZDFHAeXKeSY9j2coBx1uu85CzmXpCo4e8PSe10o86Os1tv8ghfvqNq6u8U6EETTp8vI5I2c3RIHyKGAdqPGFyoEEw4jDDMHR3hjdXTwWTBJbsbP-RjqPz~cjecvv9Z1Z58zMDGVn-IQsNTbCQ6BKChscjbwLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
       
      />
<CardContent sx={{position: 'relative', zIndex: 1, mt:13}}>
{/* <Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/11.png"  sx={{ mr:1 }}/><span>  Canva</span>
</Box> */}
<Typography variant="body2" color="white">
OneBill: A Smarter Way to Pay
</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +4
</Typography>
{/* <AvatarGroup max={3}  > */}

<Stack direction="row" spacing={0} sx={{mt:1}}>
  <Avatar src="/images/16.png"        sx={{ width: 24, height: 24 }}/>
  <Avatar  src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
  <Avatar src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
{/* </AvatarGroup> */}
</Stack>

</CardContent>


</Card>

<Card sx={{ width:260, height: 200 }} className='Cards'>

<CardMedia  component="div"
         sx={{  width:260,position: 'absolute',height: 200 }} 
         image="https://s3-alpha-sig.figma.com/img/71c5/5d22/cdbb33385dbe6a9877e6cf9bbe244c0d?Expires=1696204800&Signature=Q6SgYmRkoP~f0sJKpMBdbQuizcm~0pgg46qBXRheuu49zyn~AG4Nv2YRoFu5fTANXOuhBv1KN~PXhHeLc6L5Hh0Qt~MdD2zHhT26QFZBq9~8F103A2Pg4ejm9x1nSGEGaR8dtx5VPnnvxLsSU6aMBtvVe3hvidBDVChQgZ3rKClbqJClfa2pVKRgniu7PxgJvU5X3yczbgpIIUaHxi2YdTsAChsiKXvAu-jCVcuhU4P4c-urmYBxVZ6wxaSL5NCWGhuIjBXtsPsDqgaO5HgjyCr1COTcRTzdYxCVXSQQomgrA3aZ~c8o15Qxr0qh4zlGi2578HQe7yhFUTpXTOdn0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
 />

<CardContent sx={{position: 'relative', zIndex: 1, mt:13}}>
{/* <Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/11.png"  sx={{ mr:1 }}/><span>  Canva</span>
</Box> */}
<Typography variant="body2" color="white">
OneBill: A Smarter Way to Pay
</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +4
</Typography>
{/* <AvatarGroup max={3}  > */}

<Stack direction="row" spacing={0} sx={{mt:1}}>
  <Avatar src="/images/16.png"        sx={{ width: 24, height: 24 }}/>
  <Avatar  src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
  <Avatar src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
</Stack>

</CardContent>

</Card>
<Card sx={{ width:260, height: 200, }} className='Cards'>

<CardMedia  component="div"
         sx={{  width:260,position: 'absolute',height: 200 }} 
         image="https://s3-alpha-sig.figma.com/img/4ca3/d663/9cc9246fea83ffab13e67d0ec05298ed?Expires=1696809600&Signature=mmWP8ketnZThQrdGs9FWm-~lhbAjdu-WhQxSNYv1n07zqFHvTqc6thizHmIPnEjSVU62hFkmf~UGARhUtnh5i3A8FoK5wbeCYX~RjZPAEfXBCtwVcyp-BaK1sHd7XGIWRsq31yV1~DfjupB~zCZFpBxuHUTwvQvbRmc~EUD2qMJVCoraDdj4F4RSadpHb6BzRyj18GRTL0iYFjx3nih2UEzKdd3f8fJmqv3l5JOWFPqCZ12bPyjEuKfEBvHFkVWX0p2An-8D5~uPjx~tvaW9oZKiuUT9ywOx9Yl9hJZUt3JtVF8QLxeqT~v2gNPV1yVJGpG-cdcfEAiUqwuIEpswLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
 />
<CardContent sx={{position: 'relative', zIndex: 1, mt:11}}>
{/* <Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/12.png" sx={{ mr:1 }}/><span>  Linktree</span>
</Box> */}
<Typography  variant="body2" color="white">
ClearCo: The Funding Platform for Early-Stage Investors</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +9
</Typography>
<Stack direction="row" spacing={0} sx={{mt:1}}>
  <Avatar src="/images/16.png"        sx={{ width: 24, height: 24 }}/>
  <Avatar  src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
  <Avatar src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
</Stack>
</CardContent>

</Card>
</Stack>



<Stack direction="row" spacing={15} sx={{ mt:5,ml:3}}>
<Card sx={{ width:260, height: 200,  }} className='Cards'>

<CardMedia  component="div"
         sx={{  width:260,position: 'absolute',height: 200 }} 
         image="https://s3-alpha-sig.figma.com/img/3c38/8523/051a3b9650c137570a98d45caf5a1b37?Expires=1696809600&Signature=nNoUoQ2O8NTEw1-KRAw57NdmxOEulNBIUeTLlWJFARF-8RiSwKfo9yXpYsipLv3llc-nQxE-VE7vdfiUPGc~BJGeb-gOVgXjE7u26rHuhljBZ2NDvdnycZSstHUivHJt0~shOGCEa0pzZHn53Yp6hYkKSwy5VrTuymRYAXZz17whUkjm1kVMi-le~PP013JSANP5y43nN~upIgDdXoIliD1rEXoxMCr-e3UmtvjW5dZfi0YsifQFaIByrbH6QuTN9kE2H3g5uTvvH5h3c9Ppn9jnV42fKCfD5KVArcxnHhkAXfxFYYlzjH-uW60KrdA~7pO6iN7V4DXQ4QDDVk~dWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
 />
<CardContent sx={{position: 'relative', zIndex: 1, mt:13}}>
<Typography    variant="body2" color="white">
Radar: VR for All.</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +6
</Typography>
<Stack direction="row" spacing={0} sx={{mt:1}}>
  <Avatar src="/images/16.png"        sx={{ width: 24, height: 24 }}/>
  <Avatar  src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
  <Avatar src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
</Stack>
</CardContent>
</Card>

<Card sx={{ width:260, height: 200,  }} className='Cards'>
<CardMedia  component="div"
         sx={{  width:260,position: 'absolute',height: 200 }} 
         image="https://s3-alpha-sig.figma.com/img/15a4/c4ce/f6e8a70f0c0d21555093e8e4c185ba4b?Expires=1696809600&Signature=JZaxG30D3j08B6ZXpEqqWYfP3AgVyeDdXbLT7iGWqMAZ1wxrXtG3pXtP-i7OxhTCFmRz5qNnCT984Sox1iuyy~B-1yMp4BQGOlvt23YT~cClg-5YjFNp5MSQwpNwauadISYMvaKLOlVSS0JgdPt8bZR6XEWd3kX3mRu~Lvi8xwwHO48dz1CI8a12PXHjSwPiQK6M048t5b-sMQlX5nMEQuIaJk7EBDgd5w-Uqo~ZCcjKhadiRdKS~8cACsLib4RIkhlR0OITS1fPRwS2gvTBz2Juw3~jriKHnhF6QujxQEqIWCo9h~5DMyeLRtJ7IW1AmJjZlgEWiXToHrIs-wYM2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
 />
<CardContent  sx={{position: 'relative', zIndex: 1, mt:13}}>

<Typography   variant="body2" color="white">
BlankStreet: A New Way to Network</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +6
</Typography>
<Stack direction="row" spacing={0} sx={{mt:1}}>
  <Avatar src="/images/16.png"        sx={{ width: 24, height: 24 }}/>
  <Avatar  src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
  <Avatar src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
</Stack>
</CardContent>
</Card>


<Card sx={{ width:260, height: 200, }} className='Cards'>
<CardMedia  component="div"
         sx={{  width:260,position: 'absolute',height: 200 }} 
         image="https://s3-alpha-sig.figma.com/img/d3b1/7ac5/5b75aa9a89bcd67e78a2baa63a1bbc35?Expires=1696809600&Signature=MGl4JqWvHrrSr-z4Nv0Q9tTTZcOhDcZiwo3lTeN8g7BmWXapM2vF60nby3nfe3hA~MakvGGXbEOMAdmYix8Gn~q9QJo7IYKyA1UBz7HIcpTAKMen2lfGxmN7ZicwkgVq6lJtU-nPxRAC6pQp26ddNgUFV0XcvbNM-2-9soBO27tO908TRrXe24a182Jl1r1sXb6EnbHOo0dDRqqA~LlfwwxKUu7Uxukt30bgPfCMYdp9v~Qu~VC56bem8jdJH4DKaexNkW-7ghY2u7PH23AOYlJzfpRPDyOpu-K4JeYV~Z0Sdicf5xrKwznmBMjYiU9xHLw4QMoPBkehKEvTHmdSww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
 />
<CardContent sx={{position: 'relative', zIndex: 1, mt:11}}>

<Typography  variant="body2" color="white">
Atom: Scaling BioTech Supply Chains</Typography>
<Typography variant="caption" color="white">
UX Designer UI Designer +6
</Typography>
<Stack direction="row" spacing={0} sx={{mt:1}}>
  <Avatar src="/images/16.png"        sx={{ width: 24, height: 24 }}/>
  <Avatar  src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
  <Avatar src="/images/16.png"  sx={{ width: 24, height: 24 }}/>
</Stack>
</CardContent>
</Card>
</Stack>

</Card>
    )}

