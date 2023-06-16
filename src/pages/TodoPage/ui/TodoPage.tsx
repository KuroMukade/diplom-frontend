import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import { useNavigate, useParams } from 'react-router-dom';
import { TodoWithTasks } from 'widgets/TodoWithTasks/ui';
import styles from './TodoPage.module.scss';

interface TodoPageProps {
   className?: string;
}

const TodoPage: FC<TodoPageProps> = ({ className }) => {
  const todoId = useParams();

  const navigate = useNavigate();

  if (!todoId.id) {
    navigate('/todo');
  }

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <TodoWithTasks todoId={todoId.id!} />
      </div>
  );
};

export default TodoPage;
