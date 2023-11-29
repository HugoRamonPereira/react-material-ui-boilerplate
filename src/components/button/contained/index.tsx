import { PropsWithChildren } from 'react';
import * as S from './styles';
import { ButtonProps } from '@mui/material';
import { EnterIcon } from '@radix-ui/react-icons';

type BtnContainedProps = ButtonProps &
  PropsWithChildren<{
    size: 'small' | 'medium' | 'large';
  }>;

export function BtnContained({ children, size, ...props }: BtnContainedProps) {
  return (
    <S.ContainedBtn
      variant='contained'
      size={size}
      disableRipple
      disableElevation
      endIcon={<EnterIcon />}
      {...props}
    >
      {children}
    </S.ContainedBtn>
  );
}
