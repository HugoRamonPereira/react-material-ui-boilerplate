import { Button, styled } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

export const ContainedBtn = styled(Button)({
  backgroundColor: lightBlue[400],
  textTransform: 'none',
  borderRadius: '0.5rem',

  '&:hover': {
    backgroundColor: lightBlue[300]
  },

  // Focus removes the tabindex blue outline
  '&:focus': { outline: 'none' },
  // Active shrinks the button when clicked
  '&:active': {
    transition: 'all 0.3s',
    transform: 'scale(0.95)'
  },
});