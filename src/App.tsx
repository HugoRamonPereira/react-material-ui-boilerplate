import { Container, Stack } from '@mui/material';
import './App.css';
import { BtnContained } from './components/button/contained';
import { BtnOutlined } from './components/button/outlined';
import { Text } from './components/text';
import { LoadingIconBtn } from './components/button/loading-buttons/loading-btn-icon-only';
import { LoadingTextBtn } from './components/button/loading-buttons/loading-btn-text-only';
import { LoadingTextIconBtn } from './components/button/loading-buttons/loading-btn-name-icon';


function App() {
  return (
    <Container>
      <h1>Material UI Boilerplate</h1>
      <Text />
      <Stack display='block' direction='row' spacing={2}>
        <BtnContained />
        <BtnOutlined />
        <LoadingIconBtn />
        <LoadingTextBtn />
        <LoadingTextIconBtn />
      </Stack>
    </Container>
  );
}

export default App;
