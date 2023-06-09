import React, { memo } from 'react';

import checkbox from 'shared/assets/icons/checkbox.svg';

import { classNames } from 'shared/lib/classNames';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
   className?: string;
   isChecked?: boolean;
   onSwitch?: () => void;
}

export const Checkbox = memo(({ className, isChecked, onSwitch }: CheckboxProps) => (
    <button
        type="button"
        className={styles.checkbox}
        onClick={() => onSwitch?.()}
    >
        {isChecked && (
        <img className={classNames(styles.hoverIcon)} src={checkbox} alt="check" />
        )}
    </button>
));
