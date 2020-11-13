import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { YoutubeDownloadForm } from './molecules/YoutubeDownloadForm';
import VideoInfo from './molecules/VideoInfo';
import VidInfo from './model/VidInfo';

const YoutubeDownloader: React.FC = () => {
  const [ytUrl, setYtUrl] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [videoInfo, setVideoInfo] = React.useState<VidInfo | null>();

  const downloadFromUrl = () => {
    setIsLoading(true);
    setVideoInfo(null);
    console.log('Try to send url: ', ytUrl);

    // fetch('http://localhost:9000/ytDownloaderApi').then((res) => res.text());

    axios
      .post('http://localhost:9000/ytDownloaderApi', { url: ytUrl })
      .then((res) => {
        console.log('URL SENT, res: ', res);
        setVideoInfo(res.data);
      })
      .catch((err) => console.log('ERROR: ', err))
      .finally(() => setIsLoading(false));
  };

  return (
    <Container>
      {isLoading && <h4 style={{ color: 'slateblue' }}>Loading.....</h4>}
      <YoutubeDownloadForm downloadVideo={downloadFromUrl} setYtUrl={setYtUrl} />

      {videoInfo && <VideoInfo videoInfo={videoInfo} />}
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
