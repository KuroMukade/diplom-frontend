import { ButtonHTMLAttributes, memo } from 'react';

import { classNames } from 'shared/lib/classNames';

import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outlined',
  FILL = 'fill',
  ERROR = 'error',
}

export enum ButtonSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl',
}

export enum GrowthColor {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   theme?: ThemeButton;
   size?: ButtonSize;
   growthColor?: GrowthColor;
   disabled?: boolean;
}

export const Button = memo(({
  className, theme = ThemeButton.CLEAR, children, disabled, size = ButtonSize.M, growthColor = GrowthColor.DEFAULT, ...restBtnProps
}: ButtonProps) => {
  const mods: Record<string, boolean | undefined> = {
    [styles[theme]]: true,
    [styles[size]]: true,
    [styles[growthColor]]: growthColor && true,
    [styles.disabled]: disabled,
  };

  return (
      <button
          type="button"
          className={
            classNames(
              styles.button,
              mods,
              [styles.withGrowth, className],
            )
          }
          disabled={disabled}
          {...restBtnProps}
      >
          {children}
      </button>
  );
});
