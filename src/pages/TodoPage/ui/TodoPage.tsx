import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import { TodoList } from 'widgets/TodoList';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import styles from './TodoPage.module.scss';

interface TodoPageProps {
   className?: string
}

const TodoPage: FC<TodoPageProps> = ({ className }) => {
  const { t } = useTranslation('todo');
  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <Text textSize={TextSize.LARGE} title={t('Список дел')} />
          <TodoList className={styles.todolist} />
      </div>
  );
};

export default TodoPage;
