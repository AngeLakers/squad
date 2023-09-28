import React from "react";
import styled from "styled-components";

const Documents = styled.div`
  max-height: 230px;
  overflow-y: auto;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e7eb;
`;

const Document = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 24px 16px 24px;
  justify-content: space-between;
`;

const DocumentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DocumentTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #384250;
`;

const DocumentSize = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #9da4ae;
`;

const DownloadButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #1b18e4;
`;

interface DocumentData {
  title: string;
  size: string;
}

interface TalentDocumentsProps {
  documents: DocumentData[];
}

const TalentDocuments: React.FC<TalentDocumentsProps> = ({ documents }) => {
  return (
    <Documents>
      {documents.map((doc, index) => (
        <React.Fragment key={index}>
          <Document>
            <DocumentInfo>
              <DocumentTitle>{doc.title}</DocumentTitle>
              <DocumentSize>{doc.size}</DocumentSize>
            </DocumentInfo>
            <DownloadButton>Download</DownloadButton>
          </Document>
          {index !== documents.length - 1 && <Divider />}
        </React.Fragment>
      ))}
      <Divider />
    </Documents>
  );
};

export default TalentDocuments;
