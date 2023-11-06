import * as S from './styles';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import AppleSpinner from '../../../../assets/apple-spinner.svg';
import SpinLoader from '../../../../assets/spin-loader.svg';
import PulseLoader from '../../../../assets/pulse-loader.svg';

export function LoadingIconBtn() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <Stack display='block' direction="row" spacing={2} >

      {/* A button with only icon loading */}
      <S.LoadingBtn
        size='large'
        onClick={handleClick}
        loading={loading}
        variant="outlined"
        loadingIndicator={<img src={AppleSpinner} width={40} height={40} />}
      >
        Send
      </S.LoadingBtn>

      <S.LoadingBtn
        size='large'
        onClick={handleClick}
        loading={loading}
        variant="outlined"
        loadingIndicator={<img src={SpinLoader} width={28} height={28} />}
      >
        Send
      </S.LoadingBtn>

      <S.LoadingBtn
        size='large'
        onClick={handleClick}
        loading={loading}
        variant="outlined"
        loadingIndicator={<img src={PulseLoader} width={33} height={33} />}
      >
        Send
      </S.LoadingBtn>
    </Stack>
  );
}