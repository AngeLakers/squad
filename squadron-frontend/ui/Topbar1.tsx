
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
  width: 1000px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  border: 0;   margin-left: 150px;
`;

const StyledPaper = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 400px;
  margin-left: 20px;
`;
const StyledInputBase = styled(InputBase)`
  margin-left: 1px;
  flex: 1;
`;

const StyledStack = styled(Stack)`

margin-left: 500px;

`;


export function Topbar1() {
    return (
      <Cardnav  elevation={1} >
    
      <StyledPaper
            component="form"
          >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <StyledInputBase
              placeholder="Search jobs"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
        
           
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            </IconButton>
          </StyledPaper>
         
      
       
      
          < StyledStack direction="row" spacing={5} >
          <ChatBubbleOutlineOutlinedIcon  />
          <StarBorderRoundedIcon />
          <NotificationsNoneRoundedIcon/>
          <Avatar alt="Remy Sharp" src="/images/01.png" />
          
      </ StyledStack>
              
          </Cardnav>
            
        
      // </ThemeProvider>
    );
  };
