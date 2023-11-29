import { TextField, TextFieldProps } from '@mui/material';
import { ReactNode } from 'react';

type InputTextProps = TextFieldProps & {
  variant: 'outlined' | 'filled' | 'standard';
  label: string;
  helperText?: ReactNode;
  type: 'text' | 'password' | 'email';
};

export function InputText({
  type,
  variant,
  label,
  helperText,
  ...props
}: InputTextProps) {
  return (
    <TextField
      type={type}
      variant={variant}
      label={label}
      helperText={helperText}
      fullWidth
      {...props}
    />
  );
}
