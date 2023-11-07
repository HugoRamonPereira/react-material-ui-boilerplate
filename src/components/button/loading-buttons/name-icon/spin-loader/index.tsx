import * as S from './styles';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import SpinLoader from '../../../../assets/spin-loader.svg';

type SpinLoaderBtnProps = {
  variant: 'contained' | 'outlined' | 'text';
}

export function SpinLoaderBtn({ variant }: SpinLoaderBtnProps) {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <Stack display='block' direction="row" spacing={2}>
      <S.LoadingBtn
        variant={variant}
        onClick={handleClick}
        loading={loading}
        loadingIndicator={<img src={SpinLoader} width={28} height={28} alt='spinner' />}
        endIcon={<SaveIcon />}
      >
        {!loading ? 'Save' : 'Saving...'}
      </S.LoadingBtn>
    </Stack>
  );
}