import editIcon from 'shared/assets/icons/edit.svg';
import editWhiteIcon from 'shared/assets/icons/edit-white.svg';

import React, {
  FC, useCallback, useMemo, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { Theme, useTheme } from 'shared/contexts/theme';

import { getUserInited } from 'entities/User';

import { CreateTodoModal } from 'features/CreateTodo';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarArrow } from '../SidebarArrow/SidebarArrow';

import { SidebarItemsList } from '../../model/items';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(true);

  const [isCreateTodoOpen, setCreateTodoOpen] = useState(false);

  const inited = useSelector(getUserInited);

  const { theme } = useTheme();

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const linkList = useMemo(() => SidebarItemsList.map((item) => {
    if (item.authOnly && !inited) {
      return null;
    }

    return (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
    );
  }), [collapsed, inited]);

  const onToggleCreateTodo = useCallback(() => {
    setCreateTodoOpen((prev) => !prev);
  }, []);

  return (
      <div
          data-testid="sidebar"
          className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
      >
          <nav className={styles.nav}>
              {linkList}
              {inited && (
              <Button onClick={onToggleCreateTodo} theme={ThemeButton.CLEAR} className={styles.createTodoBtn}>
                  <span className={styles.todoBtnText}>{t('Создать todo')}</span>
                  {!collapsed && (
                  <img src={theme === Theme.DARK ? editIcon : editWhiteIcon} alt={t('Создать todo')} />
                  )}
              </Button>
              )}
          </nav>
          <Button
              data-testid="sidebar-toggle"
              type="button"
              className={styles.toggle}
              onClick={onToggle}
          >
              <SidebarArrow collapsed={collapsed} />
          </Button>
          <div
              className={
                classNames(styles.switchers, { [styles.collapsedSwitchers]: collapsed }, [className])
            }
          >
              <ThemeSwitcher collapsed={collapsed} />
              <LangSwitcher collapsed={collapsed} />
              {inited && <CreateTodoModal isOpen={isCreateTodoOpen} onClose={onToggleCreateTodo} />}
          </div>
      </div>
  );
};
