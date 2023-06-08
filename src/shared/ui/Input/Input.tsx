import React, {
  InputHTMLAttributes, memo,
} from 'react';

import { classNames } from 'shared/lib/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
   className?: string;
   value?: string;
   onChange?: (value: string) => void;
   readonly?: boolean;
}

export const Input = memo(({
  className, onChange, value, type = 'text', placeholder = '', readonly = false,
}: InputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Record<string, boolean> = {
    [styles.readonly]: readonly,
  };

  return (
      <input
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
          readOnly={readonly}
          className={classNames(styles.input, mods, [className])}
      />
  );
});
