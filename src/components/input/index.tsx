import { TextField, TextFieldProps } from '@mui/material';

type InputTextProps = TextFieldProps & {
  variant: 'outlined' | 'filled' | 'standard';
  label: string;
  helperText: string;
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
