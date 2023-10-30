'use client'
import { Divider } from '@mui/material';
import styled from 'styled-components';


const  Heada = styled.header`
margin-bottom: 30px;
  font-size: 25px;

 font-weight: bold;
  width:1100px;
   display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

`;


const T2 =styled.div`
min-width: 200px;
`;
const T3 =styled.div`
display: flex;

min-width: 300px;
`;
const Buttonh =styled.button`

  border-radius: 8px;
  border: 1px solid var(--warning-300, #FEC84B);
  background: var(--warning-50, #FFFAEB);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: var(--warning-700, #B54708);
  font-family: 'Inter';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  padding: 10px 16px;

`;
const Buttonh2 =styled.button`
margin-left: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #D2D6DB);
  background: var(--base-white, #FFF);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px;
padding: 10px 16px;

`;

const StyledDivider = styled(Divider)`
  width: 1130px;
  margin-left: 19px;
  padding-top: 10px;
  
`;


export function Header() {
    return (
        <>
  <Heada>
<T2>
  Hi, Taylor
  </T2>
<T3>
  <Buttonh>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.40205 2.8778C9.59412 2.48869 9.69015 2.29413 9.82053 2.23197C9.93396 2.17789 10.0657 2.17789 10.1792 2.23197C10.3095 2.29413 10.4056 2.48869 10.5977 2.8778L12.4199 6.56944C12.4766 6.68432 12.5049 6.74176 12.5464 6.78635C12.5831 6.82584 12.6271 6.85783 12.6759 6.88056C12.7311 6.90623 12.7945 6.91549 12.9213 6.93402L16.9973 7.5298C17.4266 7.59253 17.6412 7.6239 17.7405 7.72874C17.8269 7.81995 17.8675 7.94529 17.8511 8.06985C17.8322 8.21302 17.6768 8.36436 17.3661 8.66702L14.4177 11.5387C14.3258 11.6282 14.2798 11.673 14.2502 11.7263C14.2239 11.7734 14.2071 11.8252 14.2006 11.8788C14.1933 11.9393 14.2041 12.0025 14.2258 12.129L14.9215 16.1851C14.9948 16.6129 15.0315 16.8269 14.9626 16.9538C14.9026 17.0642 14.796 17.1417 14.6724 17.1646C14.5304 17.1909 14.3383 17.0899 13.9541 16.8879L10.3102 14.9716C10.1966 14.9119 10.1398 14.882 10.08 14.8703C10.0271 14.8599 9.97262 14.8599 9.91966 14.8703C9.85986 14.882 9.80309 14.9119 9.68955 14.9716L6.04561 16.8879C5.66143 17.0899 5.46935 17.1909 5.32731 17.1646C5.20374 17.1417 5.09711 17.0642 5.03712 16.9538C4.96817 16.8269 5.00486 16.6129 5.07823 16.1851L5.77391 12.129C5.7956 12.0025 5.80644 11.9393 5.7991 11.8788C5.79261 11.8252 5.77576 11.7734 5.74951 11.7263C5.71986 11.673 5.6739 11.6282 5.58199 11.5387L2.63364 8.66702C2.32289 8.36436 2.16752 8.21302 2.14861 8.06985C2.13216 7.94529 2.1728 7.81995 2.25921 7.72874C2.35853 7.6239 2.57315 7.59253 3.00237 7.5298L7.07843 6.93402C7.20519 6.91549 7.26857 6.90623 7.32377 6.88056C7.37264 6.85783 7.41664 6.82584 7.45333 6.78635C7.49476 6.74176 7.52311 6.68432 7.57982 6.56944L9.40205 2.8778Z" stroke="#FEC84B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        5/5
        Search projects
  </Buttonh> 

  <Buttonh2>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M7.15833 11.258412.85 14.5751M12.8417 5.42508L7.15833 8.74175M17.5 4.16675C17.5 5.54746 16.3807 6.66675 15 6.66675C13.6193 6.66675 12.5 5.54746 12.5 4.16675C12.5 2.78604 13.6193 1.66675 15 1.66675C16.3807 1.66675 17.5 2.78604 17.5 4.16675ZM7.5 10.0001C7.5 11.3808 6.38071 12.5001 5 12.5001C3.61929 12.5001 2.5 11.3808 2.5 10.0001C2.5 8.61937 3.61929 7.50008 5 7.50008C6.38071 7.50008 7.5 8.61937 7.5 10.0001ZM17.5 15.8334C17.5 17.2141 16.3807 18.3334 15 18.3334C13.6193 18.3334 12.5 17.2141 12.5 15.8334C12.5 14.4527 13.6193 13.3334 15 13.3334C16.3807 13.3334 17.5 14.4527 17.5 15.8334Z" stroke="#384250" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    Refer Talent
  </Buttonh2>
  </T3>
</Heada>

</>

    )}









   
