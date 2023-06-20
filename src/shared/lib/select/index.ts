export type SelectValue = 'LOW' | 'MEDIUM' | 'HIGH';
type SelectLabel = 'Маленький' | 'Средний' | 'Срочно';

export interface SelectOptions {
    label: SelectLabel;
    value: SelectValue;
}

export function createSelectItem(value: SelectValue): SelectOptions {
  switch (value) {
    case 'LOW':
      return {
        label: 'Маленький',
        value: 'LOW',
      };
    case 'MEDIUM':
      return {
        label: 'Средний',
        value: 'MEDIUM',
      };
    case 'HIGH':
      return {
        label: 'Срочно',
        value: 'HIGH',
      };
    default: return {
      label: 'Маленький',
      value: 'LOW',
    };
  }
}
