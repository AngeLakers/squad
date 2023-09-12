import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import styled from 'styled-components';
import UploadVideoButton from '@/ui/upload-file-button';
import PopupComponent from '@/ui/popup';

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
        <PopupComponent onClose={onClose}>
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
                
            </PopupComponent>
    );
};

export default VideoUpload;
