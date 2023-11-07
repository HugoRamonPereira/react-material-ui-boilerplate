import * as S from './styles';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import PulseLoader from '../../../../assets/pulse-loader.svg';

export function PulseLoadingBtn() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <Stack display='block' direction="row" spacing={2}>
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