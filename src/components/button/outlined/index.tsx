import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export function BtnOutlined() {
  return (
    <>
      <Button variant='outlined' size='medium'>
        Send
        <SendIcon />
      </Button>
    </>
  );
}