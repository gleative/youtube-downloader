import React from 'react';
import styled from 'styled-components';
import VidInfo from '../model/VidInfo';

interface Props {
  videoInfo: VidInfo;
}

const VideoInfo: React.FC<Props> = ({ videoInfo }) => {
  return (
    <Container>
      <img src={videoInfo?.thumbnail} alt="video thumbnail" width="200px" />
      <h2>Title: {videoInfo?.title}</h2>
      <p>Duration: {videoInfo?.duration}</p>
      <p>Uploader: {videoInfo?.uploader}</p>
    </Container>
  );
};

export default VideoInfo;

const Container = styled.div`
  margin: 1em;
  color: white;
`;
