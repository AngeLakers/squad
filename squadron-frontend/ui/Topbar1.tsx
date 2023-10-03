
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
margin-top: 0;
margin-bottom: 50px;
display: flex;
align-items: center;
border: 0;
padding-left: 150px;
justify-content: space-between;
flex-grow: 1;
min-height: 70px;
min-width: 800px;
flex-shrink: 0;
`;

const StyledPaper = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 400px;
  margin-left: 20px;
`;
const StyledInputBase = styled(InputBase)`
padding-left: 2px;
display: flex;
align-items: center;
min-width: 200px;
flex-shrink: 0;
flex-grow:1;
`;

const StyledStack = styled(Stack)`

padding-right: 150px;
flex-shrink: 0;

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



     <IconButton>
      <ChatBubbleOutlineOutlinedIcon  />
      </IconButton>

      <IconButton>
      <StarBorderRoundedIcon />
      </IconButton>

      <IconButton>
      <NotificationsNoneRoundedIcon/>
      </IconButton>



          <Avatar alt="Remy Sharp" src="/images/01.png" />
          
      </ StyledStack>
              
          </Cardnav>
            
    );
  };
