'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import SquadCustom from "@/ui/squad-custom-popup";
import VideoUpload from '@/app/c4_proj_spec/video-upload';


export default function C4Start() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [videoUploadOpen, setVideoUploadOpen] = useState<boolean>(false);
    return (
      <div>
        <Button variant="outlined" onClick={() => setModalOpen(true)}>
          Create project
        </Button>
        <Button variant="outlined" onClick={() => setVideoUploadOpen(true)}>Upload video</Button>
        {isModalOpen && <SquadCustom closeModal={() => setModalOpen(false)} />}
        {videoUploadOpen && <VideoUpload onClose={() => setVideoUploadOpen(false)} />}
      </div>
    );
  }
  