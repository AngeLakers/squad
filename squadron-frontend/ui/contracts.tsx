import React, { ReactNode } from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import CustomBadge from "./custom-badge";
import {DownloadSVG } from '@/ui/svgs';

const Container = styled.div`
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  font-family: 'Arial', sans-serif;
  color: #4D5761;
  font-size: 14px;
  font-weight: 400;
  min-width: 1100px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  height: 44px;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  height: 72px;
  align-items: center;
  border-top: 1px solid #E5E7EB;
`;

const Cell = styled.div`
  flex: 1;
`;

const ActionCell = styled(Cell)`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  flex: 2; 
`;

const SignatoryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export interface ContractData {
  createdOn: string;
  signatory: string;
  signatoryImage?: ReactNode;
  status: 'Signed';
  paidOn: string;
}

interface ContractsProps {
  data: ContractData[];
}

const Contracts: React.FC<ContractsProps> = ({ data }) => {
  return (
    <Container>
      <TitleRow>
        <Cell>Created on</Cell>
        <Cell>Signatory</Cell>
        <Cell>Status</Cell>
        <Cell>Signed at</Cell>
        <Cell></Cell>
        <Cell></Cell>
      </TitleRow>
      {data.map((invoice, index) => (
        <Row key={index}>
          <Cell>{invoice.createdOn}</Cell>
          <Cell>
            <SignatoryContainer>
              {invoice.signatoryImage && 
                <div>{invoice.signatoryImage}</div>
              }
              <div>{invoice.signatory}</div>
            </SignatoryContainer>
          </Cell>
          <Cell>
            {invoice.status === 'Signed' && <CustomBadge label="Signed" preset="green" />}
          </Cell>
          <Cell>{invoice.paidOn}</Cell>
          <ActionCell>
            <CustomButton label="View" preset="outlined"/>
            <CustomButton label={<DownloadSVG />} preset="outlined"/>
          </ActionCell>
        </Row>
      ))}
    </Container>
  );
};

export default Contracts;
