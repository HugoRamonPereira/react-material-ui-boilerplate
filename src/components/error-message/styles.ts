import { styled } from '@mui/material';
import { red } from '@mui/material/colors';

export const ErrorMessageContainer = styled('span')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  color: red[600]
});
