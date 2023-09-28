import React from "react";
import styled from "styled-components";

const Notes = styled.div`
  padding: 12px 14px 12px 14px;
  border-radius: 8px;
  border: 1px solid #d2d6db;
  background-color: #f9fafb;
  color: #6c737f;
`;

interface TalentNotesProps {
  content: string;
}

const TalentNotes: React.FC<TalentNotesProps> = ({ content }) => {
  return <Notes>{content}</Notes>;
};

export default TalentNotes;
