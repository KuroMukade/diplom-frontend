import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    CLEAR = 'clear',
}

export enum TextSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface TextProps {
   className?: string;
   title?: string;
   text?: string;
   textSize?: TextSize,
   theme?: TextTheme;
}

export const Text: FC<TextProps> = ({
  className, title, text, theme, textSize = TextSize.SMALL,
}) => {
  const mods: Record<string, boolean> = {
    [styles[textSize]]: true,
  };
  return (
      <div className={classNames(styles.wrapper, mods, [className, styles[theme]])}>
          {title && <p className={styles.title}>{title}</p>}
          {text && <p className={styles.text}>{text}</p>}
      </div>
  );
};
