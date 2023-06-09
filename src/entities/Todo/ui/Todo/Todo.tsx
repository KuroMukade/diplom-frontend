import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { useSelector } from 'react-redux';

import { Loader } from 'shared/ui/Loader/Loader';

import { TaskComponent } from 'entities/Task';
import { fetchTodoTasks } from 'entities/Todo/model/services/fetchTodoTasks/fetchTodoTasks';
import { getTodoTasks } from 'entities/Todo/model/selectors/getTodoTasks/getTodoTasks';
import { getTodoIsLoading } from 'entities/Todo/model/selectors/getTodoIsLoading/getTodoIsLoading';
import { getTodoError } from 'entities/Todo/model/selectors/getTodoError/getTodoError';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { todoReducer } from 'entities/Todo/model/todoSlice/todoSlice';
import styles from './Todo.module.scss';

interface TodoProps {
   className?: string;
   title?: string;
   id: string;
}

const reducers: ReducersList = {
  todo: todoReducer,
};

export const Todo: FC<TodoProps> = ({ className, title, id }) => {
  useDynamicModuleLoader('todo', reducers, false);
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodoTasks({ todoId: id }));
  }, [dispatch, id]);

  const tasks = useSelector(getTodoTasks);
  const isLoading = useSelector(getTodoIsLoading);
  const error = useSelector(getTodoError);

  console.log(id);

  if (isLoading) {
    return (
        <div className={styles.wrapper}>
            <Loader />
        </div>
    );
  }

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          {title}
          <div className={styles.tasksWrapper}>
              {tasks && tasks.map((task, index) => (
                  <TaskComponent key={task.id} data={task} />
              ))}
          </div>
      </div>
  );
};
