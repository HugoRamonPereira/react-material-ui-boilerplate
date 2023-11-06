import * as S from './styles';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import AppleSpinner from '../../../../assets/apple-spinner.svg';
import SpinLoader from '../../../../assets/spin-loader.svg';
import PulseLoader from '../../../../assets/pulse-loader.svg';

export function LoadingTextIconBtn() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <Stack display='block' direction="row" spacing={2}>

      {/* A button with only text loading */}
      <S.LoadingBtn
        variant="outlined"
        onClick={handleClick}
        loading={loading}
        loadingPosition="end"
        endIcon={<SaveIcon />}
      >
        {!loading ? 'Save' : 'Saving...'}
      </S.LoadingBtn>

      <S.LoadingBtn
        variant="outlined"
        onClick={handleClick}
        loading={loading}
        loadingIndicator={<img src={AppleSpinner} width={35} height={35} alt='spinner' />}
        endIcon={<SaveIcon />}
      >
        {!loading ? 'Save' : 'Saving...'}
      </S.LoadingBtn>

      <S.LoadingBtn
        variant="outlined"
        onClick={handleClick}
        loading={loading}
        loadingIndicator={<img src={SpinLoader} width={28} height={28} alt='spinner' />}
        endIcon={<SaveIcon />}
      >
        {!loading ? 'Save' : 'Saving...'}
      </S.LoadingBtn>

      <S.LoadingBtn
        variant="outlined"
        onClick={handleClick}
        loading={loading}
        loadingIndicator={<img src={PulseLoader} width={32} height={32} alt='spinner' />}
        endIcon={<SaveIcon />}
      >
        {!loading ? 'Save' : 'Saving...'}
      </S.LoadingBtn>
    </Stack>
  );
}