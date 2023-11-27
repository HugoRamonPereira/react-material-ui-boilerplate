import { Container, IconButton, InputAdornment, Stack } from '@mui/material';
import { InputText } from '../input';
import * as S from './styles';
import { SpinnerBtn } from '../button/loading-buttons/name-icon/spinner';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export function ContactForm() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <Container maxWidth='lg'>
      <S.FormContainer component='form'>
        <S.FormCanvas>
          <Stack>
            <S.FormTitle>Login</S.FormTitle>
          </Stack>
          <Stack direction='column' spacing={3}>
            <InputText
              type='text'
              variant='outlined'
              label='Name'
              helperText='Your name here'
            />
            <InputText
              type='email'
              variant='outlined'
              label='Email'
              helperText='Your email here'
            />
            <InputText
              type={showPassword ? 'text' : 'password'}
              variant='outlined'
              label='Password'
              helperText='Your password here'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={togglePasswordVisibility} edge='end'>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <SpinnerBtn variant='contained'>Save</SpinnerBtn>
          </Stack>
        </S.FormCanvas>
      </S.FormContainer>
    </Container>
  );
}
