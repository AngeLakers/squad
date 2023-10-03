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





const Header = styled.header`
margin-bottom: 30px;
font-size: 25px;
margin-left: 150px;
font-weight: bold;
`;



export function Perk() {
    return (

<>




<Header>
Perks
  <Typography   variant="body2" gutterBottom style={{color:"gray"}}>
  Exclusive perks for the Squadron community.
  </Typography>
  
</Header>

<Card3   >
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
<Card sx={{ width:260, height: 200,  }} >
<CardContent>
<Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/10.png"  sx={{ mr:1 }}/><span>AWS</span>
</Box>
<Typography  variant="body2" color="text.secondary">Reliable, scalable, and inexpensive cloud computing services.</Typography>
<Button variant="contained" style={{ backgroundColor: '#6633ff', color: 'white' }}>
Claim perk
</Button>
</CardContent>


</Card>
<Card sx={{ width:260, height: 200,  }} >
<CardContent>
<Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/11.png"  sx={{ mr:1 }}/><span>  Canva</span>
</Box>
<Typography  variant="body2" color="text.secondary">
Create beautiful designs with your team with drag-and-drop features.
</Typography>
<Button variant="contained" style={{ backgroundColor: '#6633ff', color: 'white' }}>
Claim perk
</Button>
</CardContent>

</Card>
<Card sx={{ width:260, height: 200, }} >
<CardContent>
<Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/12.png" sx={{ mr:1 }}/><span>  Linktree</span>
</Box>
<Typography  variant="body2" color="text.secondary">
Manage and update all your social channel campaigns in one single platform.</Typography>
<Button variant="contained" style={{ backgroundColor: '#6633ff', color: 'white' }}>
Claim perk
</Button>
</CardContent>

</Card>
</Stack>

<Stack direction="row" spacing={15} sx={{ mt:5,ml:3}}>
<Card sx={{ width:260, height: 200,  }}>
<CardContent>
<Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/13.png" sx={{ mr:1 }}/><span> Miro</span>
</Box>
<Typography    variant="body2" color="text.secondary">
An infinite canvas that can be tailored to any project.</Typography>
<Button variant="contained" style={{ backgroundColor: '#6633ff', color: 'white' }}>
Claim perk
</Button>
</CardContent>
</Card>
<Card sx={{ width:260, height: 200,  }}>
<CardContent>
<Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/14.png"  sx={{ mr:1 }}/><span > Notion</span>
</Box>
<Typography   variant="body2" color="text.secondary">
The knowledge hub where productivity and collaboration meet.</Typography>
<Button variant="contained" style={{ backgroundColor: '#6633ff', color: 'white' }}>
Claim perk
</Button>
</CardContent>
</Card>
<Card sx={{ width:260, height: 200, }}>
<CardContent>
<Box display="flex" alignItems="center">
<Avatar alt="Remy Sharp" src="/images/15.png" sx={{ mr:1 }}/><span>WeWork</span>
</Box>
<Typography  variant="body2" color="text.secondary">
Flexible workspaces where and as you need them.</Typography>
<Button variant="contained" style={{ backgroundColor: '#6633ff', color: 'white' }}>
Claim perk
</Button>
</CardContent>
</Card>
</Stack>

</Card3>
</>

)

}

