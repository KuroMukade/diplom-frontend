import React, { FC } from 'react';

import arrow from 'shared/assets/icons/arrow.svg';

import { classNames } from 'shared/lib/classNames';

import { useTheme } from 'shared/contexts/theme';
import styles from './SidebarArrow.module.scss';

interface SidebarArrowProps {
   className?: string;
   collapsed?: boolean;
   onClick?: () => void;
}

export const SidebarArrow: FC<SidebarArrowProps> = ({ className, collapsed, onClick }) => {
  const theme = useTheme();

    console.log(collapsed)

  const mods: Record<string, boolean | undefined> = {
    [styles.opened]: !collapsed,
    [styles.closed]: collapsed,
  };

  return (
      <img className={classNames(styles.arrow, mods, [])} src={arrow} alt={collapsed ? 'open' : 'close'} />
  );
};
