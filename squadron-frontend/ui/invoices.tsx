import React from "react";
import styled from "styled-components";
import CustomButton from "./custom-button";
import CustomBadge from "./custom-badge";

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

export interface InvoiceData {
  dateIssued: string;
  no: string;
  amountDue: string;
  amountPaid: string;
  status: 'paid' | 'pending' | 'past due';
  paidOn: string;
}

interface InvoicesProps {
  data: InvoiceData[];
}

const Invoices: React.FC<InvoicesProps> = ({ data }) => {
  return (
    <Container>
      <TitleRow>
        <Cell>Date issued</Cell>
        <Cell>No</Cell>
        <Cell>Amount due</Cell>
        <Cell>Amount paid</Cell>
        <Cell>Status</Cell>
        <Cell>Paid on</Cell>
        <Cell></Cell>
        <Cell></Cell>
      </TitleRow>
      {data.map((invoice, index) => (
        <Row key={index}>
          <Cell>{invoice.dateIssued}</Cell>
          <Cell>{invoice.no}</Cell>
          <Cell>{invoice.amountDue}</Cell>
          <Cell>{invoice.amountPaid}</Cell>
          <Cell>
            {invoice.status === 'paid' && <CustomBadge label="Paid" preset="green" />}
            {invoice.status === 'pending' && <CustomBadge label="Pending" preset="grey" />}
            {invoice.status === 'past due' && <CustomBadge label="Past due" preset="red" />}
          </Cell>
          <Cell>{invoice.paidOn}</Cell>
          <ActionCell>
            {invoice.status === 'past due' && (
                <CustomButton label="Pay invoice" preset="default" />
                )}
            <CustomButton label="View" preset="outlined"/>
            <CustomButton label="Download" preset="outlined"/>
          </ActionCell>
        </Row>
      ))}
    </Container>
  );
};

export default Invoices;

