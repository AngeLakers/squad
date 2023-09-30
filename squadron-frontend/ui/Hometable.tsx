import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Button,Paper,Stack} from '@mui/material';
import styled from 'styled-components';

const Containertable=styled(TableContainer)`
width:1130px;
margin-left: 150px;
`;

  function createData(
    name:string,
    project: string,
    role: string,
    teammateimage: string,
    image: string ,
  ) {
    return {  project,   role,  teammateimage,  image ,name};
  }
  
  const rows = [
    createData('Spotify','SurveySwap', 'Front-End Engineer', '/images/16.png', '/images/spotify.png'),
    createData('Stripe','SurveySwap', 'Front-End Engineer', '/images/16.png', '/images/stripe.png'),
    createData('Figma', 'SurveySwap','Front-End Engineer', '/images/16.png',  '/images/figma.png'),
  ];

 export function Hometable(){

return(

 
<Containertable component={Paper} >
      <Table >
        <TableHead>
          <TableRow>     
            <TableCell >Transaction</TableCell>
            <TableCell >Project</TableCell>
            <TableCell >Role</TableCell>
            <TableCell sx={{
  }}>Team mates</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
             
            <TableRow key={row.project} >
                 <TableCell sx={{display: 'flex',alignItems: 'center', }}>
                <img src={row.image} />   {row.name}
             
               </TableCell>
              <TableCell component="th" scope="row" 
  sx={{  color: 'var(--primary-700, #1B18E4)',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '20px', }}>
                {row.project}
              </TableCell>
              
              <TableCell  >
                <Chip icon={<PermIdentityOutlinedIcon  style={{color: '#026AA2'}} />}label={row.role} style={{ backgroundColor: '#A0E7F8', color: '#026AA2' }}
                 />
              
              </TableCell>
              <TableCell sx={{ display: 'flex',justifyContent: 'flex-start',}} >
      {/* <AvatarGroup  sx={{ width: 30, height: 30}}max={4}>
      <Avatar  sx={{ width: 30, height: 30 }} src={row.teammateimage} />
      <Avatar  sx={{ width: 30, height: 30 }}src={row.teammateimage} />
      <Avatar sx={{ width: 30, height: 30 }} src={row.teammateimage} />
      <Avatar  sx={{ width: 30, height: 30 }}src={row.teammateimage} />
      <Avatar  sx={{ width: 30, height: 30 }}src={row.teammateimage} />
    </AvatarGroup> */}
                  <AvatarGroup max={4}>
      <Avatar  src={row.teammateimage} />
      <Avatar src={row.teammateimage} />
      <Avatar  src={row.teammateimage} />
      <Avatar src={row.teammateimage} />
      <Avatar src={row.teammateimage} />
    </AvatarGroup>
              
              </TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Containertable>


)}