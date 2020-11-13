import React from 'react';
import styled from 'styled-components';
import DownloadBtn from '../atoms/DownloadBtn';

import UrlInput from '../atoms/UrlInput';

interface Props {
  downloadVideo: () => void;
  setYtUrl: (url: string) => void;
}

export const YoutubeDownloadForm: React.FC<Props> = ({ downloadVideo, setYtUrl }) => {
  const submitToForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ? Prevent this shit first... then we run func from parent

    downloadVideo();
  };

  return (
    <Form onSubmit={submitToForm}>
      <UrlInput setYtUrl={setYtUrl} />
      <DownloadBtn />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
