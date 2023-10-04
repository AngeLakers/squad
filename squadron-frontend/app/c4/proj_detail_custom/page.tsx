'use client'
import React, { useState } from 'react';
import { CSSProperties } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Button from '@mui/material/Button';
import VideoUpload from '@/ui/video-upload';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import { styled } from '@mui/system';
import styledComponents from 'styled-components';
import { SimpleHeader } from "@/ui/simple-header";
import CostEstimator from '@/ui/cost-estimator';
import InviteAdmin from '@/ui/invite-admin';
import AddRole from '@/ui/add-role';
import UploadVideoButton from '@/ui/upload-file-button';
import Footer from '@/ui/footer';

const ProjectDetails: React.FC = () => {
  // const [expandBox, setExpandBox] = useState<number | null>(null);
  const [expandBox, setExpandBox] = useState<number[]>([]);
  const [videoUploadOpen, setVideoUploadOpen] = useState<boolean>(false);
  const [isAdminInvite, setAdminInviteOpen] = useState(false);
  const [isRoleAdd, setAddRoleOpen] = useState(false);

  const StyledSelect = styled(Select)({
    '&::after': {
      content: '"▾"',
      float: 'right',
      marginRight: '10px'
    }
  });

  const boxHeight = '30vh';
  const boxWidth = '28vw';

  const sideBoxHeight = '90px';
  const sideBoxWidth = '50vw';

  type BoxTitles = 'Project Header' | 'Project Scope' | 'Admin Details' | 'Squad Details' | 'Additional Info(optional)';

  const expandedBoxHeights = {
    'Project Header': 'auto',
    'Project Scope': 'auto',
    'Admin Details': 'auto',
    'Squad Details': 'auto',
    'Additional Info(optional)': 'auto',
  };

  interface DividerProps {
    marginTop?: string;
    margin?: string;
  }

  const Divider = styledComponents.hr<DividerProps>`
    width: 100%;
    height: 1px;
    background-color: lightgray;
    border: none;
    margin: ${props => props.margin || '15px 0'};
    margin-top: ${props => props.marginTop || '15px'};
`;

  const selectedTimeStyle : CSSProperties = {
    width:'10vw',
    height:'4vh',
    color: 'grey',
    borderRadius:'5px',
    marginTop:'1vh',
    border:'1px solid #000'
  };

  const boxStyle: CSSProperties = {
    borderRadius: '10px',
    border: '2px solid #E5E5E5',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  };

  const titleContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '2vw',
  };

  const expandAdminContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  };

  const arrowStyle: CSSProperties = {
    cursor: 'pointer',
  };

  const inputStyle: CSSProperties = {
    width: '40vw',
    padding: '5px',
    margin: '1vh 0',
  };

  const textAreaStyle: CSSProperties = {
    ...inputStyle,
    height: '4rem',
  };

  const titleTextContainerStyle: CSSProperties = {
    position: 'absolute',
    top: '2vh',
    left: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
  };

  const headerContainerStyle: CSSProperties = {
    background: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    padding: '2vh 2vw',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    marginBottom: '3vh',
  };

  const showAdminSquadBoxStyle: CSSProperties = {
    width: '90%',
    padding: '2vh 2vw',
    backgroundColor: '#E5E5E5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    margin: '3vh 0',
    borderRadius: '10px',
  };

  const editColorButtonStyle: CSSProperties = {
    width:'10vw',
    marginBottom:'9vh',
    marginLeft:'30vw',
    border: 'none',
    backgroundColor: 'black',
    cursor: 'pointer',
  };

  const expandedHeaderContainerStyle: CSSProperties = {
    ...headerContainerStyle,
    height: '15vh',
    width:'40vw',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: '10px',
};

  const descriptions = [
    'Upload a header image here. We recommend JPEG or PNG files that are 1128x191 in size.',
    'Tell us about your mission.',
    'Update details about your internal team.',
    'Here you can add or remove squad roles at any time',
    'Upload any additional information that your Squad should know about the mission here.',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',  paddingBottom: '100px', height: 'auto', minHeight: '100vh', backgroundColor:'#f9fafc' }}>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', marginBottom: '4%', paddingLeft: '8vw',backgroundColor:'white'  }}>
        <SimpleHeader /></div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'flex-start' }}>
            <div style={{ ...boxStyle, width: boxWidth, height: boxHeight, marginRight: '2vw', marginLeft: '10vw' }}>
                <CostEstimator/>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '64vw',justifyContent: 'space-between' }}>
                {['Project Header', 'Project Scope', 'Admin Details', 'Squad Details', 'Additional Info(optional)'].map((title, idx) => (
                    <div key={idx} style={{ ...boxStyle, width: sideBoxWidth, height: expandBox.includes(idx) ? expandedBoxHeights[title as BoxTitles] : sideBoxHeight, position: 'relative' }}>
                        <div style={titleTextContainerStyle}>
                            <div style={titleContainerStyle}>
                                <span>{title}</span>
                                <ExpandMoreOutlinedIcon 
                                    style={arrowStyle}
                                    onClick={() => {
                                      setExpandBox(prev => 
                                          prev.includes(idx) ? prev.filter(e => e !== idx) : [...prev, idx]
                                      );
                                  }}
                                />
                            </div>
                            <span style={{ fontSize: '12px', margin: '5px 2vw', color: 'grey' }}>
                                {descriptions[idx]}
                            </span>
                        </div>

              {expandBox.includes(idx) && (
              <div style={{ marginLeft: '2vw', padding: '10px' }}>
              {title === 'Admin Details' ? (
                  <>
                      <Divider marginTop="7vh" />
                      <div style={expandAdminContainerStyle}>
                          <div style={{ flex: 1}}>
                              <div>Project admin</div>
                              <div style={{ fontSize: 'smaller', color: 'grey' }}>
                                  Invite internal collaborators to view and interact with your project.
                              </div>
                          </div>
                          <Button variant="outlined" onClick={() => setAdminInviteOpen(true)}>Add admins</Button>
                      </div>
                      {isAdminInvite && <InviteAdmin onClose={() => setAdminInviteOpen(false)} />}

                      <div style={showAdminSquadBoxStyle}>
                          You haven't added an admin yet.
                      </div>
                      <Divider margin="2vh 0" />
                      <div>
                          <div>Your working hours</div>
                          <div style={{ fontSize: 'smaller', color: 'grey' }}>
                              Let us know your primary business hours. You can select the number of hours you want each Squad member to overlap with you in Squad Details.
                          </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '15px' }}>
                      <div style={{flex: 1 }}>
                      <div style={{color:'grey'}}>From</div>
                          <StyledSelect style={selectedTimeStyle}>
                              <Option value="08:00">08:00</Option>
                              <Option value="09:00">09:00</Option>
                          </StyledSelect>
                      </div>
                      <div style={{ flex: 1 }}>
                      <div style={{color:'grey'}}>To</div>
                          <StyledSelect style={selectedTimeStyle}>
                              <Option value="17:00">17:00</Option>
                              <Option value="18:00">18:00</Option>
                              </StyledSelect>
                      </div>
                      <div style={{ flex: 1 }}>
                          <div style={{color:'grey'}}>Time Zone</div>
                          <StyledSelect style={selectedTimeStyle}>
                              <Option value="UTC">UTC</Option>
                              <Option value="EST">EST</Option>
                              <Option value="PST">PST</Option>
                          </StyledSelect>
                      </div>
                  </div>
                  </>
              ):title === 'Squad Details' ? (
          <>
            <Divider marginTop="7vh" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width:'40vw'}}>
              <span>Squad Roles</span>
              <Button variant="outlined" onClick={() => setAddRoleOpen(true)}>Add role</Button>
            </div>
            {isRoleAdd && <AddRole onClose={() => setAddRoleOpen(false)} />}
            <div style={{ ...showAdminSquadBoxStyle, justifyContent: 'center' }}>
              You haven't added any roles yet.
            </div>
          </>
            ):title === 'Additional Info(optional)' ? (
              <>
              <div style={{marginBottom:'10vh'}}>
                <div style={{width:'40vw'}}><Divider marginTop="7vh"/></div>
                <div>
                  <label>Other documents</label>
                  <div style={{marginTop:'10px'}}><UploadVideoButton label="Upload a file"/></div>
                </div>
                </div>
              </>
            ) : title === 'Project Header' ? (
                <>
                    <Divider marginTop="7vh" />
                    <div style={expandedHeaderContainerStyle}>
                        <button style={editColorButtonStyle}>Edit Cover</button>
                    </div>
                </>
            ) : (
                <>
                    <Divider marginTop="7vh" />
                    <div> <label>{title} title</label></div>
                    <div><input type="text" style={{ ...inputStyle, border: '1px solid grey', borderRadius: '5px' }}/>
                    </div>
                    <div><label>{title} description</label></div>
                    <div>
                        <textarea style={{ ...textAreaStyle, border: '1px solid grey', borderRadius: '5px' }}></textarea>
                    </div>
                    {title === 'Project Scope' && (
                        <>
                            <div><label>Key Deliverables</label></div>
                            <div><textarea style={{ ...textAreaStyle, border: '1px solid grey', borderRadius: '5px' }}></textarea></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <label>Project video (optional)</label>
                                <Button variant="outlined" onClick={() => setVideoUploadOpen(true)}>Upload video</Button>
                            </div>
                        </>
                    )}
                  </>
              )}
          </div>
        )}
      </div>
    ))}

  </div>
  <Footer isRMiddleButtonVisible={false} rRightButtonLabel='Preview' isButtonDisabled={false} rightLink='/c4/preview'></Footer>
</div>
  {videoUploadOpen && <VideoUpload onClose={() => setVideoUploadOpen(false)} />}
</div>
  );
}

export default ProjectDetails;
