import { FormHelperText } from '@mui/material';
import { ReactNode } from 'react';
import * as S from './styles';

interface ErrorMessageProps {
  message: string | undefined;
  icon: ReactNode;
}

export function ErrorMessage({ message, icon }: ErrorMessageProps) {
  return (
    <FormHelperText>
      <S.ErrorMessageContainer>
        {icon}
        {message}
      </S.ErrorMessageContainer>
    </FormHelperText>
  );
}
