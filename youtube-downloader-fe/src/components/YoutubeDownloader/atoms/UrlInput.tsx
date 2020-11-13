import React from 'react';
import styled from 'styled-components';

interface Props {
  setYtUrl: (url: string) => void;
}

const UrlInput: React.FC<Props> = ({ setYtUrl }) => {
  return <Input placeholder="Insert Youtube url here ..." onChange={(e) => setYtUrl(e.target.value)} />;
};

export default UrlInput;

const Input = styled.input`
  padding: 1em;
  font-size: 1.5em;
  width: 25em;
  margin: 0.75em 0;
`;
