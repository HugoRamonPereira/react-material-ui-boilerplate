import { PropsWithChildren, useState } from 'react';
import * as S from './styles';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import AppleSpinner from '../../../../../assets/apple-spinner.svg';
import { ButtonProps } from '@mui/material';

type SpinnerBtnProps = ButtonProps &
  PropsWithChildren<{
    variant: 'contained' | 'outlined' | 'text';
  }>;

export function SpinnerBtn({ children, variant, ...props }: SpinnerBtnProps) {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <Stack display='block' direction='row' spacing={2}>
      <S.LoadingBtn
        variant={variant}
        fullWidth
        onClick={handleClick}
        loading={loading}
        loadingIndicator={
          <img src={AppleSpinner} width={35} height={35} alt='spinner' />
        }
        endIcon={<SaveIcon />}
        {...props}
      >
        {children}
      </S.LoadingBtn>
    </Stack>
  );
}
