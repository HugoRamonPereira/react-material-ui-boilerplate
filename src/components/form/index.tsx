import { Container, IconButton, InputAdornment, Stack } from '@mui/material';
import { InputText } from '../input';
import * as S from './styles';
import { useState } from 'react';
import {
  CrossCircledIcon,
  EyeOpenIcon,
  EyeClosedIcon
} from '@radix-ui/react-icons';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BtnContained } from '../button/contained';
import { ErrorMessage } from '../error-message';

const loginFormSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }),
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email is invalid'
  }),
  password: z
    .string({
      required_error: 'Password is required'
    })
    .min(5, 'Password too short')
    .max(20, 'Password too long')
});

type LoginFormInputs = z.infer<typeof loginFormSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema)
  });

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  async function handleLogin(data: LoginFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Container maxWidth='lg'>
      <S.FormContainer component='form' onSubmit={handleSubmit(handleLogin)}>
        <S.FormCanvas>
          <Stack>
            <S.FormTitle>Login</S.FormTitle>
          </Stack>
          <Stack direction='column' spacing={2}>
            <Controller
              control={control}
              name='name'
              render={() => {
                return (
                  <>
                    <InputText
                      type='text'
                      variant='outlined'
                      label='Name'
                      error={!!errors.name}
                    />
                    {errors.name && (
                      <ErrorMessage
                        message={errors.name?.message}
                        icon={<CrossCircledIcon />}
                      />
                    )}
                  </>
                );
              }}
            />
            <Controller
              control={control}
              name='email'
              render={() => {
                return (
                  <>
                    <InputText
                      type='email'
                      variant='outlined'
                      label='Email'
                      error={!!errors.email}
                    />
                    {errors.email && (
                      <ErrorMessage
                        message={errors.email?.message}
                        icon={<CrossCircledIcon />}
                      />
                    )}
                  </>
                );
              }}
            />
            <Controller
              control={control}
              name='password'
              render={() => {
                return (
                  <>
                    <InputText
                      type={showPassword ? 'text' : 'password'}
                      variant='outlined'
                      label='Password'
                      error={!!errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? (
                                <EyeOpenIcon />
                              ) : (
                                <EyeClosedIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                    {errors.password && (
                      <ErrorMessage
                        message={errors.password.message}
                        icon={<CrossCircledIcon />}
                      />
                    )}
                  </>
                );
              }}
            />
            <BtnContained size='large' type='submit' disabled={isSubmitting}>
              Log in
            </BtnContained>
          </Stack>
        </S.FormCanvas>
      </S.FormContainer>
    </Container>
  );
}
