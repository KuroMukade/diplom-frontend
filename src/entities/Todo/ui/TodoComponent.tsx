import React, { FC, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames';

import { Button, GrowthColor, ThemeButton } from 'shared/ui/Button/Button';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useNavigate } from 'react-router-dom';
import styles from './TodoComponent.module.scss';

interface TodoProps {
   className?: string;
   title: string;
   id: string;
}

export const TodoComponent: FC<TodoProps> = ({ className, title, id }) => {
  const navigate = useNavigate();

  const onEnterTodoClick = useCallback(() => {
    navigate(`/todo/${id}`);
  }, [navigate, id]);
  return (
      <div className={classNames(styles.todo, {}, [className])}>
          <Text className={styles.text} textSize={TextSize.LARGE} text={title} />
          <div className={styles.btns}>
              <Button theme={ThemeButton.ERROR}>
                  Удалить
              </Button>
              <Button
                  onClick={onEnterTodoClick}
                  growthColor={GrowthColor.SECONDARY}
                  theme={ThemeButton.OUTLINE}
              >
                  Перейти
              </Button>
          </div>
      </div>
  );
};
