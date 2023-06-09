import React, { memo } from 'react';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from '../../model/items';

import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
   item: SidebarItemType;
   collapsed: boolean;
}

export const SidebarItem = memo(({
  item, collapsed,
}: SidebarItemProps) => {
  const { t } = useTranslation();
  return (
      <AppLink className={styles.link} theme={AppLinkTheme.PRIMARY} to={item.path}>
          <img className={styles.icon} src={item.icon} alt="" />
          <span className={styles.text}>
              {t(item.text)}
          </span>
      </AppLink>
  );
});
