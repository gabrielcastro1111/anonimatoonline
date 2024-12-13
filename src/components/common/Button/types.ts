export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'default' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export interface ButtonStyleProps {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
}