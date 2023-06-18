import React, { FC, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames';

import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './TodoComponent.module.scss';

interface TodoProps {
   className?: string;
   title: string;
   id: string;
   onDelete?: (id: string) => void;
}

export const TodoComponent: FC<TodoProps> = ({
  className, title, id, onDelete,
}) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const onEnterTodoClick = useCallback(() => {
    navigate(`/todo/${id}`);
  }, [navigate, id]);

  const onDeleteTodoClick = useCallback(() => {
    onDelete?.(id);
  }, [onDelete, id]);

  return (
      <div className={classNames(styles.todo, {}, [className])}>
          <Text className={styles.text} textSize={TextSize.LARGE} text={title} />
          <div className={styles.btns}>
              <Button onClick={onDeleteTodoClick} theme={ThemeButton.ERROR}>
                  {t('Удалить')}
              </Button>
              <Button
                  onClick={onEnterTodoClick}
                  growthColor={GrowthColor.SECONDARY}
                  theme={ThemeButton.OUTLINE}
              >
                  {t('Перейти')}
              </Button>
          </div>
      </div>
  );
};
