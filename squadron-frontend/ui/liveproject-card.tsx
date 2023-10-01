import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import NotificationBox from "@/ui/notification-message";


const StyledCard = styled(Card)`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5rem;
  position: relative;

  border: 1px solid #e5e7eb;

  gap: 1rem;
  width: 32.375rem;
  height: 21.25rem;
  border-radius: 0.75rem;

`;

const LiveProjectCard: React.FC = () => {
    return (
        <StyledCard>
            <CardHeader title="Live Project Header" />
            <CardContent>
                Content goes here...
            </CardContent>
        </StyledCard>
    );
}

export default LiveProjectCard;