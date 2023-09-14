'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import SquadCustom from "@/ui/option-popup";
import VideoUpload from '@/ui/non-repeated-use/video-upload';
import InviteAdmin from '@/ui/non-repeated-use/invite-admin';
import AddRole from '@/ui/non-repeated-use/add-role';
import EditProjPopup from '@/ui/non-repeated-use/editproj-popup';

export default function C4Start() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [videoUploadOpen, setVideoUploadOpen] = useState<boolean>(false);
    const [isAdminInvite, setAdminInviteOpen] = useState(false);
    const [isRoleAdd, setAddRoleOpen] = useState(false);
    const [editprojPopupOpen, setEditprojPopupOpen] = useState(false);

    return (
      <div>
        <Button variant="outlined" onClick={() => setModalOpen(true)}>Create project</Button>
        <Button variant="outlined" onClick={() => setVideoUploadOpen(true)}>Upload video</Button>
        <Button variant="outlined" onClick={() => setAdminInviteOpen(true)}>Add admins</Button>
        <Button variant="outlined" onClick={() => setAddRoleOpen(true)}>Add role</Button>
        <Button variant="outlined" onClick={() => setEditprojPopupOpen(true)}>Edit project</Button>
        {isModalOpen && (
          <SquadCustom
            closeModal={() => {
              setModalOpen(false);
            }}
            title={"Squad Presets"}
            description={
              "Select a preset to see recommended role appear, or build your custom squad from scratch. Don’t worry, you can always add or remove roles in the next step."
            }
            options={["Custom", "Web Platform", "Mobile App",
            "Marketing Website", "Growth", "Data"]}
            link={"/signup"}
          />
        )}
        {videoUploadOpen && <VideoUpload onClose={() => setVideoUploadOpen(false)} />}
        {isAdminInvite && <InviteAdmin onClose={() => setAdminInviteOpen(false)} />}
        {isRoleAdd && <AddRole onClose={() => setAddRoleOpen(false)} />}
        {editprojPopupOpen && <EditProjPopup onClose={() => setEditprojPopupOpen(false)} />}
      </div>
    );
  }
  