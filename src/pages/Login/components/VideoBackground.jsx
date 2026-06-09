import React from 'react';
import BackgroundVideo from '../../../assets/video_entire_ADAN.mp4';
import { BackgroundWrapper, BgVideo, BlurLeft, BlurRight, BlurBottom } from '../styles/layout';

export default function VideoBackground() {
  return (
    <BackgroundWrapper aria-hidden="true">
      <BgVideo autoPlay loop muted playsInline>
        <source src={BackgroundVideo} type="video/mp4" />
      </BgVideo>
      
      <BlurLeft />
      <BlurRight />
      <BlurBottom />
    </BackgroundWrapper>
  );
}