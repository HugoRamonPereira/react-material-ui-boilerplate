import { TextField } from '@mui/material';

type InputTextProps = {
  variant: 'outlined' | 'filled' | 'standard';
  label: string;
  helperText: string;
  type: 'text' | 'password' | 'email'
}

export function InputText({
  type,
  variant,
  label,
  helperText
}: InputTextProps) {
  return(
    <TextField
      type={type}
      variant={variant}
      label={label}
      helperText={helperText}
      fullWidth
    />
  );
}