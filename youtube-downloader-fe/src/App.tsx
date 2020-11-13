import React from 'react';
import styled from 'styled-components';
import './App.css';
import YoutubeDownloader from './components/YoutubeDownloader/YoutubeDownloader';

// TODO: Se video om express og prøv ordne kobling! Se yt video du har i fane
// TODO: Hvis det fungerer (plz) -> last ned video og converter til mp3

function App() {
  return (
    <Container>
      <header></header>
      <main>
        <YoutubeDownloader />
      </main>
    </Container>
  );
}

export default App;

// TODO: Legg i shared mappe?
const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
