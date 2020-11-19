import React from 'react';
import styled from 'styled-components';
import './App.css';
import YoutubeDownloader from './components/YoutubeDownloader/YoutubeDownloader';

// TODO: Se video om express og prøv ordne kobling! Se yt video du har i fane
// TODO: Hvis det fungerer (plz) -> last ned video og converter til mp3

function App() {
  const [apiRes, setApiRes] = React.useState('');

  const apiCall = () => {
    fetch('http://localhost:9000/testAPI')
      .then((res) => res.text())
      .then((res) => setApiRes(res))
      .catch((err) => setApiRes('ERROR calling API: ' + err));
  };

  React.useEffect(() => {
    apiCall();
  }, []);

  return (
    <Container>
      <header></header>
      <main>
        <AlertBox>
          <AlertBoxMsg>{apiRes}</AlertBoxMsg>
        </AlertBox>
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

const AlertBox = styled.div`
  background-color: #f33939;
  color: white;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertBoxMsg = styled.p`
  padding: 1em;
  font-weight: bold;
  font-size: 1.5em;
`;
