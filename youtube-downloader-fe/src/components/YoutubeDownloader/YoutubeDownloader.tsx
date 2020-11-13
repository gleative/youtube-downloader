import React from 'react';
import styled from 'styled-components';
import { YoutubeDownloadForm } from './molecules/YoutubeDownloadForm';

const YoutubeDownloader: React.FC = () => {
  const downloadFromUrl = () => {};

  return (
    <Container>
      <YoutubeDownloadForm downloadVideo={downloadFromUrl} />
    </Container>
  );
};

export default YoutubeDownloader;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 2em 0;
`;
