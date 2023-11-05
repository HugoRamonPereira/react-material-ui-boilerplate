import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export function BtnContained() {
  return (
    <>
      <Button variant='contained' size='medium'>
        Send
        <SendIcon />
      </Button>
    </>
  );
}