import { ButtonStyleProps } from './types';
import { BUTTON_STYLES } from './constants';

export function getButtonStyles({ variant, size, fullWidth }: ButtonStyleProps): string {
  return [
    BUTTON_STYLES.base,
    BUTTON_STYLES.variants[variant],
    BUTTON_STYLES.sizes[size],
    BUTTON_STYLES.width[fullWidth ? 'full' : 'auto']
  ].filter(Boolean).join(' ');
}