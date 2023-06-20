import edit from 'shared/assets/icons/edit.svg';
import editLight from 'shared/assets/icons/edit-white.svg';

import React, {
  FC, Reducer, useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import {
  fetchTodoById, getTodoData, getTodoError, getTodoIsLoading,
} from 'entities/Todo';

import {
  TaskComponent, fetchTasks, getTaskError, getTaskIsLoading, getTasks,
} from 'entities/Task';

import { CreateTaskModal } from 'features/CreateTask';

import { Theme, useTheme } from 'shared/contexts/theme';
import styles from './TodoWithTasks.module.scss';

interface TodoWithTasksProps {
   className?: string;
   todoId: string;
}

export const TodoWithTasks: FC<TodoWithTasksProps> = ({ className, todoId }) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(fetchTodoById({ todoId }));
  }, [dispatch, todoId]);

  useEffect(() => {
    dispatch(fetchTasks({ todoId }));
  }, [dispatch, todoId]);

  const todo = useSelector(getTodoData);
  const isLoading = useSelector(getTodoIsLoading);
  const error = useSelector(getTodoError);

  const tasks = useSelector(getTasks);
  const isTasksLoading = useSelector(getTaskIsLoading);
  const tasksError = useSelector(getTaskError);

  const [isCreateTaskOpen, setCreateTaskOpen] = useState(false);

  const onCreateButtonClick = useCallback(() => {
    setCreateTaskOpen((prev) => !prev);
  }, []);

  if (error || tasksError) {
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <Text title={t('Произошла ошибка')} />
        </div>
    );
  }


  if (isLoading || isTasksLoading) {
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <Loader />
        </div>
    );
  }

  if (!isLoading && tasks?.length === 0) {
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <Text textSize={TextSize.LARGE} title={todo?.title} />
            <Text textSize={TextSize.LARGE} title={t('Нет задач')} />
            <div className={styles.noTasks}>
                <Button
                    theme={ThemeButton.FILL}
                    className={styles.btn}
                    onClick={onCreateButtonClick}
                >
                    {t('Создать задачу')}
                    <img src={theme === Theme.DARK ? edit : editLight} alt="" />
                </Button>
            </div>
            <CreateTaskModal
                todoId={todoId}
                isOpen={isCreateTaskOpen}
                onClose={onCreateButtonClick}
            />
        </div>
    );
  }

  return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <Text textSize={TextSize.LARGE} title={todo?.title} />
          {tasks && tasks?.map((task) => (
              <TaskComponent
                  key={task._id}
                  taskId={task._id}
                  todoId={todo?._id!}
                  title={task.title}
                  text={task.text}
                  priority={task.priority}
              />
          ))}
          <div className={styles.noTasks}>
              <Button
                  theme={ThemeButton.FILL}
                  className={styles.btn}
                  onClick={onCreateButtonClick}
              >
                  {t('Создать задачу')}
                  <img src={theme === Theme.DARK ? edit : editLight} alt="" />
              </Button>
          </div>
          <CreateTaskModal
              todoId={todoId}
              isOpen={isCreateTaskOpen}
              onClose={onCreateButtonClick}
          />
      </div>
  );
};
