import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';
import { green, grey } from '@mui/material/colors';

export const LoadingBtn = styled(LoadingButton)({
  color: green[500],
  fontSize: '1rem',
  textTransform: 'none',
  borderRadius: '8px',
  border: '1px solid',
  borderColor: green[500],
  outline: 'none',

  '&:.loading': {
    backbackgroundColor: green[200]
  },

  '&:hover': {
    backgroundColor: green[600],
    color: grey[50],
    border: '1px solid',
    borderColor: green[600],
    outline: 'none'
  },

  // Focus removes the tabindex blue outline
  '&:focus': { outline: 'none' },
  // Active shrinks the button when clicked
  '&:active': {
    transition: 'all 0.3s',
    transform: 'scale(0.95)'
  },
});