import { Box, Paper, Typography, styled } from '@mui/material';
import { green } from '@mui/material/colors';

export const FormTitle = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: green[500],
  marginBottom: '1rem'
});

export const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const FormCanvas = styled(Paper)({
  padding: '2rem 3rem 3rem',
  backgroundColor: green[50],
  borderRadius: '1.5rem'
});