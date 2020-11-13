import React from 'react';
import styled from 'styled-components';

const DownloadBtn: React.FC = () => {
  return <Btn type="submit">Download</Btn>;
};

export default DownloadBtn;

const Btn = styled.button`
  padding: 1em 2em;
  font-size: 2em;
  cursor: pointer;
`;
