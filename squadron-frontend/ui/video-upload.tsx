import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import styled from 'styled-components';
import UploadVideoButton from '@/ui/upload-file-button';
import PopupComponent from '@/ui/popup';
import CustomButton from './custom-button';

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 8px;
    background-color: #F3F4F6;
    min-width:144px;
`;

const OptionButton = styled.button<{ isSelected: boolean }>`
    width: 90%;
    height: 30px;
    margin-top: 10px;
    background: ${props => (props.isSelected ? 'lightgray' : '#F5F5F5')};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const ContentContainer = styled.div`
    flex: 3;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UrlInputContainer = styled.div`
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const VideoUrlInput = styled.input`
    margin-top: 10px;
    width: 100%;
    height:40px;
    border-radius: 8px;
    border: 1px solid #D2D6DB;
    align-self: flex-start;
    margin-bottom: 16px;
`;

const SubmitButton = styled(Button)`
    margin-top: 10px;
    margin-left: 60%;
`;

const VideoUrlLabel = styled.div`
    align-self: flex-start;
    font-size:14px;

`;

const VideoUpload: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState<string>('Upload video');

    return (
        <PopupComponent onClose={onClose} minWidth='500px' maxHeightPercent={0.4}>
                <Sidebar>
                    {['Upload video', 'Record video', 'Video URL'].map(option => (
                        <OptionButton 
                            isSelected={option === selectedOption}
                            onClick={() => setSelectedOption(option)}>
                            {option}
                        </OptionButton>
                    ))}
                </Sidebar>
                <ContentContainer>
                    {selectedOption === 'Upload video' && <UploadVideoButton label="Upload a video"/>}
        
                    {selectedOption === 'Record video' && (
                        <CustomButton label="Record" preset = "default"/>
                    )}

                    {selectedOption === 'Video URL' && (
                        <UrlInputContainer>
                            <VideoUrlLabel>Video URL</VideoUrlLabel>
                            <VideoUrlInput type="text" placeholder="Enter video URL here..." />
                            <CustomButton label="Submit" alignSelf='flex-end' preset = "default"/>
                        </UrlInputContainer>
                    )}
                </ContentContainer>
                
            </PopupComponent>
    );
};

export default VideoUpload;
