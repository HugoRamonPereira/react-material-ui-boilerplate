import { Stack } from '@mui/material';
import './App.css';
import { BtnContained } from './components/button/contained';
import { BtnOutlined } from './components/button/outlined';
import { Text } from './components/text';
import { LoadingBtn } from './components/button/loading';

function App() {

  return (
    <>
      <h1>Material UI Boilerplate</h1>
      <Text />
      <Stack display='block' direction='row' spacing={2}>
        <BtnContained />
        <BtnOutlined />
        <LoadingBtn />
      </Stack>
    </>
  );
}

export default App;
