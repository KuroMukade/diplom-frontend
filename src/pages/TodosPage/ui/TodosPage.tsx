import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import { TodoList } from 'widgets/TodoList';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import styles from './TodosPage.module.scss';

interface TodosPageProps {
   className?: string
}

const TodosPage: FC<TodosPageProps> = ({ className }) => {
  const { t } = useTranslation('todo');
  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <Text textSize={TextSize.LARGE} title={t('Список дел')} />
          <TodoList className={styles.todolist} />
      </div>
  );
};

export default TodosPage;
