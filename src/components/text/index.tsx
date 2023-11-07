import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

type TextProps = PropsWithChildren;

export function Text({ children }: TextProps) {
  return (
    <div>
      <Typography>
        {children}
      </Typography>
    </div>
  );
}