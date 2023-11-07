import { Container, Stack } from '@mui/material';
import { InputText } from '../input';
import * as S from './styles';
import { SpinnerBtn } from '../button/loading-buttons/name-icon/spinner';

export function ContactForm() {
  return (
    <Container maxWidth='lg'>
      <S.FormContainer component='form'>
        <S.FormCanvas>
          <Stack>
            <S.FormTitle>My Form</S.FormTitle>
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
              type='password'
              variant='outlined'
              label='Password'
              helperText='Your password here'
            />
            <SpinnerBtn
              variant='contained'
            >
              Save
            </SpinnerBtn>
          </Stack>
        </S.FormCanvas>
      </S.FormContainer>
    </Container>
  );
}