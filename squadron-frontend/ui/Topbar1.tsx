
'use client'

import Card from '@mui/material/Card';
import { Paper,Stack,IconButton,Badge} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import styled from 'styled-components';

const Cardnav = styled(Card)`
  height: 70px; 
  flex-grow: 1;
  margin-top: 0;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  border: 0; 
`;


export function Topbar1() {
    return (
      // <ThemeProvider theme={theme}>
       


        
      <Cardnav  elevation={1} >
    
      <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,ml:20 }}
          >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search jobs"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
        
           
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            </IconButton>
          </Paper>
         
            {/* <Link href="/perk/page">Dashboard</Link> */}
      
       
      
          <Stack direction="row" spacing={5} sx={{ml:500}}>
          <ChatBubbleOutlineOutlinedIcon  />
          <StarBorderRoundedIcon />
          <NotificationsNoneRoundedIcon/>
          <Avatar alt="Remy Sharp" src="/images/01.png" />
          
      </Stack>
              
          </Cardnav>
            
        
      // </ThemeProvider>
    );
  };