import { Button, styled } from '@mui/material';
import { cyan, grey } from '@mui/material/colors';

export const OutlinedBtn = styled(Button)({
  color: cyan[500],
  textTransform: 'none',
  borderRadius: '8px',
  border: '1px solid',
  borderColor: cyan[500],
  outline: 'none',

  '&:hover': {
    backgroundColor: cyan[600],
    color: grey[50],
    border: '1px solid',
    borderColor: cyan[600],
    outline: 'none'
  },

  // Focus removes the tabindex blue outline
  '&:focus': { outline: cyan[600] },
  // Active shrinks the button when clicked
  '&:active': {
    transition: 'all 0.3s',
    transform: 'scale(0.95)'
  },
});