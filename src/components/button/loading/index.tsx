import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export function LoadingBtn() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <Stack display='block' direction="row" spacing={2}>

      {/* A button with only icon loading */}
      <LoadingButton
        onClick={handleClick}
        loading={loading}
        variant="outlined"
      >
        Send
      </LoadingButton>

      {/* A button with only text loading */}
      <LoadingButton
        onClick={handleClick}
        loading={loading}
        loadingIndicator="Saving..."
        variant="outlined"
      >
        Save
      </LoadingButton>

      {/* A button with both text and icon loading */}
      <LoadingButton
        onClick={handleClick}
        loading={loading}
        loadingPosition="end"
        endIcon={<SaveIcon />}
        variant="outlined"
      >
        {!loading ? 'Save' : 'Saving...'}
      </LoadingButton>

    </Stack>
  );
}