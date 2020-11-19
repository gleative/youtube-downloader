import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { YoutubeDownloadForm } from './molecules/YoutubeDownloadForm';
import VideoInfo from './molecules/VideoInfo';
import VidInfo from './model/VidInfo';
import CreateFile from './molecules/CreateFile';

const YoutubeDownloader: React.FC = () => {
  const [ytUrl, setYtUrl] = React.useState('https://www.youtube.com/watch?v=mWZ7Bsazc4I&ab_channel=Jamief64');
  const [isLoading, setIsLoading] = React.useState(false);
  const [videoDownloaded, setVideoDownloaded] = React.useState(false);
  const [videoInfo, setVideoInfo] = React.useState<VidInfo | null>();
  const [newVideoInfo, setNewVideoInfo] = React.useState('');

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
      .finally(() => {
        setIsLoading(false);
        setVideoDownloaded(true);
      });
  };

  const createFile = () => {
    axios
      .post('http://localhost:9000/ytDownloaderApi/rename', { name: newVideoInfo })
      .then((res) => console.log('FILE RENAMED', res))
      .catch((err) => console.log('ERROR RENAMING FILE: ', err));
  };

  return (
    <Container>
      {isLoading && <h4 style={{ color: 'slateblue' }}>Loading.....</h4>}
      <YoutubeDownloadForm downloadVideo={downloadFromUrl} setYtUrl={setYtUrl} />

      {videoInfo && <VideoInfo videoInfo={videoInfo} />}

      {videoDownloaded && <CreateFile setNewVideoInfo={setNewVideoInfo} createFile={createFile}></CreateFile>}
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
