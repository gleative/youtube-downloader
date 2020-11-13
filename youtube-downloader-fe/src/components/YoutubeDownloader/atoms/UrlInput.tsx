import React from 'react';
import styled from 'styled-components';

const UrlInput: React.FC = () => {
  return <Input placeholder="Insert Youtube url here ..." />;
};

export default UrlInput;

const Input = styled.input`
  padding: 1em;
  font-size: 1.5em;
  width: 25em;
  margin: 0.75em 0;
`;
