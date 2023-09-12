import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import styled from 'styled-components';
import UploadVideoButton from '@/ui/upload-file-button';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Popup = styled.div`
    width: 50%;
    height: 50%;
    background-color: white;
    display: flex;
    position: relative;
`;

const Sidebar = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background-color: #F5F5F5;
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

const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
`;

const ContentContainer = styled.div`
    flex: 3;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UrlInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const VideoUrlInput = styled.input`
    margin-top: 10px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid grey;
`;

const SubmitButton = styled(Button)`
    margin-top: 10px;
    margin-left: 60%;
`;

const VideoUpload: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState<string>('Upload video');

    return (
        <Overlay>
            <Popup>
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
                    {selectedOption === 'Upload video' && <UploadVideoButton />}
        
                    {selectedOption === 'Record video' && (
                        <Button variant="outlined" color="neutral">Record</Button>
                    )}

                    {selectedOption === 'Video URL' && (
                        <UrlInputContainer>
                            <div>Video URL</div>
                            <VideoUrlInput type="text" placeholder="Enter video URL here..." />
                            <SubmitButton variant="outlined">Submit</SubmitButton>
                        </UrlInputContainer>
                    )}
                </ContentContainer>
                <CloseButton onClick={onClose}>X</CloseButton>
            </Popup>
        </Overlay>
    );
};

export default VideoUpload;
