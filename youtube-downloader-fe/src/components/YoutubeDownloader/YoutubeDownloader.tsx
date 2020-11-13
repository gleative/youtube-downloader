import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { YoutubeDownloadForm } from './molecules/YoutubeDownloadForm';

const YoutubeDownloader: React.FC = () => {
  const [ytUrl, setYtUrl] = React.useState('');

  const downloadFromUrl = () => {
    console.log('Try to send url: ', ytUrl);

    // fetch('http://localhost:9000/ytDownloaderApi').then((res) => res.text());

    axios
      .post('http://localhost:9000/ytDownloaderApi', { url: ytUrl })
      .then((res) => console.log('URL SENT, res: ', res))
      .catch((err) => console.log('ERROR: ', err));
  };

  return (
    <Container>
      {ytUrl}
      <YoutubeDownloadForm downloadVideo={downloadFromUrl} setYtUrl={setYtUrl} />
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
