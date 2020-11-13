import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { YoutubeDownloadForm } from './molecules/YoutubeDownloadForm';

interface VideoInfo {
  title: string;
  description: string;
  duration: string; // 00:00:00
  uploader: string;
  thumbnail: string;
  size: string;
}

const YoutubeDownloader: React.FC = () => {
  const [ytUrl, setYtUrl] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [videoInfo, setVideoInfo] = React.useState<VideoInfo>();

  const downloadFromUrl = () => {
    setIsLoading(true);
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

      <h2>{videoInfo?.title}</h2>
      <p>{videoInfo?.duration}</p>
      <p>{videoInfo?.uploader}</p>
      <img src={videoInfo?.thumbnail} alt="video thumbnail" width="200px" />
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
