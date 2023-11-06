import * as S from './styles';

import Stack from '@mui/material/Stack';
import { useState } from 'react';

export function LoadingTextBtn() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <Stack display='block' direction="row" spacing={2}>

      {/* A button with only text loading */}
      <S.LoadingBtn
        onClick={handleClick}
        loading={loading}
        loadingIndicator="Saving..."
        variant="outlined"
      >
        Save
      </S.LoadingBtn>

    </Stack>
  );
}