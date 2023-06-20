import React, { FC, useCallback } from 'react';

import Select, { SingleValue } from 'react-select';

import { classNames } from 'shared/lib/classNames';

import { SelectOptions } from 'shared/lib/select';
import styles from './Select.module.scss';

interface SelectProps {
   className?: string;
   defaultValue: SelectOptions;
   selectOptions: SelectOptions[];
   onChange: (value: SelectOptions) => void;
}

const SelectComponent: FC<SelectProps> = ({
  onChange, className, defaultValue, selectOptions,
}) => {
  const onSelectValue = useCallback((value: SelectOptions) => {
    onChange(value);
  }, [onChange]);

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <Select
              onChange={(value) => onSelectValue(value as SelectOptions)}
              defaultInputValue={defaultValue.label}
              options={selectOptions}
          />
      </div>
  );
};

export default SelectComponent;
